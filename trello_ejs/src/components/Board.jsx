import React from 'react';
import Column from './Column';

function Board({ columns, addTask }) {
  return (
    <div className="columns is multiline is-centered">
      {columns.map(column => (
        <div key={column.id} className="column is-one-quarter">
            <Column column={column} addTask={addTask} />
        </div>
      ))}
    </div>
  );
}

export default Board;
