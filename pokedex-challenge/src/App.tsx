import axios from 'axios';
import { useEffect } from 'react';
import './App.css'
import PokemonPreview from './components/pokemon-preview/PokemonPreview.component'
import { useDispatch } from 'react-redux';
import { setPokemonList, updateSelectedPokemon } from './redux/globalSlice';
import PokemonDetails from './components/pokemon-details/PokemonDetails.component';
import PokemonList from './components/pokemon-list/PokemonList.component';
import { Route, Routes } from 'react-router-dom';
import Button from './components/button/Button.component';

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
      dispatch(setPokemonList({pokemonList: data.data.results, next: data.data.next, previous: data.data.previous}))
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
    <div className='app-container'>
      <PokemonPreview/>
      {/* <Routes>
        <Route path='/pokemon' element={<PokemonList/>}/>
        <Route path='/pokemon/:pokemonName' element={<PokemonDetails/>}/>
      </Routes> */}
      <Button/>
      
    </div>
  )
}

export default App
