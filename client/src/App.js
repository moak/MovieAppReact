import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieContainer from './containers/MovieContainer';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <MovieContainer />
      </div>
    );
  }
}

export default App;
