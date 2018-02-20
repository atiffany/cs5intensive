import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to CS5 Intensive</h1>
        <Greeting />
      </div>
    );
  }
}

export default App;
