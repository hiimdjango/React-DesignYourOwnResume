import React, { Component } from 'react';
import { IconContext } from "react-icons";
import classes from './Toolbar.module.css';
import { TiThMenu } from 'react-icons/ti';
import { IoIosLogIn, IoMdMail } from 'react-icons/io';
import { FaHome, FaInfo } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Transition from 'react-transition-group/Transition';

class Toolbar extends Component {

  state = {
    toolbarToogle: false
  }

  handleToogleToolbar = () => {
    let toogled = this.state.toolbarToogle;
    this.setState({ toolbarToogle: !toogled })
  }

  render() {

    let menuStyle;
    if (!this.state.toolbarToogle) {
      menuStyle = [classes.Toolbar];
    } else {
      menuStyle = [classes.Toolbar, classes.Background]
    }
    let menuAnimation;
    if (this.state.toolbarToogle) {
      menuAnimation = classes.MenuShow;
    } else {
      menuAnimation = classes.MenuHide;
    }

    const handleLogin = () => {
      this.handleToogleToolbar();
      this.props.loginToogle();
    }

    const menu = (
      <ul className={classes.Menu + ' ' + menuAnimation}>
        <hr />
        <li onClick={handleLogin} ><IoIosLogIn /><br />LogIn</li>
        <AnchorLink onClick={this.handleToogleToolbar} offset="100" href="#home"><li><FaHome /><br />Home</li></AnchorLink>
        <AnchorLink onClick={this.handleToogleToolbar} offset="100" href="#about"><li><FaInfo /><br />About</li></AnchorLink>
        <li><IoMdMail /><br />Contact</li>
      </ul>
    );
    return (
      <IconContext.Provider value={{ color: "white", size: "3vw" }}>
        <div className={menuStyle.join(' ')} >
          <p><i onClick={this.handleToogleToolbar}><TiThMenu /></i></p>
          <Transition in={this.state.toolbarToogle}
            timeout={300}
            mountOnEnter
            unmountOnExit >
            {state => menu}
          </Transition>
        </div>
      </IconContext.Provider>
    );
  }
}

export default Toolbar;