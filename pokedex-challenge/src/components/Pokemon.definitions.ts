export interface IPokemon {
    name: string;
    pokemonSprite: any;
    pokemonDetails: IPokemonDetails;
}

export interface IPokemonDetails {
    pokemonType: string;
    pokemonId: string;
    pokemonName: string;
    pokemonHeight: number;
    pokemonWeight: number;
    pokemonAbilities: Array<IAbilities>;
    pokemonStats: Array<IStats>;
}

interface IAbilities {
    abilityName: string;
}

interface IStats {
    statName: string;
    baseStat: number;
}