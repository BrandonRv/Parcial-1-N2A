import React, { useState } from 'react';

function TaskList({ tasks, onDeleteTask }) {
  const [taskStatus, setTaskStatus] = useState(tasks.map(task => task.completada));

  const handleCheckboxChange = (index) => {
    const newTaskStatus = [...taskStatus];
    newTaskStatus[index] = !newTaskStatus[index];
    setTaskStatus(newTaskStatus);
  };

  return (
    <div id="lista-tarea">
      {tasks.map((task, index) => (
        <div key={task.id} className={`tarjeta ${taskStatus[index] ? 'completada' : ''}`}>
          <div className="card-body">
            <input
              type="checkbox"
              className="checkboxTarea"
              checked={taskStatus[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            <span className={`centralmadi ${taskStatus[index] ? 'completada-text' : ''}`}>{task.tarea} </span>
            <button className="fa-solid fa-trash" onClick={() => onDeleteTask(task.id)}> Quitar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
