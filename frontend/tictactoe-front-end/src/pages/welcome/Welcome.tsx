import React, { Fragment } from 'react';

function Welcome() {

    return (
        <Fragment>
            <h1>Tic Tac Toe</h1>
            <label>
                Nombre: 
                <input type="text" />
            </label>
            <button>¡Comenzar partida!</button>
        </Fragment>
    );
}

export default Welcome;
