import React from 'react';
import { IconContext } from "react-icons";
import classes from './Steps.module.css';
import Step from './Step/Step';
import { IoIosLogIn, IoIosCreate, IoIosGlobe } from 'react-icons/io';

const Steps = () => (
  <IconContext.Provider value={{ color: "#F5F5F5", size: "150px" }}>
    <div className={classes.Steps}>
      <Step icon={<IoIosLogIn />}
        title='Sign In'
        info="Sign in or create an account if you don't have one" />
      <Step icon={<IoIosCreate />}
        title='Design'
        info="Start designing your own Resume/Portfolio" />
      <Step icon={<IoIosGlobe />}
        title='Deploy'
        info='Deploy your Resume to the Web and get new opportunities' />
    </div>
  </IconContext.Provider>
);

export default Steps;