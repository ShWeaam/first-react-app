export const CARDS_TO_FETCH = 12
export const LEADING_ZEROS_AMOUNT = 3
export const POKEMON_GET_REQUEST_API = "https://pokeapi.co/api/v2/pokemon?limit=" + CARDS_TO_FETCH + "&offset="

export const POKEMON_TYPE_COLORS = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

export const STATS_TO_SHOW=[]

export const REQUIRED_STATS = [
    {
        statName: 'hp',
        printAs: 'HP',
        statLevel: '',
    },
    {
        statName: 'attack',
        printAs: 'Attack',
        statLevel: '',
    },
    {
        statName: 'defense',
        printAs: 'Defense',
        statLevel: '',
    },
    {
        statName: 'special-attack',
        printAs: 'Special Atk',
        statLevel: '',
    },
    {
        statName: 'special-defense',
        printAs: 'Special Def',
        statLevel: '',
    },
    {
        statName: 'speed',
        printAs: 'Speed',
        statLevel: '',
    },
]