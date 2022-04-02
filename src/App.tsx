import React, { useState } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>

interface Itask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  {/* useState */ }
  const [newTask, setNewTask] = useState('');
  const [task, setTask] = useState<Itask[]>([]);

  const handleSubmit = (event: FormElement) => {
    event.preventDefault();
    addTask(newTask);
    setNewTask('')
    console.log(task);
  }

  const addTask = (name: string) => {
    const newTasks = [...task, { name, done: false }];
    setTask(newTasks);
  }
  {/*chage state tasks */ }

  const changeButtonTasks = (i: number): void => {
    const newTasks: Itask[] = [...task];
    newTasks[i].done = !newTasks[i].done
    setTask(newTasks)
  }

  { /*Delete task */ }
  const deleteTask = (i: number): void => {
    const newTasks: Itask[] = [...task];
    newTasks.splice(i, 1);
    setTask(newTasks);
  }






  return (
    <div className='container'>
      <div className='col s4 m6'>
        <div className='card blue-grey darken-1'>
          <div className='card-content white-text'>
            <form onSubmit={handleSubmit} className='col s12'>
              <input
                className='input-task'
                type="text" onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
                autoFocus
              />
              <button type="submit" className='btn waves-effect waves-light'>Add task</button>
            </form>
            {task.map((t: Itask, i: number) => (
              <div className='container col s4' key={i}>
                <h5 style={{ textDecoration: t.done ? 'line-through' : '' }}>{t.name}</h5>
                <button className='btn-floating btn-large waves-effect waves-light red' onClick={() => changeButtonTasks(i)}>
                  {t.done ? '✓' : '✗'}
                </button>
                <button className='btn-floating btn-large waves-effect waves-light red' onClick={() => deleteTask(i)}>
                  🗑
                </button>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}
export default App;








