import React from 'react';
import classes from './Modal.css'
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
const Modal = (props) => {
    const classArray = [classes.Modal]
    props.show ? classArray.push(classes.displayed) : classArray.push(classes.hidden)
    
    return (
        <Aux>
        <Backdrop modalClosed={props.modalClosed} show={props.show} />
        <div className={classArray.join(' ')}>
        {props.children}
    </div>
    </Aux>
    );
};

export default Modal;