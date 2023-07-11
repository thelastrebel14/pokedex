import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokedexLogo from './PokedexLogo.component';
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