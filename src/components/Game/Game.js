import React, { Component } from 'react';
import Header from './Header';
import CharacterBar from './CharacterBar';
import TextDisplay from './TextDisplay';

class Game extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row justify-content-xl-center">
          <CharacterBar />
        </div>
        <TextDisplay />
      </div>
    );
  }
}

export default Game;
