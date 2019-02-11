import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pages from '../../StoryData';

class TextDisplay extends Component {
  render() {
    const {challengeResult, currentChallenge, currentPage, onChoiceClick, onDiceRoll, agility, charisma, intelligence, strength} = this.props;
    const page = Pages[currentPage];
    const text = page.text;
    let content;
    if (currentChallenge && !challengeResult) {
      content =
      <React.Fragment>
        <p>You need {currentChallenge.attribute} of {currentChallenge.value} to pass. Your current {currentChallenge.attribute} is {this.props[currentChallenge.attribute]}.</p>
        <button onClick={()=>{onDiceRoll(currentChallenge)}}>Roll!</button>
      </React.Fragment>
    } else if (currentChallenge && challengeResult) {
      let baseRoll = challengeResult - this.props[currentChallenge.attribute];
      if (challengeResult >= currentChallenge.value) {
        content =
        <React.Fragment>
          <p>You rolled a {baseRoll} for a total {currentChallenge.attribute} of {challengeResult}. You passed your {currentChallenge.attribute} check!</p>
        </React.Fragment>
      } else {
        content =
        <React.Fragment>
          <p>You rolled a {baseRoll} for a total {currentChallenge.attribute} of {challengeResult}. You have failed your roll and lost some {currentChallenge.attribute}.</p>
        </React.Fragment>
      }
    } else {
      content =
      <React.Fragment>
        <p>{text}</p>
        {Object.keys(page.buttons).map(index => {
        let button = page.buttons[index];
          return <button key={index} onClick={()=>{onChoiceClick(button)}}>{index}</button>
        })}
      </React.Fragment>
    }
    return (
      <div className="hidden-story">
        {content}
      </div>
    );
  }
}

TextDisplay.propTypes = {
  challengeResult: PropTypes.any,
  currentChallenge: PropTypes.any,
  currentPage: PropTypes.number.isRequired,
  onChoiceClick: PropTypes.func,
  onDiceRoll: PropTypes.func,
  agility: PropTypes.number,
  charisma: PropTypes.number,
  intelligence: PropTypes.number,
  strength: PropTypes.number,
};

export default TextDisplay;
