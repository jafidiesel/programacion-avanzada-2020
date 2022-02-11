import React, { Fragment } from 'react';

interface PlayerProps{
    name: string,
    symbol: string
}

function Player( {name, symbol}:PlayerProps ) {

    return (
        <Fragment>
            {name && symbol ? 
                (<div>
                    <p>Player's name: {name}</p>
                    <p>Player's symbol: {symbol}</p>
                </div>)
                :
                <p>Esperando jugador 2..</p>
            }
        </Fragment>
    );
}

export default Player;
