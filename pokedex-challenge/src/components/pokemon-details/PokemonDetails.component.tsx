import React from 'react';
import { useSelector } from 'react-redux';
import { IAbilities, IPokemon, IPokemonDetails, IStats, IType } from '../Pokemon.definitions';
import './PokemonDetails.css';
import Chip from '../chips/Chip.component';
import { getChipsList } from '../../utils';
import StatsBars from '../stats-bars/StatsBars.component';
import PokemonDescription from '../pokemon-description/PokemonDescription.component';

const PokemonDetails = () => {
  const globalStore = useSelector((state: any) => state.global);
  const selectedPokemon: IPokemon = globalStore.selectedPokemon;
  const pokemonStats = selectedPokemon.pokemonDetails.pokemonStats;
  const pokemonDescription: IPokemonDetails = selectedPokemon.pokemonDetails;

  const getPokemonStats = (): JSX.Element => {
    const pokemonStats = selectedPokemon.pokemonDetails.pokemonStats;
    return (
        <div className='pokemon-stats-container'>
            <span className='details-title'>Stats</span>
            <div>
            {pokemonStats.map((pokemonStat: IStats) => {
                return (
                    <div key={pokemonStat.statName} className='stats-bar-container'>
                        <span className='stats-bar-label'>{pokemonStat.statName}</span>
                        <div>
                            <div className="progress">
                                <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={pokemonStat.baseStat}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{width:`${pokemonStat.baseStat}%`}}
                                >
                                    <span className="sr-only">{pokemonStat.baseStat}</span>
                                </div>
                            </div>  
                        </div>
                    </div> 
                )
            })}
            </div>
        </div>
    );
  }

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

  const getPokemonDescription = (): JSX.Element => {
    const pokemonDescription: IPokemonDetails = selectedPokemon.pokemonDetails;
    console.log({pokemonDescription});

    return (
        <div className='pokemon-details-description'>
            <span>{selectedPokemon.name}</span>
            <span>{pokemonDescription.pokemonId}</span>
            <span>{pokemonDescription.pokemonHeight}</span>
            <span>{pokemonDescription.pokemonWeight}</span>
        </div>
    );
  }

    return (
      <div className='pokemon-details-container'>
        {/* <div className='pokemon-description'>
            {getPokemonDescription()}
        </div>
        <div className='pokemon-details'>
            {getPokemonStats()}
            {getPokemonAbilities()}
        </div> */}
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