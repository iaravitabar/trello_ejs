import React, { useState } from 'react';

const NewCardForm = ({ addCard }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            addCard(content);
            setContent('');  // Limpia el campo después de agregar
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nueva tarjeta" 
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Agregar Tarjeta</button>
        </form>
    );
};

export default NewCardForm;
