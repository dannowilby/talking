import React from 'react';

import PropTypes from 'prop-types'

import styles from './styles/ContentPane.scss';

export default class ContentPane extends React.Component {
  render() {
    return (
     <div className={styles.cont}>
      <img className={styles.img} src={this.props.thumb} />
     </div>);
  }
}

ContentPane.PropTypes = {
  thumb: PropTypes.string,
  caption: PropTypes.string
}
