import React from 'react';
import './Button.css'
import { IButtonProps } from './Button.definitions';

const Button = (props: IButtonProps) => {
    const { onClick, label } = props;
    return (
        <button type="button" className='button' onClick={onClick}><span className='button-label'>{label}</span></button>
    );
}

export default Button;