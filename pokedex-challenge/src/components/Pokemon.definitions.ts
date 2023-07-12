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
    pokemonType: Array<IType>;
    pokemonId: string;
    pokemonHeight: number;
    pokemonWeight: number;
    pokemonAbilities: Array<IAbilities>;
    pokemonStats: Array<IStats>;
}

export interface IType {
    typeName: string;
}

export interface IAbilities {
    abilityName: string;
}

export interface IStats {
    statName: string;
    baseStat: number;
}