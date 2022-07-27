import './css/App.css';
import React from 'react';
import LogoComp from './components/LogoComp';
import Pokemons from './components/Pokemons';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div>
            <LogoComp />
          </div>
        </header>
        <div>
          <Pokemons />
        </div>
      </div>

  );
}

export default App;
