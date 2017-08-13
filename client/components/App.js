import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';

/*BrowserRouter*/

import Header from './Header.js';
import Main from './Main.js';

import Style from './styles/StyleSheet.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
