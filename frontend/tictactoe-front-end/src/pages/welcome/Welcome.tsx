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

    const getHash2 = () => ( "456dsa4d65as46das45")
    const getHash = () => {
        fetch('http://127.0.0.1:3000/campaign/new',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ namePlayer: namePlayer })
        })
            .then(data => console.log(data) )
            .catch(error => console.log(error) )
    }

    return (
        <Fragment>
            <h1>Tic Tac Toe</h1>
            <label>
                Nombre: 
                <input type="text" value={namePlayer} onChange={updateNamePlayer}/>
            </label>
            <button
                onClick={getHash}
            >fetch</button>
            {/* <button
                onClick={onClickHandle}>
                    <Link to={{
                        pathname:`/campaign/${getHash()}`,
                        state: {
                            namePlayer: namePlayer,
                        }
                    }} >
                        ¡Comenzar partida!
                    </Link>
                </button> */}
            <p>{namePlayer}</p>
        </Fragment>
    );
}

export default Welcome;
