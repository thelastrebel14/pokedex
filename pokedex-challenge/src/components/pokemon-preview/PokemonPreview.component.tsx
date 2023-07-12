import React from 'react';
import PokemonImagePreview from './PokemonImagePreview.component';
import PokedexLogo from './PokedexLogo.component';
import './PokemonPreview.css';

const PokemonPreview = () => {
    return (
      <div className='pokemon-preview-container'>
        <PokedexLogo/>
        <PokemonImagePreview/>
      </div>
    );
}

export default PokemonPreview;