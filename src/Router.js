import React, { Component } from 'react';
import {
  Route,
  // HashRouter,
  BrowserRouter
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import logo from './logo.svg';
import './App.css';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
