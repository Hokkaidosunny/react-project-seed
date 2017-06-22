import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router';
import CounterPage from './CounterPage.js';
import HomePage from './HomePage.js';
import '../style/app.scss';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <Route exact path="/" component={HomePage} />
        <Route path="/count" component={CounterPage} />
      </div>
    );
  }
}

export default App;
