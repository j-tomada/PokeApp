import React from 'react'

/**
 * This contains the pokemon interface which displays the pokemon chosen 
 * and the moveset chosen
 */

export default function PokeInterface () {
    return (
        <ul className="poke-interface">
            <button className="poke-logo">
                <img src={require('./images/add_button_poke.png')} width="230px"/>
            </button>
            <ul className='moves'>
                <ul>
                    <img className="moves-button" src={require('./images/add_button_moves.png')} />
                    <img className="moves-button" src={require('./images/add_button_moves.png')} />
                </ul>
                <ul>
                    <img className="moves-button" src={require('./images/add_button_moves.png')} />
                    <img className="moves-button" src={require('./images/add_button_moves.png')} />
                </ul>
            </ul>
        </ul>
    )
}