import React, { useState } from 'react';
import videogames from '../videogamesArray'

const videogamesArray = videogames


function Videogames() {



    const [newGame, setNewGame] = useState('');

    const [game, setGame] = useState(videogamesArray)

    const addGame = (event) => {
        event.preventDefault();
        const trimmedGame = newGame.trim();
        if (trimmedGame === '') return;

        setGame([...game, { title: trimmedGame }]);
        setNewGame('');
    };

    const removeGame = (id) => {
        const deletGame = game.filter((game, i) => i !== id);

        setGame(deletGame);
    }

    return (
        <>
            <ul className='list-group'>

                {game.map((game, index) =>
                    <li className='list-group-item' key={index}>
                        {game.title}
                        <button className='btn btn-outline-danger position-absolute top-50 end-0 translate-middle-y '
                            onClick={() => removeGame(index)}>
                            Rimuovi
                        </button>
                    </li>
                )}
            </ul>

            <form onSubmit={addGame} className='mt-4'>
                <div className='input-group'>
                    <input
                        value={newGame}
                        onChange={(event) => {
                            setNewGame(event.target.value)
                        }}
                        type='text'
                        placeholder='Nuovo Gioco'
                        className='form-control' />
                    <button className='btn btn-outline-success'>Aggiungi</button>
                </div>
            </form>
        </>
    )
}

export default Videogames