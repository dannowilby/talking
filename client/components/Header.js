import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles/Header.scss';

export default class Header extends React.Component {
  render() {
    return (
     <div className={styles.cont}>
      <div className={styles.left}>
        <h1 className={styles.title}><Link className={styles.titlelink} to='/'>talking</Link></h1>
      </div>
      <div className={styles.right}>
        <input className={styles.searchBar} type='text' />
        <Link className={styles.signin} to='/signin'>sign in</Link>
      </div>
     </div>);
  }
}
