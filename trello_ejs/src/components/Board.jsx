import React, { useState, useEffect } from 'react';
import List from './List';
import NewListForm from './NewListForm';

const Board = () =>{
    const [lists, setLists] = useState([]);

    useEffect (()=> {
        const fetchData = async () => {
            const boardData = [
                {id: 1, title: "To Do", cards:[{id:1,content:"Task 1" }, { id: 2, content: "Task 2" }] },
                { id: 2, title: "In Progress", cards: [{ id: 3, content: "Task 3" }] }
            ];
            setLists(boardData);
        };
        fetchData();
    }, []);

    const addList = (title)=>{
        const newList = { id: lists.length + 1, title, cards: [] };
        setLists([...lists, newList]);
    };
    return(
        <div className="board">
            <h1> Tablero</h1>
            <div className="list container">
                {lists.map(list=>(
                    <List key = {list.id} list ={list} />
                ))}
                <NewListForm addList={addList}/>
            </div>
        </div>
    );
};

export default Board;