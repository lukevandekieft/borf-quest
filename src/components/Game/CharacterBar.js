import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../AsciiArt/Avatar';

class CharacterBar extends Component {

  render() {
    return (
      <div className="col-md-auto">
        <div className="characterBar">
          <div>
            <Avatar />
          </div>
          <div className="characterStatsDisplay">
            <p><span id="characterName"></span></p>
            <p>Strength: <span id="strengthStat">{this.props.strength}</span></p>
            <p>Agility: <span id="agilityStat">{this.props.agility}</span></p>
            <p>Intelligence: <span id="intelligenceStat">{this.props.intelligence}</span></p>
            <p>Charisma: <span id="charismaStat">{this.props.charisma}</span></p>
          </div>
        </div>
      </div>
    );
  }
}

CharacterBar.propTypes = {
  agility: PropTypes.any,
  charisma: PropTypes.any,
  intelligence: PropTypes.any,
  strength: PropTypes.any
};

export default CharacterBar;
