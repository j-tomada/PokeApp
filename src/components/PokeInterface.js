import React, { useState } from 'react'
import Popup from './Popup'

/**
 * This contains the pokemon interface which displays the pokemon chosen 
 * and the moveset chosen
 */

export default function PokeInterface () {
    const [buttonClicked, setButtonClicked] = useState(false);
    /**
     * This function returns the button to select a pokemon
     */
    function pokeButton () {
        return (
            <button className="poke-logo" onClick={() => setButtonClicked(true)}>
                <img src={require('../images/add_button_poke.png')} height='205px'/>
                <Popup trigger={buttonClicked}>
                    <h3>My popup</h3>
                </Popup>
            </button>
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