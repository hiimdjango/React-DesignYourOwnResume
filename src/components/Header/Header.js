import React from 'react';
import classes from './Header.module.css';

const Header = (props) => (
  <div className={classes.Header} id="home">
    <div className={classes.Main}>
      <h1><span>Design</span><br /> your own Resume</h1>
    </div>
  </div>
);

export default Header;