import React from 'react';
import { Link } from 'react-router-dom';
import PokeballImg from '../../assets/Poké_Ball_icon.svg.png';
import './LinkButton.css';

const LinkButton = () => {
    return (
      <Link to={'/pokemon'} className='link-button-container'>
        <img src={PokeballImg} className='link-button-icon'></img>
        <span className='link-button-label'>Home</span>
      </Link>
    );
}

export default LinkButton;