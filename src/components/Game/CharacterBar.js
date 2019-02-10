import React, { Component } from 'react';
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
            <p>Strength: <span id="strengthStat"></span></p>
            <p>Agility: <span id="agilityStat"></span></p>
            <p>Intelligence: <span id="intelligenceStat"></span></p>
            <p>Charisma: <span id="charismaStat"></span></p>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterBar;
