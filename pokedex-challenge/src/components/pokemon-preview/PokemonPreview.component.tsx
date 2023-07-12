import React from 'react';
import PokemonImagePreview from './PokemonImagePreview.component';

const PokemonPreview = () => {
    return (
      <div className='pokemon-preview-container'>
        {/* <PokedexLogo/> */}
        <PokemonImagePreview/>
      </div>
    );
}

export default PokemonPreview;