import React, { useState, useEffect, useRef } from 'react'
import Popup from './Popup'
import SearchBar from './SearchBar'

/**
 * This contains the pokemon interface which displays the pokemon chosen 
 * and the moveset chosen
 */

export default function PokeInterface () {
    const [pokeClicked, setPokeClicked] = useState(false)
    const [moveClicked, setMoveClicked] = useState(false)
    const [pokeData, setPokeData] = useState(null)
    const mountedRef = useRef(true)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000')
        .then(response => response.json())
        .then(data => {
            setPokeData(data.results)
        })
        return () => { mountedRef.current = false }
    }, [])

    /**
     * This function returns the button to select a pokemon
     */
    function pokeButton () {
        return (
            <div>
                <main>
                    <button onClick={() => setPokeClicked(true)} className="poke-logo">
                        <img src={require('../images/add_button_poke.png')} height='205px'/>
                    </button>
                </main>

                <Popup trigger={pokeClicked} setTrigger={setPokeClicked}>
                    <h3>My popup</h3>
                    <SearchBar placeholder="Search for a pokemon" data={pokeData}/>
                </Popup>
            </div>
        )
    }

    /**
     * This function returns the button to select a move for a pokemon
     */
    function moveButton () {
        return (
            <div>
                <button onClick={() => setMoveClicked(true)} className="moves-button">
                    <img src={require('../images/add_button_moves.png')} />
                </button>

                <Popup trigger={moveClicked} setTrigger={setMoveClicked}>
                    <h3>Different</h3>
                </Popup>
            </div>
        )
    }
    return (
        <ul className="poke-interface">
            <div>{pokeButton()}</div>
            <ul className='moves'>
                <ul className='moves-column'>
                    <div>{moveButton()}</div>
                    <div>{moveButton()}</div>
                </ul>
                <ul className='moves-column'>
                    <div>{moveButton()}</div>
                    <div>{moveButton()}</div>
                </ul>
            </ul>
        </ul>
    )
}