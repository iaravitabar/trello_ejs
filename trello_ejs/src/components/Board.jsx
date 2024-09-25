import React from "react";
import Column from './Column';

function Board({coluns, addTask}) {
    return (
        <div className="board">
            {columns.map(column =>(
                <Column key={column.id} column ={column} addTask={addTask}/>
            ))}
        </div>
    );
}
export default Board;