import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pages from '../../StoryData';

class TextDisplay extends Component {
  render() {
    const page = Pages[this.props.currentPage];
    const text = page.text;
    return (
      <div className="hidden-story">
        <p>{text}</p>
        {Object.keys(page.buttons).map(index => {
        let button = page.buttons[index];
          return <button>{index}</button>
      })}
      </div>
    );
  }
}

TextDisplay.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

export default TextDisplay;
