import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PokeballImg from '../../assets/Poké_Ball_icon.svg.png'
import { useSelector } from 'react-redux';
import { IPokemonElement } from '../Pokemon.definitions';
import { updateSelectedPokemon } from '../../redux/globalSlice';
import axios from 'axios';
import './PokemonList.css';

const PokemonList = () => {
    const dispatch = useDispatch();
    const globalStore = useSelector((state: any) => state.global);
    const pokemonList = globalStore.pokemonList;
    const selectedPokemon = globalStore.selectedPokemon;

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

    return (
      <ul className='pokemon-list-container'>
        {pokemonList?.map((pokemon: IPokemonElement) => {
          return (
            <li
            key={pokemon.name}
            className='pokemon-list-element'
            >
              <Link to={`/pokemon/${pokemon.name}`}
              onClick={(e) => {
                if (selectedPokemon.name !== pokemon.name) {
                  e.preventDefault();
                  selectPokemon(pokemon.detailsUrl);
                }
              }}
              className='pokemon-link-element'>
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