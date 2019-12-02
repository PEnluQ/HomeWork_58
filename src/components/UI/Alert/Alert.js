import React from 'react';
import './Alert.css';

const Alert = props => {

    let divLessbutton = <div onClick={props.dismiss} className={['Alert', props.type].join(' ')}>
     <div className='contentAlert'>
         {props.children}
        </div>
    </div>;

    let divHasButton = <div className={['Alert', props.type].join(' ')}>
        <div className='contentAlert'>
            {props.children}
            {props.dismiss ? <p className='clickAlert' onClick={props.dismiss}>X</p> : null}
        </div>
    </div>;

    return props.clickDismissable ? divLessbutton: divHasButton;
};

export default Alert;