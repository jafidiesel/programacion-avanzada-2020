import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const onClickHandle = (event:any)=>{
    console.log(event.target);
}



function Welcome() {
    const [namePlayer, setNamePlayer] = useState("")

    const updateNamePlayer = (event:any) => {
        setNamePlayer(event.target.value)
    }

    const getHash = () => ( "456dsa4d65as46das45")

    return (
        
        <Fragment>
            <h1>Tic Tac Toe</h1>
            <label>
                Nombre: 
                <input type="text" value={namePlayer} onChange={updateNamePlayer}/>
            </label>
            <button
                onClick={onClickHandle}>
                    <Link to={{
                        pathname:`/campaign/${getHash()}`,
                        state: {
                            namePlayer: namePlayer,
                        }
                    }} >
                        ¡Comenzar partida!
                    </Link>
                </button>
            <p>{namePlayer}</p>
        </Fragment>
    );
}

export default Welcome;
