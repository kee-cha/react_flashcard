import React from 'react';
import './NewCard.css'

const NewCard = (props) => (
    <form onSubmit ={props.submitCard}>
        <input type ="hidden" value = {props.id}></input>
        <div className="newCard-container">
            <div className="newCard" >
                <input type="text" placeholder={props.word}></input>
                <textarea className="definition" placeholder={props.definition}></textarea>
            </div>
        </div>
        <div>
               <input type= "submit" value = "Submit New Card"></input>
        </div>
     
    </form>
)

export default NewCard