import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import Collection from './Collection/Collection';
import DrawButton from './DrawButton/DrawButton';
import axios from 'axios'
import NewCard from './NewCard/NewCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      collection: [],
      cards: [],
      currentCard: {},
      setSelected: false,
      currentSet: {},
      addNewCard: false,
    }
  }

  async componentDidMount() {
    let userData = await axios.get('https://localhost:44393/api/collection')
      .then(Response => { return Response.data })

    this.setState({
      collection: userData,
    })
  }

  getCardSet(cardSet) {
    const cardTitle = cardSet._targetInst.return.key;
    this.state.collection.forEach(element => {
      if (element.title === cardTitle) {
        const currentCards = element;

        this.setState({
          cards: currentCards,
          currentCard: this.getRandomCard(currentCards),
          setSelected: true,
          currentSet: element,
        })
      }
    });
  }

  getRandomCard(currentCards) {
    var set = currentCards.cards
    var card = currentCards.cards[Math.floor(Math.random() * set.length)]
    return (card)
  }

  updateCard(i) {
    if(i._targetInst.key === "Draw Card"){
      const currentCards = this.state.cards;
      this.setState({
        currentCard: this.getRandomCard(currentCards)
      });
    }
    else if(i._targetInst.key === "Add New Card"){
      this.setState({
        addNewCard: true,
        setSelected: false,
      });
    }
  }

  submitCard(i){
    const newCards ={
      stackId: Number(i.target.elements[0].value),
      Word: i.target.elements[1].value,
      Definition: i.target.elements[2].value,
    };
    axios({
      method: "post",
      url: 'https://localhost:44393/api/card', 
      data: newCards});      
  }

  render() {
    let element = undefined;
    if (this.state.setSelected === true) {
      element =
        <div className="App">
          <div className="cardRow">
            <Card word={this.state.currentCard.word}
              title={this.state.currentSet.title}
              definition={this.state.currentCard.definition}
            />
          </div>
          <br />
          <div className="buttonRow">
            <DrawButton drawCard={this.updateCard} name="Draw Card" />
            <DrawButton drawCard={this.updateCard} name="Add New Card" />
          </div>
        </div>;
    }
    if (this.state.addNewCard === true) {
      element = 
        <NewCard word = "Enter Word"
          definition ="Enter Definition"
          submitCard = {i=>this.submitCard(i)}
          id = {this.state.currentSet.id} />
    }
    if (this.state.collection.length > 0) {
      return (
        <div className = "flashcards">
          <Collection set={this.state.collection} onClick={i => this.getCardSet(i)} />
          <div className ="cardSet">{element}</div>
        </div>
      )
    } else {
      return (
        <div>Loading</div>
      )
    }
  }
}

export default App;
