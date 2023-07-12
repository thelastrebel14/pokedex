import React from 'react';
import Pokeball from '../../assets/open-pokeball.png';
import './PokemonPreview.css'

const PokedexLogo = () => {
    return (
      <div className='pokedex-logo-container'>
        <img src={Pokeball} className='pokedex-logo-img'></img>
      </div>
    );
}

export default PokedexLogo;