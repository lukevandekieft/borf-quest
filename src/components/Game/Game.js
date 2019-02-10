import React, { Component } from 'react';
import Header from './Header';
import CharacterBar from './CharacterBar';
import TextDisplay from './TextDisplay';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: null,
      currentPage: 2,
      statAgility: null,
      statCharisma: 1,
      statIntelligence: null,
      statStrength: 18,
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Header
          currentSection = {this.state.currentSection}
        />
        <div className="row justify-content-xl-center">
          <CharacterBar
            agility = {this.state.statAgility}
            charisma = {this.state.statCharisma}
            intelligence = {this.state.statIntelligence}
            strength = {this.state.statStrength}
          />
        </div>
        <TextDisplay
          currentPage = {this.state.currentPage}
        />
      </div>
    );
  }
}

export default Game;
