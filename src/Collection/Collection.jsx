import React from 'react';
import './Collection.css';

function Collection(props) {
    return (
        <div className="collection-container">
            {props.set.map(item =>
                <div className="collection" onClick ={props.onClick} key = {item.title}>
                    <div className="title">{item.title}</div>
                </div>
            )}
        </div>
    );
}

export default Collection