import React, { Fragment } from 'react';

interface PlayerProps{
    name: string,
    symbol: string
}

function Player( {name, symbol}:PlayerProps ) {

    return (
        <Fragment>
            <p>Player's name: {name}</p>
            <p>Player's symbol: {symbol}</p>

        </Fragment>
    );
}

export default Player;
