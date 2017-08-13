import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Profile from './Profile/Profile.js';
import Home from './Home.js';
import Signin from './Signin.js';

import styles from './styles/Main.scss';

export default class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route className={styles.path} path='/signin' component={Signin} />
        <Route className={styles.path} path='/user' component={Profile} />
        <Route className={styles.path} path='/' component={Home} />
      </Switch>
    );
  }
}
