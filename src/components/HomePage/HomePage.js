import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to='play_borf'>
          <button id="playNow" type="button">PLAY NOW</button>
        </Link>
        <div className="copyright">
          <p>&#169; 2018 LotharSoft Computer Games Inc.</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
