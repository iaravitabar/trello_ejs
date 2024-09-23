import React, { useState } from 'react';

const NewListForm = ({ addList }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addList(title);
            setTitle('');  // Limpia el campo después de agregar
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nueva lista" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Agregar Lista</button>
        </form>
    );
};

export default NewListForm;