import React, { useEffect, useState } from "react";
import { useRef } from "react";
import pokemonService from '../services/PokemonsFetch';

export default function Pokemon(props) {
  const [pokiObj, setPokiObj] = useState();
  const [pokiName, setPokiName] = useState(props.temp.name);
  const [pokiImg, setPokiImg] = useState('');
  const [pokiID, setPokiID] = useState('');
  const [pokiURL, setPokiURL] = useState(props.temp.url);

  const fetchRequired = useRef(true);

  useEffect(() => {
    if (fetchRequired.current) {
      pokemonService.fetchSpecific(pokiURL)
        .then(result => {
          if (result.error) {
            Error(result.error);
            return;
          }
          setPokiName(result.data.name);
          setPokiImg(result.data.sprites.front_default);
          setPokiID(result.data.id);
        });
    }
    return () => {
      fetchRequired.current = false;
    }
  }, []);


  return (
    <div className="pokemonCard">
      <div className="pokemonImgFrame">
        <img className="pokemonImg" src={pokiImg} alt="Pokemon Image" />
      </div>
      <div className="pokemonInfo">
        <ul className="pokemonList">
          <li>{pokiName}</li>
          <li>{pokiID}</li>
        </ul>
      </div>
    </div>
  )
}
