import React, {useState} from 'react';
import Task from './Task';

function Column({ column, addTask}) {
    const [taskName, setTaskName] =useState('');

    const handleAddTask = ()=> {
        if (taskName) {
            addTask(column.id, taskName);
            setTaskName('');
        }
    };

    return (
        <div className='column'>
            <h2>{column.name}</h2>
            <input
                type="text"
                value="{taskName}"
                onChange={(e)=> setTaskName(e.target.value)}
                placeholder="New Task"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {column.tasks.map(task => (
                    <Task key={task.id} task={task}/>
                ))}
            </ul>
        </div>
    );
}

export default Column;