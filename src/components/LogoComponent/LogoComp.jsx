import React from 'react';
import logo from '../../media/pokedexLogo.svg';
import './logo.css'

export default function LogoComp() {
    return (
    <div className='headerLogo'>
        <img src={logo} alt="PokeDex Logo" className='LogoImg'></img>
    </div>
  )
}
