import axios from 'axios';
import { useEffect } from 'react';
import './App.css'
import PokemonList from './components/PokemonList.component'
import PokemonPreview from './components/pokemon-preview/PokemonPreview.component'
import { useDispatch } from 'react-redux';
import { setPokemonList, updateSelectedPokemon } from './redux/globalSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getPokemonList();
    selectDefaultPokemon();
  }, []);

const getPokemonList = async () => {
  try {
    await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
    .then((data) => {
      dispatch(setPokemonList({pokemonList: data.data.results}))
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

const selectDefaultPokemon = async () => {
  try {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
    .then((data) => {
      dispatch(updateSelectedPokemon({selectedPokemon: data.data}))
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

  return (
    <div className='pokedex-main'>
      <PokemonPreview/>
      <PokemonList/>
    </div>
  )
}

export default App
