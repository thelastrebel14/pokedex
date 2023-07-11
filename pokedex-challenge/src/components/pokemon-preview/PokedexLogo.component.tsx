import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokedexLogoImg from '../../assets/logo.svg';

const PokedexLogo = () => {
    return (
      <div className='pokedex-logo-container'>
        <img src={PokedexLogoImg} className='pokedex-logo-img'></img>
      </div>
    );
}

export default PokedexLogo;