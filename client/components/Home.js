import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import styles from './styles/Home.scss';

var settings = {dots: true, slidesToShow: 3, infinite: false};

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.signup}>
          <h1>Sign up</h1>
          <div className={styles.form}>
            <div className={styles.input}><a>username</a> <input type="text" /></div>
            <div className={styles.input}><a>email</a> <input type="email" /></div>
            <div className={styles.input}><a>password</a> <input type="password" /></div>
            <div className={styles.input}><a>password</a> <input type="password" /></div>
            <p>or</p>
            <p>Sign up with Google</p>
          </div>
          <Link to='/user'>continue</Link>
        </div>
        <div className={styles.landing}>
          <h1 className={styles.title}>Welcome to the new age of communication.</h1>
          <div className={styles.cardHolder}>
            <div className={styles.card}>
              <h2>Video Calling</h2>
              <img className={styles.log} src='https://image.freepik.com/free-icon/auricular-phone-symbol-in-a-circle_318-50200.jpg' />
              <p>Video call your friends anywhere, for free</p>
            </div>
            <div className={styles.card}>
              <h2>Image Sharing</h2>
              <img className={styles.log} src='https://image.freepik.com/free-icon/smartphone-and-tablet_318-115638.jpg' />
              <p>Share the very best images of you, your life, or your business</p>
            </div>
            <div className={styles.card}>
              <h2>Shop Creation</h2>
              <img className={styles.log} src='https://image.freepik.com/free-icon/give-money_318-85454.jpg' />
              <p>Share your creations or ideas with people you know or people you would like to have know</p>
            </div>
          </div>
          <h2 className={styles.hook}>What are you waiting for?</h2>
          <img className={styles.back} src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/back-alt-512.png' />
        </div>
      </div>
    );
  }
}
