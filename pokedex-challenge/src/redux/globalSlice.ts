import {createSlice} from "@reduxjs/toolkit";
import { IAbilities, IPokemon, IPokemonElement, IStats, IType } from "../components/Pokemon.definitions";

export interface IGlobalInitialState {
    pokemonList: Array<IPokemonElement>,
    selectedPokemon: IPokemon,
    next: string,
    previous: string
}

const initialState: IGlobalInitialState = {
    pokemonList: [],
    selectedPokemon: {
        name: '',
        pokemonSprite: '',
        pokemonDetails: {
            pokemonType: [],
            pokemonId: '',
            pokemonHeight: 0,
            pokemonWeight: 0,
            pokemonAbilities: [],
            pokemonStats: []
        }
    },
    next: '',
    previous: ''
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setPokemonList: (state: IGlobalInitialState, action) => {
            const {pokemonList, next, previous} = action.payload;
            console.log({pokemonList, next, previous});
            const pokemons: Array<IPokemonElement> = pokemonList.map((pokemon: any) => ({name: pokemon.name, detailsUrl: pokemon.url}))
            state.pokemonList = pokemons;
            state.next = next;
            state.previous = previous;
        },
        updateSelectedPokemon: (state: IGlobalInitialState, action) => {
            const {selectedPokemon} = action.payload;
            const pokemonTypes: Array<IType> = selectedPokemon.types.map((pokemonType: any) => (
                {typeName: pokemonType.type.name}
                ));
            const pokemonAbilities: Array<IAbilities> = selectedPokemon.abilities.map((pokemonAbility: any) => ({abilityName: pokemonAbility.ability.name}))
            const pokemonStats: Array<IStats> = selectedPokemon.stats.map((pokemonStat: any) => ({statName: pokemonStat.stat.name, baseStat: pokemonStat.base_stat}))
            const updatedSelectedPokemon: IPokemon = {
                name: selectedPokemon.name,
                pokemonSprite: selectedPokemon.sprites.front_default,
                pokemonDetails: {
                    pokemonType: pokemonTypes,
                    pokemonId: selectedPokemon.id,
                    pokemonHeight: selectedPokemon.height,
                    pokemonWeight: selectedPokemon.weight,
                    pokemonAbilities: pokemonAbilities,
                    pokemonStats: pokemonStats
                }
            };
            state.selectedPokemon = updatedSelectedPokemon;
        }
    }
});

export const { setPokemonList, updateSelectedPokemon } = globalSlice.actions;
export default globalSlice.reducer;