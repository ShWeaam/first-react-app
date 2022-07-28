import React from 'react';
import LogoComp from './components/LogoComponent/LogoComp';
import Pokemons from './components/PokemonsComponent/Pokemons';
import './css/App.css';
import './constants/CssConsts.css'
import Search from './components/SearchComponent/Search';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div>
            <LogoComp />
          </div>
        </header>
          <Search/>
          <Pokemons />
      </div>

  );
}

export default App;
