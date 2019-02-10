import React from 'react';
import Castle from '../AsciiArt/Castle';
import Cabin from '../AsciiArt/Cabin';
import Placeholder from '../AsciiArt/Placeholder';
import Forest from '../AsciiArt/Forest';
import ThroneRoom from '../AsciiArt/ThroneRoom';

class Header extends React.Component{

  render(){
    return (
      <div class="row picture">
        <div class="col-md-12 ">
          <Castle />
          <Cabin />
          <Placeholder />
          <Forest />
          <ThroneRoom />
        </div>
      </div>
    );
  }
}

export default Header;
