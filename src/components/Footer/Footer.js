import React from 'react';
import classes from './Footer.module.css';
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => (
  <IconContext.Provider value={{ color: "#fdfdf8", size: "3em" }}>
    <div className={classes.Background}>
      <div className={classes.Footer}>
        <p>
          <a href='http://facebook.com' target='_blank' rel='noopener noreferrer'><i><FaFacebookSquare /></i></a>
          <a href='http://instagram.com' target='_blank' rel='noopener noreferrer'><i><FaInstagram /></i></a>
          <a href='http://twitter.com' target='_blank' rel='noopener noreferrer'><i><FaTwitter /></i></a>
        </p>
      </div>
    </div>
  </IconContext.Provider>
);

export default Footer;