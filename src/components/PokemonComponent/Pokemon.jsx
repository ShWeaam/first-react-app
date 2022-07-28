import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { LEADING_ZEROS_AMOUNT } from "../../constants/fileWithConstants";
import { capitalizeFirstLetter, getNumberWithLeadingZeros } from "../../helpers/helpingFunctions";
import pokemonService from '../../services/PokemonsFetch';
import PokemonImg from "../PokemonImg/PokemonImg";
import './pokemonComponent.css'
import '../../constants/CssConsts.css'

export default function Pokemon(props) {
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
    <div className="pokemonCard" id={pokiName} key={pokiName}>
      <div className="PokemonID" id={pokiID}>
        #{getNumberWithLeadingZeros(pokiID, LEADING_ZEROS_AMOUNT)}
      </div>
      <PokemonImg pokemonImgUrl={pokiImg} />
      <div className="pokemonInfo">
        {capitalizeFirstLetter(pokiName)}
      </div>
    </div>
  )
}
