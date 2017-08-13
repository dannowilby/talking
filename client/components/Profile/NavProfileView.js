import React from 'react';
import PropTypes from 'prop-types';

import Arrow from '../assets/arrowF.png';

import styles from './styles/NavProfileView.scss'

export default class NavProfileView extends React.Component {

  render() {
    return (
      <div className={styles.cont}>
        <img src={Arrow} onClick={this.props.change} className={styles.arrow} />
        <img src={this.props.profpic} className={styles.userpic} />
        <h1>{this.props.name}</h1>
        <h4>@{this.props.username}</h4>
        <h2>{this.props.bio}</h2>

        <div className={styles.follower}>
            <h2>Followers</h2>
            <a>{this.props.followers}</a>
        </div>
        <div className={styles.follower}>
            <h2>Following</h2>
            <a>{this.props.following}</a>
        </div>

        <div className={styles.followButton}>Follow</div>

        <div>
            <div className={styles.button}>Message</div>
            <div className={styles.button}>Call</div>
        </div>

        <div>
            <div className={styles.button}>Info</div>
            <div className={styles.button}>Report</div>
        </div>

      </div>);
    }
  }

NavProfileView.PropTypes = {
  profpic: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  bio: PropTypes.string,
  following: PropTypes.string,
  followers: PropTypes.string,
  isFollow: PropTypes.boolean,
  change: PropTypes.func
};
