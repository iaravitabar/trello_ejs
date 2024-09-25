import React, { useState } from 'react';
import Board from './components/Board';

function App() {
  const [columns, setColumns] = useState([
    { id: 1, name: 'To Do', tasks: [] },
    { id: 2, name: 'In Progress', tasks: [] },
    { id: 3, name: 'Review', tasks: [] },
    { id: 4, name: 'Done', tasks: [] }
  ]);

  const addTask = (columnId, taskName) => {
    if (!taskName) return; 
    setColumns(columns.map(column => 
      column.id === columnId 
        ? { ...column, tasks: [...column.tasks, { id: Date.now(), name: taskName }] } 
        : column
    ));
  };

  return (
    <div className="container">
        <section className='hero is-primary'>
            <div className='hero-body'>
                <p className='title'>Simulador de Trello</p>
            </div>
        </section>
      <Board columns={columns} addTask={addTask} />
    </div>
  );
}

export default App;