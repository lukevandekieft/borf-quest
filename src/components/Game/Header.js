import React from 'react';
import PropTypes from 'prop-types';
import Castle from '../AsciiArt/Castle';
import Cabin from '../AsciiArt/Cabin';
import Placeholder from '../AsciiArt/Placeholder';
import Forest from '../AsciiArt/Forest';
import ThroneRoom from '../AsciiArt/ThroneRoom';

class Header extends React.Component{

  render(){
    let headerImage = <Placeholder />;
    if (this.props.currentSection === 'castle') {
      headerImage = <Castle />
    } else if (this.props.currentSection === 'forest') {
      headerImage =
      <div>
      <Cabin />
      <Forest />
      <ThroneRoom />
      </div>
    }
    return (
      <div className="row picture">
        <div className="col-md-12 ">
          {headerImage}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  currentSection: PropTypes.any.isRequired,
};

export default Header;
