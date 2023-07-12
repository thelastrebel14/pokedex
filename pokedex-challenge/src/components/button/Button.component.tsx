import React from 'react';
import './Button.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonList } from '../../redux/globalSlice';

const Button = () => {
    const dispatch = useDispatch();
    const globalStore = useSelector((state: any) => state.global);
    console.log({globalStore});
    const getPreviousPokemonList = async () => {
        try {
          await axios.get(globalStore.previous)
          .then((data) => {
            dispatch(setPokemonList({pokemonList: data.data.results, next: data.data.next, previous: data.data.previous}))
          });
        } catch (error) {
          console.error('Error:', error);
        }
      };

    const getNextPokemonList = async () => {
        try {
          await axios.get(globalStore.next)
          .then((data) => {
            dispatch(setPokemonList({pokemonList: data.data.results, next: data.data.next, previous: data.data.previous}))
          });
        } catch (error) {
          console.error('Error:', error);
        }
      };
    return (
      <div className='pagination-container'>
        {globalStore.previous && <button type="button" onClick={getPreviousPokemonList}>Previous</button>}
        {globalStore.next && <button type="button" onClick={getNextPokemonList}>Next</button>}
      </div>
    );
}

export default Button;