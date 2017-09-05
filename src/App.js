import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      "numOfGuesses": 0,
      "highScore": 0,
    };
    this.handleClick = this.handleClick.bind(this);

  }


  handleClick(e) {
    e.preventDefault
    var guess = prompt('I am thinking of a number between 1 and 10. What is my number?');

    var randomNumber = Math.floor(Math.random() * 10) + 1;

    var theGuess = parseInt(guess);

    if (theGuess === randomNumber) {
      alert(' You guessed the number!');
      this.setState({
        numOfGuesses: 1
      })
      console.log(randomNumber);
    } else if (theGuess !== randomNumber) {
        alert( theGuess + ' is not the number.');
        prompt('I am thinking of a number between 1 and 10. What is my number?');
        this.setState({
          numOfGuesses: 2
      })
      console.log(randomNumber);
      alert('Sorry, the number was ' + randomNumber);
    }
  }


  handleClick1(e) {
    e.preventDefault
    var guess = prompt('I am thinking of a number between 1 and 100. What is my number?');

    var randomNumber = Math.floor(Math.random() * 100) + 1;

    var theGuess = parseInt(guess);

    if (theGuess === randomNumber) {
      alert(' You guessed the number!');
      this.setState({
        numOfGuesses: 1
      })
      console.log(randomNumber);
    } else if (theGuess !== randomNumber) {
        alert( theGuess + ' is not the number.');
        prompt('I am thinking of a number between 1 and 10. What is my number?');
        this.setState({
          numOfGuesses: 2
      })
      console.log(randomNumber);
      alert('Sorry, the number was ' + randomNumber);
    }
  }




  render() {
    return (
      <div className="container">
        <h1>
          Start Game
          </h1>
      <button className="standard" onClick={this.handleClick}>Standard</button>
      <button className="expert" onClick={this.handleClick1}>Expert</button>
      <form>
        <input type="text" name="1-10" placeholder="Guess a number 1-10"></input>
        <input type="text" name="1-100" placeholder="Guess a number 1-100"></input>
      </form>
      <button onClick={this.handleClick}>Submit</button>
      <h2 className="numOfGuesses">
      Number of Guesses
      </h2>
        <p>{this.state.numOfGuesses}</p>
      <h2 className="highScore">
      High Score
      </h2>
      <button className="reset">
      Reset
      </button>
      </div>
    );
  }

}

export default App;
