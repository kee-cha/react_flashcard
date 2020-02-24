import React, { Component} from 'react';
import './App.css';
import Card from './Card/Card';
import Collection from './Card/Collection';
import DrawButton from './DrawButton/DrawButton';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      collection: [],
      cards: [],
      currentCard: {}
    }
  }

  async componentDidMount() { 
    let userData = await axios.get('https://localhost:44393/api/collection')
    .then(Response =>{return Response.data})
    const currentCards = userData[0];
    
    this.setState({
      collection: userData,
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards) {
    var set = currentCards.cards
    var card = currentCards.cards[Math.floor(Math.random() * set.length)]
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
          <Card word = {this.state.currentCard.word} 
                definition = {this.state.currentCard.definition}
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
