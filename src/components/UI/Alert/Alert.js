import React, {Fragment} from 'react';
import './Alert.css';

const Alert = props => {
    return (
        <Fragment>
            <div className={['Alert', props.type].join(' ')}
            >
                <div className='contentAlert'>
                {props.children}
                <p onClick={props.dismiss} className='clickAlert'>X</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Alert;