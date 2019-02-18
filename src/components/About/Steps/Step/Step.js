import React from 'react';
import classes from './Step.module.css';

const Step = (props) => (
  <div className={classes.Step}>
    <i>{props.icon}</i>
    <div className={classes.Info}>
      <h3>{props.title}</h3>
      <p>{props.info}</p>
    </div>
  </div>
);

export default Step;