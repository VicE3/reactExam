import React, { Component } from 'react';
import './App.css';


let initState = {
  input: 0,
  theNumber: 0,
  numbOfGuesses: 0,
  gameMode: '',
  highScore: 0,
  newScore: 0,

};

class App extends Component {
  constructor() {
    super();
    this.state = initState;
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(e) {
    const copyState = Object.assign({}, this.state);

    if(this.state.input === '') {
      alert('Please enter a valid number');
  }

  if(this.state.highScore > this.state.numbOfGuesses || this.state.highScore == 0) {
    copyState.highScore = copyState.numbOfGuesses;
  }

  if(this.state.input == this.state.theNumber) {
    copyState.numbOfGuesses++;
    alert('Good job! You guessed the number');
    if(copyState.gameMode == 'Standard') {
      copyState.theNumber = Math.floor(Math.random() * 10) + 1;
    } else if (copyState.gameMode == 'Expert') {
      copyState.theNumber = Math.floor(Math.random() * 100) + 1;
    }
    copyState.numbOfGuesses = 0;
    copyState.input = 0;
    
    
  } else if(this.state.input > this.state.theNumber) {
    copyState.numbOfGuesses++;
    alert('Your guess is too high. Please try again');
    
  } else if(this.state.input < this.state.theNumber) {
    copyState.numbOfGuesses++;
    alert('Your guess is too low. Please try again');
    
  }
  this.setState(copyState);
  console.log(this.state.input + " I am the users guess, hi");
}

handleStandard() {
  const copyState = Object.assign({}, this.state);
  copyState.gameMode = 'Standard';
  copyState.theNumber = Math.floor(Math.random() * 10) + 1;
  this.setState(copyState);
  console.log(this.state.theNumber);
}

handleExpert() {
  const copyState = Object.assign({}, this.state);
  copyState.gameMode = 'Expert';
  copyState.theNumber = Math.floor(Math.random() * 100) + 1;
  this.setState(copyState)
}

handleReset() {
  this.setState(initState);
}


render() {

  return(
    <div>
    <h1>Start Game</h1>
    <p>Please choose a difficulty level</p>
    <div>Chosen game mode</div>
    <div> {this.state.gameMode} </div>
    <button className="gameMode" onClick={(e) => this.handleStandard(e)}>Standard</button>
    <button className="gameMode" onClick={() => this.handleExpert()}>Expert</button>
    <div id='userGuess'><input onChange={(e) => this.handleChange(e)} value={this.state.input}/></div>
    <button className="bottomBtns" onClick={(e) => this.handleSubmit(e)}>Submit</button>
    <div id='numOfGuesses'>Number of Guesses <p>{this.state.numbOfGuesses}</p></div>
    <div id='highScore'>High Score <p>{this.state.highScore}</p></div>
    <button className="bottomBtns" onClick={(e) => this.handleReset(e)}>Reset</button>
    </div>
  )

}
}

export default App;
