import React, { Component} from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import Draw from './DrawButton/DrawButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
        {id: 1, Word: "state", Definition: "JS object that holds values for a component"},
        {id: 2, Word: "props", Definition: "A way to pass data into components on initialization"},
      ],
      currentCard: {}
    }
  }

  componentWillMount() { 
    const currentCards = this.state.cards;
    
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards) {
    var card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return(card)
  }

  updateCard(){
    const currentCards =  this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    });
  }

  render() {
      return (
      <div className="App">
        <div className = "cardRow">
          <Card Word = {this.state.currentCard.Word} 
              Definition = {this.state.currentCard.Definition}
              />
        </div>
        <div className = "buttonRow">
          <DrawButton drawCard = {this.updateCard}/>
        </div>        
      </div>
    );
  }
}

export default App;
