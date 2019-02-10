import React, { Component } from 'react';

//styles
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateTester: true
    }
  }

  render() {
    return (
      <div>
        <p>Hello World!</p>
      </div>
    );
  }
}

export default App;
