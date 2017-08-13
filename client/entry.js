import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';

import App from './components/App.js';

console.log("blargh");

var Routes = (
  <Router>
      <App />
  </Router>
);

ReactDOM.render(Routes, document.getElementById('container'));
