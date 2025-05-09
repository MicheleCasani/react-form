import React from 'react'
import videogames from '../videogamesArray'



function Videogames() {
    return (
        <ul className='list-group'>
            {videogames.map((game, index) =>
                <li className='list-group-item'
                    key={index}>
                    {game.title}
                </li>
            )
            }
        </ul>
    )
}

export default Videogames