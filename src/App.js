import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Body from './Components/Body'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Body />
      </div>
    );
  }
}

export default App;
