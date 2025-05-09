import React, { useState } from 'react';
import videogames from '../videogamesArray'



function Videogames() {

    const [newVideogames, setVideogames] = useState('');


    return (
        <>
            <ul className='list-group'>

                {videogames.map((game, index) =>
                    <li className='list-group-item' key={index}>
                        {game.title}
                        <button className='btn btn-danger position-absolute top-50 end-0 translate-middle-y '>
                            Rimuovi
                        </button>
                    </li>
                )}
            </ul>

            <form onSubmit={''}>
                <div className='input-group'>
                    <input
                        value={newVideogames} />
                    <button className='btn btn-primary'>Aggiungi</button>
                </div>
            </form>
        </>
    )
}

export default Videogames