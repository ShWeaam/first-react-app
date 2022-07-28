import React, { useEffect, useState } from "react";
import { useRef } from "react";
import pokemonService from '../../services/PokemonsFetch';
import Pokemon from '../PokemonComponent/Pokemon';
import './pokemonsComponent.css'
import '../../constants/CssConsts.css'
import { CARDS_TO_FETCH } from "../../constants/fileWithConstants";


export default function Pokemons() {
    const [fetchedCardsOffset, setFetchedCardsOffset] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const fetchRequired = useRef(true);

    useEffect(() => {
        if (fetchRequired.current) {
            fetchRequired.current = false;
            pokemonService.fetchAll(fetchedCardsOffset)
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
    }, [fetchedCardsOffset]);

    const loadMorePokemons = () => {
        fetchRequired.current = true;
        setFetchedCardsOffset(fetchedCardsOffset + CARDS_TO_FETCH);
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
