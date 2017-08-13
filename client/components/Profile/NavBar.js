import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/NavBar.scss';

import NavProfileView from './NavProfileView.js';
import Arrow from '../assets/arrow.png';

export default class NavBar extends React.Component {
  render() {
    if(this.props.show !== 'on') {
      return (
      <div className={styles.cont}>
        <NavProfileView change={this.props.changeOn} profpic='https://www.nationalgallery.org.uk/server.iip?FIF=/fronts/N-6600-00-000037-WZ-PYR.tif&CNT=1&JTL=1,0' username='davesteinbeck312' name='Dave Steinbeck' following='318' followers='296' isFollow='false' bio='Photography and life.' />
      </div>);
    } else {
      return (
        <div className={styles.closedNav}>
          <img onClick={this.props.changeOff} className={styles.arrow} src={Arrow} />
        </div>
      );
    }
  }
}

NavBar.PropTypes = {
  show: PropTypes.string,
  changeOn: PropTypes.func,
  changeOff: PropTypes.func
}
