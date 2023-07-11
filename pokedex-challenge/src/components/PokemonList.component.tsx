import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PokeballImg from '../assets/Poké_Ball_icon.svg.png'
import { useSelector } from 'react-redux';
import { IPokemonElement } from './Pokemon.definitions';
import { updateSelectedPokemon } from '../redux/globalSlice';
import axios from 'axios';

const PokemonList = () => {
    const dispatch = useDispatch();
    const globalStore = useSelector((state: any) => state.global);
    const pokemonList = globalStore.pokemonList;
    const selectedPokemon = globalStore.selectedPokemon;
    console.log({globalStore});

    const selectPokemon = async (pokemonDetailsUrl: string) => {
      try {
        await axios.get(pokemonDetailsUrl)
        .then((data) => {
          dispatch(updateSelectedPokemon({selectedPokemon: data.data}))
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const showPokemonDetails = () => {
      console.log('doble click');
    };

    return (
      <ul className='pokemon-list-container'>
        {pokemonList?.map((pokemon: IPokemonElement) => {
          return (
            <li
            key={pokemon.name}
            className='pokemon-list-element'
            onClick={(e) => {
              e.preventDefault();
              if (selectedPokemon.name === pokemon.name) {
                showPokemonDetails();
              } else {
              selectPokemon(pokemon.detailsUrl);
              }
            }}
            onDoubleClick={(e) => {
              e.preventDefault();
              showPokemonDetails();
            }}
            >
              <Link to={`/pokemon/${pokemon.name}`} className='pokemon-link-element'>
                <span>{pokemon.name}</span>
                <img src={PokeballImg} className='pokeball'></img>
              </Link>
            </li>
          )
        })}
      </ul>
    );
}

export default PokemonList;