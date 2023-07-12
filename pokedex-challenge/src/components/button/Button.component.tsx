import React from 'react';
import './Button.css'
import { IButtonProps } from './Button.definitions';

const Button = (props: IButtonProps) => {
    const { onClick, label } = props;
    return (
        <button type="button" className='button' onClick={onClick}>{label}</button>
    );
}

export default Button;