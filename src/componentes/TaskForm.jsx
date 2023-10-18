import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const newTask = {
        id: Date.now(),
        tarea: task,
        completada: false
      };
      onAddTask(newTask);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Agrega Nueva Tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <br />
      <button type="submit" className="btnAgregar">Agregar</button>
    </form>
  );
}

export default TaskForm;
