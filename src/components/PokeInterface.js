import React, { useState } from 'react'
import Popup from './Popup'
import SearchBar from './SearchBar'

/**
 * This contains the pokemon interface which displays the pokemon chosen 
 * and the moveset chosen
 */

export default function PokeInterface ({database}) {
    const [pokeClicked, setPokeClicked] = useState(false)
    const [moveClicked, setMoveClicked] = useState(false)
    const [pokeInfo, setpokeInfo] = useState(null) //This state refers to the single pokemon chosen through search bar
    const [pokeImg, setPokeImg] = useState(require('../images/add_button_poke.png'))
    /**
     * This function returns the button to select a pokemon
     */
    function pokeButton () {
        return (
            <div>
                <main>
                    <button onClick={() => setPokeClicked(true)} className="poke-logo">
                        <img src={pokeImg} height='205px'/>
                    </button>
                </main>

                <Popup trigger={pokeClicked} setTrigger={setPokeClicked}>
                    <SearchBar placeholder="Search for a pokemon" data={database} setInfo={setpokeInfo} setImg={setPokeImg} setClicked={setPokeClicked}/>
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
                <button onClick={() => {
                    if (pokeInfo === null) {
                        console.log("A pokemon has not been selected")
                    }
                    else {
                        setMoveClicked(true)
                    }
                }} 
                className="moves-button">
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