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
      currentPage: 1,
      currentChallenge: null,
      challengeResult: null,
      statAgility: 3,
      statCharisma: 1,
      statIntelligence: 6,
      statStrength: 18,
    }
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChoiceClick = this.handleChoiceClick.bind(this);
  }

  handleChangePage(nextPage) {
    this.setState({
      currentPage: nextPage,
      currentSection: Pages[nextPage].location,
    });
  }

  handleChoiceClick(button) {
    if (typeof button === 'number') {
      this.handleChangePage(button);
    } else {
      this.setState({currentChallenge: button});
      console.log(this.state.currentChallenge);
    }
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
            agility = {this.state.statAgility}
            charisma = {this.state.statCharisma}
            intelligence = {this.state.statIntelligence}
            strength = {this.state.statStrength}
          />
        </div>
        <TextDisplay
          currentPage = {this.state.currentPage}
          currentChallenge = {this.state.currentChallenge}
          challengeResult = {this.state.challengeResult}
          onChoiceClick = {this.handleChoiceClick}
        />
      </div>
    );
  }
}

export default Game;
