import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Portfolio from '../components/Portfolio';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          ini adalah halaman Home<br />
          <a href="#portfolio">Portfolio</a>
        </p>
        <Portfolio />
      </div>
    );
  }
}

export default HomePage;
