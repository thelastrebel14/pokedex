import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PokeballImg from '../../assets/Poké_Ball_icon.svg.png'
import { useSelector } from 'react-redux';
import { IPokemonElement } from '../Pokemon.definitions';
import { updateSelectedPokemon } from '../../redux/globalSlice';
import axios from 'axios';
import './PokemonList.css';
import Button from '../button/Button.component';

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

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPokemonList = pokemonList.slice(startIndex, endIndex);
    const maxPage = Math.ceil(pokemonList.length / itemsPerPage);

    const goToPreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    const goToNextPage = () => {
      if (currentPage < maxPage) {
        setCurrentPage(currentPage + 1);
      }
    };


    return (
      <div className='pokemon-list-pagination-container'>
        <ul className='pokemon-list-container'>
          {currentPokemonList?.map((pokemon: IPokemonElement) => {
            return (
              <li
              key={pokemon.name}
              className={`pokemon-list-element ${selectedPokemon.name === pokemon.name ? 'active' : ''}`}
              >
                <Link to={`/pokemon/${pokemon.name}`}
                onClick={(e) => {
                  if (selectedPokemon.name !== pokemon.name) {
                    e.preventDefault();
                    selectPokemon(pokemon.detailsUrl);
                  }
                }}
                className='pokemon-link-element'>
                  <span className='pokemon-link-element-label'>{pokemon.name}</span>
                  <img src={PokeballImg} className='pokeball'></img>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className='pagination-container'>
        {currentPage > 1 && (
          <Button onClick={goToPreviousPage} label='Previous'></Button>
        )}
        {currentPage < maxPage && (
          <Button onClick={goToNextPage} label='Next'></Button>
        )}
          
        </div>
      </div>
      
    );
}

export default PokemonList;