import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokedexLogo from './PokedexLogo.component';

const PokemonImagePreview = () => {
    return (
      <div className='pokemon-image-preview-container'>
        <PokedexLogo/>
      </div>
    );
}

export default PokemonImagePreview;