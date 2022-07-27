import React, { useEffect, useState } from "react";
import { useRef } from "react";
import pokemonService from '../services/PokemonsFetch';
import Pokemon from './Pokemon';


export default function Pokemons() {
    const [fetchedCards, setFetchedCards] = useState('0');
    const [cardsToFetch, setCardsToFetch] = useState('12');
    const [pokemons, setPokemons] = useState([]);
    const fetchRequired = useRef(true);
    let fetchUrl = "pokemon?limit=" + cardsToFetch + "offset=" + fetchedCards;

    const loadMoreClicked = () => {
        setFetchedCards(fetchedCards + cardsToFetch);
        loadPokemons(fetchUrl);
    }

    const loadPokemons = () => {
        // load more cards,
    }

    useEffect(() => {
        fetchUrl = "pokemon?limit=" + cardsToFetch + "offset=" + fetchedCards;
        if (fetchRequired.current) {
            pokemonService.fetchAll(fetchUrl)
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
            fetchRequired.current = false;
        }
    }, []);


    return (
        <div>
            <div className='searchDiv'>
                {/* search input */}
            </div>

            <div className='pokemonsWrapper'>
                {pokemons.map(poki => (
                    <Pokemon temp={poki} key={poki.name} />
                ))}
                 <div className="pokemonCard dummyCard">
                    <div className="pokemonImgFrame">
                    </div>
                    <div className="pokemonInfo">
                    </div>
                </div>
            </div>

            <div className='LoadMore'>
                    {/* load more btn */}
            </div>
        </div>
    )
}
