import './App.css';
import React, { useRef } from 'react'
import PokeInterface  from './components/PokeInterface';


function App() {
  /**
   * Renders an array of PokeInterfaces in lengths of 3
   */
  function renderPokeInterface() {
    return (
      Array.from({length: 3})
        .map((_, index) =>(
          <PokeInterface key={index} />
        )
      )
    )
  }

  return (
    <div>
      <header>Pokemon App</header>
      <ul className='poke-interface'>
        <li>{renderPokeInterface()}</li>
        <li>{renderPokeInterface()}</li>
      </ul>
    </div>
  );
}

export default App;
