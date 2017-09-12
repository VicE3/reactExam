import React, { Component } from 'react';
import './App.css';


const initState = {
  input: 0,
  theNumber: 0,
  numbOfGuesses: 0,
  gameMode: '',
  userAnswers: [],
  highScore: 0,
  newScore: 0,

};

class App extends Component {
  constructor() {
    super();
    this.state = initState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStandard = this.handleStandard.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: parseInt(e.target.value)
    })
  }

  handleSubmit() {
    const copyState = Object.assign({}, this.state);

    if(this.state.input === '') {alert('Please enter a valid number')
  }
  if(this.state.input == this.state.theNumber) {
    alert('Good job! You guessed the number');
    copyState.numbOfGuesses++;

    if(copyState.highScore > copyState.numbOfGuesses || copyState.highScore === 0) {
      copyState.highScore = copyState.numbOfGuesses;
    }
    copyState.numbOfGuesses = 0;
  } else if(this.state.input > this.state.theNumber) {
    alert('Your guess is too high. Please try again');
    copyState.numbOfGuesses++;
  } else if(this.state.input < this.state.theNumber) {
    alert('Your guess is too low. Please try again');
    copyState.numbOfGuesses++;
  }
  this.state.userAnswers.push(this.state.input);
  this.setState(copyState)
}

handleStandard() {
  const copyState = Object.assign({}, this.state);
  copyState.gameMode = 'Standard';
  copyState.theNumber = Math.floor((Math.random() * (10)) + (1))
  this.setState(copyState)
}

handleExpert() {
  const copyState = Object.assign({}, this.state);
  copyState.gameMode = 'Expert';
  copyState.theNumber = Math.floor((Math.random() * (100)) + (1))
  this.setState(copyState)
}

handleReset() {
  this.setState(initState);
}


render() {

  return(
    <div>
    <h1>Start Game</h1>
    <button onClick={() => this.handleStandard()}>Standard</button>
    <button onClick={() => this.handleExpert()}>Expert</button>
    <div id='userGuess'><input type="number" onChange={(e) => this.handleChange(e)} value={this.state.input}/></div>
    <button onClick={() => this.handleSubmit()}>Submit</button>
    <button onClick={() => this.handleReset()}>Reset</button>
    <div id='numOfGuesses'>Number of Guesses <p>{this.state.numbOfGuesses}</p></div>
    <div id='highScore'>High Score <p>{this.state.highScore}</p></div>
    </div>
  )

}
}

export default App;
