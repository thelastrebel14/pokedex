import React from 'react';
import { useSelector } from 'react-redux';
import './PokemonPreview.css'

const PokemonImagePreview = () => {
  const globalStore = useSelector((state: any) => state.global);
  const selectedPokemon = globalStore.selectedPokemon;

    return (
      <div className='pokemon-image-preview-container'>
        <img src={selectedPokemon.pokemonSprite} className='pokemon-sprite'></img>
      </div>
    );
}

export default PokemonImagePreview;