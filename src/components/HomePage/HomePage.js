import React, { Component } from 'react';
import GoblinQuest from '../AsciiArt/GoblinQuest';
import Borf from '../AsciiArt/Borf';
import RiseOfBorf from '../AsciiArt/RiseOfBorf';

class HomePage extends Component {

  render() {
    return (
      <div className="splash">
        <GoblinQuest />
        <Borf />
        <RiseOfBorf />
        <button id="playNow" type="button">PLAY NOW</button>
        <div className="copyright">
          <p>&#169; 2018 LotharSoft Computer Games Inc.</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
