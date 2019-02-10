import React, { Component } from 'react';
import HomePage from './components/HomePage/HomePage';
import Game from './components/Game/Game';

//styles
import './App.scss';
import './stylesheets/styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateTester: true
    }
  }

  render() {
    // {/* MUSIC OPTIONS */}
    // {/* <iframe src="img/ominous.mp3" allow="autoplay" style="display:none"></iframe> */}
    // {/* <audio loop autoplay>
    // <source src="img/ominous.mp3" type="audio/mpeg">
    // Your browser does not support the audio element.
    // </audio> */}
    return (
      <div>
        <HomePage />
        <Game />
            <div className="col">
              {/*CHARACTER CREATION*/}
              <div id="createName">
                <label for="nameInput">Give us your name, warrior:
                  <input type="text" className="nameInput" />
                </label>
                <button id="nameButton" type="button">Submit</button>
              </div>

              <div id="createStats">

                <div id="statResultDisplay">

                </div>
                <div>
                  <span id="rollText"></span>
                </div>
                <div>
                  <button id="diceRollButton" type="button">Roll!</button>
                </div>

                <div className="startButton">
                  <button id="start" type="button">Begin!</button>
                </div>

              </div>

              <div className="printText">

              </div>
              <div className="testButton">

              </div>
              <div className="current-story">

              </div>


              </div>
      </div>
    );
  }
}

export default App;
