import React, { useState } from 'react'
import Popup from './Popup'

/**
 * This contains the pokemon interface which displays the pokemon chosen 
 * and the moveset chosen
 */

export default function PokeInterface () {
    const [buttonClicked, setButtonClicked] = useState(false)
    /**
     * This function returns the button to select a pokemon
     */
    function pokeButton () {
        return (
            <div>
                <main>
                    <button onClick={() => setButtonClicked(true)} className="poke-logo">
                        <img src={require('../images/add_button_poke.png')} height='205px'/>
                    </button>
                </main>

                <Popup trigger={buttonClicked} setTrigger={setButtonClicked}>
                    <h3>My popup</h3>
                </Popup>
            </div>
        )
    }

    /**
     * This function returns the button to select a move for a pokemon
     */
    function moveButton () {
        return (
            <button className="moves-button">
                <img src={require('../images/add_button_moves.png')} />
            </button>
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