import React, { useState } from 'react';
import Task from './Task';

function Column({ column, addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName) {
      addTask(column.id, taskName);
      setTaskName(''); 
    }
  };

  return (
    <div className="box">
      <h2 className="title is-4">{column.name}</h2>
      <div className="field">
        <div className="control">
          <input 
            className="input" 
            type="text" 
            value={taskName} 
            onChange={(e) => setTaskName(e.target.value)} 
            placeholder="Nueva tarea"
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-primary" onClick={handleAddTask}>Agregar tarea</button>
        </div>
      </div>
      <ul>
        {column.tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default Column;
