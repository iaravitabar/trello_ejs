import React, { useState } from 'react';
import Card from './Card';
import NewCardForm from './NewCardForm';

const List = ({ list }) => {
    const [cards, setCards] = useState(list.cards);

    const addCard = (content) => {
        const newCard = { id: cards.length + 1, content };
        setCards([...cards, newCard]);
    };

    return (
        <div className="list">
            <h2>{list.title}</h2>
            <div className="cards">
                {cards.map(card => (
                    <Card key={card.id} card={card} />
                ))}
            </div>
            <NewCardForm addCard={addCard} />
        </div>
    );
};

export default List;