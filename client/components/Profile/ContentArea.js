import React from 'react';
import PropTypes from 'prop-types';

import ContentPane from './ContentPane.js';
import styles from './styles/ContentArea.scss';

export default class ContentArea extends React.Component {
  render() {
    if(this.props.add != 'on') {
      return (
       <div className={styles.cont}>
        <ContentPane thumb='http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-7.jpg' />
        <ContentPane thumb='http://cdn.mos.cms.futurecdn.net/L8ok5HpJ5Zt9hD28Fa3hBk.jpg' />
        <ContentPane thumb='http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-7.jpg' />
        <ContentPane thumb='http://cdn.mos.cms.futurecdn.net/L8ok5HpJ5Zt9hD28Fa3hBk.jpg' />
        <ContentPane thumb='http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-7.jpg' />
        <ContentPane thumb='http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-7.jpg' />
        <ContentPane thumb='http://cdn.mos.cms.futurecdn.net/L8ok5HpJ5Zt9hD28Fa3hBk.jpg' />
        <ContentPane thumb='http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-7.jpg' />
        <ContentPane thumb='http://cdn.mos.cms.futurecdn.net/L8ok5HpJ5Zt9hD28Fa3hBk.jpg' />
        <ContentPane thumb='http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-7.jpg' />
       </div>);
    } else {
    return (
     <div className={styles.conton}>
     <ContentPane thumb='http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-7.jpg' />
     <ContentPane thumb='http://cdn.mos.cms.futurecdn.net/L8ok5HpJ5Zt9hD28Fa3hBk.jpg' />
     <ContentPane thumb='http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-7.jpg' />
     <ContentPane thumb='http://cdn.mos.cms.futurecdn.net/L8ok5HpJ5Zt9hD28Fa3hBk.jpg' />
     <ContentPane thumb='http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-7.jpg' />
     <ContentPane thumb='http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-7.jpg' />
     <ContentPane thumb='http://cdn.mos.cms.futurecdn.net/L8ok5HpJ5Zt9hD28Fa3hBk.jpg' />
     <ContentPane thumb='http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-7.jpg' />
     <ContentPane thumb='http://cdn.mos.cms.futurecdn.net/L8ok5HpJ5Zt9hD28Fa3hBk.jpg' />
     <ContentPane thumb='http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-7.jpg' />
     </div>);
  }
}
}
ContentArea.PropTypes = {
  add: PropTypes.string
}
