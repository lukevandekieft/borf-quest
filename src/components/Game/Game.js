import React, { Component } from 'react';
import Header from './Header';
import CharacterBar from './CharacterBar';
import TextDisplay from './TextDisplay';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: null,
      currentPage: 1
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Header
          currentSection = {this.state.currentSection}
        />
        <div className="row justify-content-xl-center">
          <CharacterBar />
        </div>
        <TextDisplay />
      </div>
    );
  }
}

export default Game;
