import React from 'react';
import { useSelector } from 'react-redux';
import { IAbilities, IPokemon, IPokemonDetails, IStats, IType } from '../Pokemon.definitions';
import './PokemonDetails.css';
import { getChipsList } from '../../utils';
import StatsBars from '../stats-bars/StatsBars.component';
import PokemonDescription from '../pokemon-description/PokemonDescription.component';
import LinkButton from '../link-button/LinkButton.component';

const PokemonDetails = () => {
  const globalStore = useSelector((state: any) => state.global);
  const selectedPokemon: IPokemon = globalStore.selectedPokemon;
  const pokemonStats = selectedPokemon.pokemonDetails.pokemonStats;
  const pokemonDescription: IPokemonDetails = selectedPokemon.pokemonDetails;

  const getPokemonTypes = (): JSX.Element => {
    const pokemonDescription: IPokemonDetails = selectedPokemon.pokemonDetails;
    const pokemonTypesLabelList = pokemonDescription.pokemonType.map((type: IType) => (type.typeName));
    return getChipsList(pokemonTypesLabelList, "Types");
  }

  const getPokemonAbilitiesChips = (): JSX.Element => {
    const pokemonAbilities = selectedPokemon.pokemonDetails.pokemonAbilities;
    const pokemonAbilitiesLabelList = pokemonAbilities.map((pokemonAbility: IAbilities) => pokemonAbility.abilityName)
    return getChipsList(pokemonAbilitiesLabelList, "Abilities");
  }

    return (
      <div className='pokemon-details-container'>
        <LinkButton/>
        <PokemonDescription
            pokemonName={selectedPokemon.name}
            pokemonId={pokemonDescription.pokemonId}
            pokemonHeight={pokemonDescription.pokemonHeight}
            pokemonWeight={pokemonDescription.pokemonWeight}
        />
        {getPokemonTypes()}
        {getPokemonAbilitiesChips()}
        <StatsBars pokemonStats={pokemonStats}/>
      </div>
    );
}

export default PokemonDetails;