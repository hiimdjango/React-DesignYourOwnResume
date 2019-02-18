import React from 'react';
import classes from './Modal.module.css';


const Modal = (props) => {
  let cssClasses = [classes.Modal,
  props.show === 'entering'
    ? classes.ModalOpen
    : props.show === 'exiting'
      ? classes.ModalClosed : null
  ]
  return (
    <div className={cssClasses.join(' ')}>
      {props.children}
    </div>
  );
}

export default Modal;