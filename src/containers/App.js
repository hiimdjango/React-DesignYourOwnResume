import React, { Component } from 'react';
import './App.css';

import Toolbar from '../components/Toolbar/Toolbar';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Login from '../components/Login/Login';
import Backdrop from '../components/UI/Backdrop/Backdrop';
import Modal from '../components/UI/Modal/Modal';
import Transition from 'react-transition-group/Transition';





class App extends Component {

  state = {
    loginToogle: false
  }

  handleLogin = () => {
    this.setState({ loginToogle: !this.state.loginToogle });
  }



  render() {

    return (
      <div className="App">
        <Toolbar loginToogle={this.handleLogin} />
        <Header />
        <About />
        <Footer />
        <Transition in={this.state.loginToogle}
          timeout={300}
          mountOnEnter
          unmountOnExit  >
          {state => (
            <Modal show={state}>
              <Login />
            </Modal>
          )}
        </Transition>
        {this.state.loginToogle ? <Backdrop hide={this.handleLogin} /> : null}

      </div>
    );
  }
}

export default App;
