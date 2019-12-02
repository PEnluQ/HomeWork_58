import React, {Fragment} from 'react';
import Backdrop from "../Backdrop/Backdrop";
import './Modal.css';

const Modal = props => {
    return (
        <Fragment>
            <div className='Modal' style={{
                transform: props.show ? 'translate(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
            >
                <div className='rowModal'>
                <h3>{props.title}</h3>
                <p className='closeModal' onClick={props.X}>X</p>
                </div>
                <p>{props.children}</p>
            </div>
            <Backdrop show={props.show} onClick={props.close}/>
        </Fragment>
    );
};

export default Modal;