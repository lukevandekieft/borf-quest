import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Game from './components/Game/Game';

//styles
import './App.scss';
import './stylesheets/styles.scss';

class App extends Component {
  render() {
    // {/* MUSIC OPTIONS */}
    // {/* <iframe src="img/ominous.mp3" allow="autoplay" style="display:none"></iframe> */}
    // {/* <audio loop autoplay>
    // <source src="img/ominous.mp3" type="audio/mpeg">
    // Your browser does not support the audio element.
    // </audio> */}
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/play_borf' component={Game}/>
        </Switch>
      </div>
    );
  }
}

export default App;
