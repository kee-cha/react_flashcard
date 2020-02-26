import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div>{props.title}</div>
                <div className="word">{props.word}</div>           
            </div>
            <div className="back">
                <div className="definition">{props.definition}</div>
            </div>
        </div>
    </div>
)

export default Card
