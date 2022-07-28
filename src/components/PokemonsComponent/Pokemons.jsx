import React, { useEffect, useState } from "react";
import { useRef } from "react";
import pokemonService from '../../services/PokemonsFetch';
import Pokemon from '../PokemonComponent/Pokemon';
import './pokemonsComponent.css'
import '../../constants/CssConsts.css'
import { CARDS_TO_FETCH } from "../../constants/fileWithConstants";


export default function Pokemons() {
    const [fetchedCards, setFetchedCards] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const fetchRequired = useRef(0);
//    {pokemon.abilities[0].ability.name}

    useEffect(() => {
        console.log("in HEREEEE");
        console.log(fetchRequired.current);
        if ((fetchRequired.current % 2) == 0) {
            pokemonService.fetchAll(fetchedCards)
                .then(result => {
                    if (result.error) {
                        Error(result.error);
                        return;
                    }
                    result.data.results.forEach(pokemonInfo => {
                        let pokemon = { "name": pokemonInfo.name, "url": pokemonInfo.url };
                        setPokemons(pokemons => [...pokemons, pokemon]);
                    });
                });
        }
        return () => {
            fetchRequired.current++;
        }
    }, [fetchedCards]);

    const loadMorePokemons = () => {
        fetchRequired.current = true;
        setFetchedCards(fetchedCards + CARDS_TO_FETCH);
    }

    return (
        <div className="PokemonsPg">
            <div className='pokemonsWrapper'>
                {pokemons.map(poki => (
                    <Pokemon temp={poki} key={poki.name} />
                ))}
            </div>

            <div className='loadMoreBtnFrame'>
                <button className="loadMoreBtn" onClick={() => loadMorePokemons()} >Load More...</button>
            </div>
        </div>
    )
}
