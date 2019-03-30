import React from 'react';
import { Router } from 'react-router';
import Spotlight from 'containers/Spotlight/';
import history from './utils/history';
import './App.css';

const App = () => (
  <Router history={history}>
    <Spotlight />
  </Router>
);

export default App;
