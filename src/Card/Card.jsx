import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="Word">{props.Word}</div>           
            </div>
            <div className="back">
                <div className="Definition">{props.Definition}</div>
            </div>
        </div>
    </div>
)

export default Card
