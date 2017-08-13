import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar.js';
import ContentArea from './ContentArea.js';

import styles from './styles/Profile.scss';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      cs : ' '
    };
    this.onClick = this.onClick.bind(this);
    this.offClick = this.offClick.bind(this);
  }
  onClick() {
    this.setState({cs : 'on'});
  }
  offClick() {
    this.setState({cs : ' '});
  }
  render() {
    return (
      <div className={styles.cont}>
          <NavBar changeOn={this.onClick} changeOff={this.offClick} show={this.state.cs} />
          <ContentArea add={this.state.cs} />
      </div>);
  }
}
