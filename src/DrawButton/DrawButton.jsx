import React, {Component} from 'react';
import './DrawButton.css';

class DrawButton extends Component{
    constructor(props){
        super(props);
        this.state= {
            name: props.name,
            addNewCard: false,
        }
        this.drawCard = this.drawCard.bind(this)
    }

    drawCard(i){
        this.props.drawCard(i);
    }

    render(props) {
        return(
            <div className = "buttonContainer">
                <button className="btn" key={this.state.name} onClick={this.drawCard}>{this.state.name}</button>
            </div>
        )
    }
}

export default DrawButton