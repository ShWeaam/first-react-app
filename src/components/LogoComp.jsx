import React from 'react';
import logo from '../media/image4.svg';

export default function LogoComp() {
    return (
    <div className='headerLogo'>
        <img src={logo} alt="PokeDex Logo" className='LogoImg'></img>
    </div>
  )
}
