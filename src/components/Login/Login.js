import React from 'react';
import classes from './Login.module.css';
import { FacebookLoginButton, GoogleLoginButton, LinkedInLoginButton } from "react-social-login-buttons";

const Login = (props) => {
  return (
    <div className={classes.Login}>
      <div className={classes.Box1}>
        <form>
          <label htmlFor='username'><b>Username</b></label>
          <br />
          <input type="text" placeholder="Enter Username" name="uname" required></input>
          <br />
          <label htmlFor="psw"><b>Password</b></label>
          <br />
          <input type="password" placeholder="Enter Password" name="psw" required />
          <br />
          <button type="submit">Login</button>
          <br />
          <label>
            <input type="checkbox" name="remember" /><span style={{ fontSize: '0.7em' }}>Remember me</span>
          </label>
          <p>Don't have an account yet ? <span><b>Click here to Sign In!</b></span></p>
        </form>
      </div>

      <div className={classes.Box2}>
        <div className={classes.Buttons}>
          <FacebookLoginButton className={classes.Button} />
          <GoogleLoginButton className={classes.Button} />
          <LinkedInLoginButton className={classes.Button} />
        </div>
      </div>
    </div >
  );
}

export default Login;