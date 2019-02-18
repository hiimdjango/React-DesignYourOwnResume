import React from 'react';
import classes from './About.module.css';
import Steps from './Steps/Steps';

const About = () => {
  return (
    <div className={classes.About} id="about">
      <h1 style={{ paddingTop: '70px' }}>About Us</h1>
      <div className={classes.Card}>
        <p>
          Design Your Own Resume is a Website that helps creating an online <em>Resume</em> or <em>Portfolio</em> <strong>without</strong> a
          single line of code! We're using the finest and the fastest technologies to build your website, and more importantly
          we want to keep it as much simple and clear as a paper Resume!
        </p>
      </div>
      <h1>How It Works?</h1>
      <Steps />
    </div>
  );
}

export default About;