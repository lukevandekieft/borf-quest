import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pages from '../../StoryData';

class TextDisplay extends Component {
  render() {
    const {currentChallenge} = this.props;
    const page = Pages[this.props.currentPage];
    const text = page.text;
    let content;
    if (currentChallenge && !this.props.challengeResult) {
      content =
      <React.Fragment>
        <p>You need {currentChallenge.attribute} of {currentChallenge.value} to pass. Your current {currentChallenge.attribute} is {this.props[currentChallenge.attribute]}.</p>
        <button onClick={()=>{this.props.onChoiceClick(this.props.currentChallenge)}}>Roll!</button>
      </React.Fragment>
    } else if (this.props.currentChallenge && this.props.challengeResult) {
      content =
      <React.Fragment>
        <p>Your results were such:</p>
      </React.Fragment>
    } else {
      content =
      <React.Fragment>
        <p>{text}</p>
        {Object.keys(page.buttons).map(index => {
        let button = page.buttons[index];
          return <button key={index} onClick={()=>{this.props.onChoiceClick(button)}}>{index}</button>
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
  currentPage: PropTypes.number.isRequired,
  currentChallenge: PropTypes.any,
  challengeResult: PropTypes.any,
  onChoiceClick: PropTypes.func
};

export default TextDisplay;
