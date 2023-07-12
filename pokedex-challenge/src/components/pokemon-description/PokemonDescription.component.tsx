import React from 'react';
import './PokemonDescription.css'
import { IPokemonDescription } from './PokemonDescription.definitions';

const PokemonDescription = (props: IPokemonDescription) => {
    const {
        pokemonName,
        pokemonId,
        pokemonHeight,
        pokemonWeight
    } = props;

    const getWeightAndHeight = () => {
        return (
            <div className='weight-and-height-container'>
                <div className='w-h-detail'>
                    <span className='w-h-value'>{`${pokemonWeight} Kg`}</span>
                    <span className='w-h-label'>Weight</span>
                </div>
                <div className='w-h-detail'>
                    <span className='w-h-value'>{`${pokemonHeight} m`}</span>
                    <span className='w-h-label'>Height</span>
                </div>
            </div>
        );
    };

    const getPokemonName = () => {
        return (
            <div className='name-container'>
                <span className='name-label'>{`#${pokemonId} - ${pokemonName}`}</span>
            </div>
        )
    }

    return (
      <div className='pokemon-description'>
        {getPokemonName()}
        {getWeightAndHeight()}
      </div>
    );
}

export default PokemonDescription;