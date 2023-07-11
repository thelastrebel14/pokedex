export interface IPokemonElement {
    name: string;
    detailsUrl: string;
}

export interface IPokemon {
    name: string;
    pokemonSprite: string;
    pokemonDetails: IPokemonDetails;
}

export interface IPokemonDetails {
    pokemonType: string;
    pokemonId: string;
    pokemonHeight: number;
    pokemonWeight: number;
    pokemonAbilities: Array<IAbilities>;
    pokemonStats: Array<IStats>;
}

export interface IAbilities {
    abilityName: string;
}

export interface IStats {
    statName: string;
    baseStat: number;
}