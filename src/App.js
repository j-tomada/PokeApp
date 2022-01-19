import './App.css';
import React, { useEffect, useRef, useState } from 'react'
import PokeInterface  from './components/PokeInterface';


function App() {
  const [pokeDatabase, setPokeDatabase] = useState([]) //This state refers to all the pokemon in a database
  const mountedRef = useRef(true)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000')
    .then(response => response.json())
    .then(data => {
        console.log("We connected to this nice")
        const tempDatabase = data.results
        let count = 0
        tempDatabase.forEach(function (pokemon) {
            fetch(pokemon.url)
            .then(pokeResponse => pokeResponse.json())
            .then(pokeData => {
                setPokeDatabase(prevPoke => prevPoke.concat(pokeData))
                count += 1
                console.log(count)
                console.log(pokeDatabase)
            })
        })
    })
    return () => { mountedRef.current = false }
  }, []);

  /**
   * Renders an array of PokeInterfaces in lengths of 3
   */
  function renderPokeInterface() {
    return (
      Array.from({length: 3})
        .map((_, index) =>(
          <PokeInterface key={index} database={pokeDatabase}/>
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
