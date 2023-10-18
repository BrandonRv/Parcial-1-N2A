import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from './componentes/TaskForm';
import TaskList from './componentes/TaskList';

function App() {

const [active, setActive] = useState(true)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const efectoSecundario = () => {
    console.log("useEffect", active);
  }
  useEffect(efectoSecundario, [active])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="container">
      <h1>Todo APP</h1>
      <TaskForm onAddTask={addTask} />
      <br />
      <button className="tareaslist" onClick={() => setActive(!active)}>{active ? 'No Mostrar Cosas por Hacer' : 'Mostrar Cosas por Hacer'}</button>
      <br />
      <div className='cajacolorrr'>
        <div className='centralll'>
          <div>
      {active ? <TaskList tasks={tasks} onDeleteTask={deleteTask} />: "Tareas No Visibles"}
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
