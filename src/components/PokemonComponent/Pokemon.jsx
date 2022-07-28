import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { LEADING_ZEROS_AMOUNT, REQUIRED_STATS, STATS_TO_SHOW } from "../../constants/fileWithConstants";
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
  const [pokiTypes, setPokiTypes] = useState([""]);
  const [statsToPrint, setStatsToPrint] = useState([]);

  const fetchRequired = useRef(true);

  useEffect(() => {
    if (fetchRequired.current) {
      pokemonService.fetchSpecific(pokiURL)
        .then(result => {
          if (result.error) {
            Error(result.error);
            return;
          }
          loadPokemonInfo(result.data);
        });
    }
    return () => {
      fetchRequired.current = false;
    }
  }, []);

  function loadPokemonInfo(tempPoki) {
    setPokiName(tempPoki.name);
    setPokiImg(tempPoki.sprites.front_default);
    setPokiID(tempPoki.id);
    loadTypes(tempPoki.types)
    loadRequiredStats(tempPoki.stats)
  }

  function loadTypes(pokemonTypes) {
    (pokemonTypes).forEach(type => {
      setPokiTypes(pokiTypes => [...pokiTypes, type.type.name]);
    });
  }

  function loadRequiredStats(pokemonStats) {
    let tempStat = { "name": '', "statLevel": '' };
    let totel=0;
    pokemonStats.forEach(stat => {
      tempStat.name = stat.stat.name;
      tempStat.statLevel = stat.stat.url;
      setStatsToPrint(statsToPrint => [...statsToPrint, tempStat]);
    })
    addStatsTotal();
  }

  function addStatsTotal(){
    let totalStat = { "name": 'Total', "statLevel": '' };
    let total=0;
    statsToPrint.forEach(stat=>{
      total+= fetch(stat.statLevel);
    })
    totalStat.statLevel=
    setStatsToPrint(statsToPrint => [...statsToPrint, totalStat])
    console.log(totalStat)
  }

  const loadAndShowSpecificPokemon = event => {
    console.log(event.currentTarget.id);
    loadPokemonInfo();
    // set the flag to show the modal to true;
    //showPokemon(true);

  }

  return (
    <div className="pokemonCard" id={pokiName} onClick={loadAndShowSpecificPokemon}>
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
