import React, { Fragment, useState } from 'react';

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

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNewTask(e.target.value)} value={newTask} />
        <button type="submit">Add task</button>
      </form>
      {
        task.map((t: Itask, i: number) => {
          return <h1 key={i}>{t.name}</h1>
        })
      }
    </Fragment>
  );
}
export default App;








