import React, { Component } from 'react';
import Header from './Header';
import CharacterBar from './CharacterBar';
import TextDisplay from './TextDisplay';
import Pages from '../../StoryData';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 'cabin',
      currentPage: 12,
      currentChallenge: null,
      challengeResult: null,
      agility: 3,
      charisma: 1,
      intelligence: 6,
      strength: 18,
    }
    this.handleChoiceClick = this.handleChoiceClick.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleDiceRoll = this.handleDiceRoll.bind(this);
  }

  handleChoiceClick(button) {
    if (typeof button === 'number') {
      this.handleChangePage(button);
    } else {
      this.setState({currentChallenge: button});
      console.log(this.state.currentChallenge);
    }
  }

  handleChangePage(nextPage) {
    this.setState({
      currentPage: nextPage,
      currentSection: Pages[nextPage].location,
    });
  }

  handleDiceRoll(challengeInfo) {
    console.log(this.state[challengeInfo.attribute]);
    const roll = Math.floor((Math.random() *20) +1);
    this.setState({challengeResult: roll + this.state[challengeInfo.attribute]});
  }

  render() {
    console.log(Pages[12].buttons['Fight']);
    console.log(Pages[11].buttons['Hide']);
    return (
      <div className="container-fluid">
        <Header
          currentSection = {this.state.currentSection}
        />
        <div className="row justify-content-xl-center">
          <CharacterBar
            agility = {this.state.agility}
            charisma = {this.state.charisma}
            intelligence = {this.state.intelligence}
            strength = {this.state.strength}
          />
        </div>
        <TextDisplay
          challengeResult = {this.state.challengeResult}
          currentChallenge = {this.state.currentChallenge}
          currentPage = {this.state.currentPage}
          onChoiceClick = {this.handleChoiceClick}
          onDiceRoll = {this.handleDiceRoll}
          agility = {this.state.agility}
          charisma = {this.state.charisma}
          intelligence = {this.state.intelligence}
          strength = {this.state.strength}
        />
      </div>
    );
  }
}

export default Game;
