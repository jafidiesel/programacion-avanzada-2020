import React, { Fragment, useState, useEffect, ReactNode } from 'react';
import Board from 'components/board/Board';
import Player from 'components/player/Player';
import {Container, Row, Col, Card} from 'react-bootstrap';
import Errors from '../../utils/static/Errors';
import {getStatus} from '../../utils/apiCalls';
import PlayerBoard from 'components/playerBoard/PlayerBoard';
import GameBoard from 'components/gameBoard/GameBoard';

function Campaign(props:any) {

    const namePlayer1 = props.location.state.namePlayer;
    const [ namePlayer2, setNamePlayer2] = useState("");

    const [ error, setError] = useState({
        message: "",
        state: false,
        type: ""
    });

    const handleNamePlayer2 = (event: any) => {
        event.preventDefault();
        setNamePlayer2(event.target.value);
    }
    
    const { hash } = props.match.params
    /* 
        - check hash received is valid
            if not show error
        - if it is correct ask for username.
            if doesn't exist show error
        - if it's correct 
    */

  /*   useEffect(() => {
        // component did mount
        //- check hash received is valid
        //    if not show error
        if(true)
            setError({
                message: "hash error",
                state: true,
                type: Errors.INVALID_HASH
            })
    }, []); */

    const renderGameboard = (): ReactNode => {
        return (
            <Container>
                {
                    namePlayer1 
                        ? <Row>
                            <Col xs="12" lg="4" style={{backgroundColor: 'blue'}}>
                                <Player name={namePlayer1} symbol="X" />
                            </Col>
                            <Col xs="12" lg="4" style={{backgroundColor: 'red'}}>
                                <Board/>
                            </Col>
                            <Col xs="12" lg="4" style={{backgroundColor: 'blue'}}>
                                <Player name={namePlayer2} symbol="O" />
                            </Col>
                        </Row>
                    :
                    <Row>
                        <Col>
                            <Card className="main-card">
                                <Card.Title className="text-left pt-2 pl-4 pb-0">Enter your name:</Card.Title>
                                <Card.Body>
                                    <input value={namePlayer2} onChange={handleNamePlayer2}/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                }
            </Container>
        )
    }

    return (
        <Fragment>
            {/* <p>nombre recibido: {namePlayer1}</p>
            <p>hash recibido: {hash}</p>
            <p>{getStatus()}</p>
            {
                error.type === Errors.INVALID_HASH
                    ? <div>
                        <p>{error.type}</p>
                        <button onClick={()=>setError({
                            message: "none",
                            state: false,
                            type: ""
                        })}>change</button>
                    </div>
                    : renderGameboard()
            } */}
            {/* <PlayerBoard 
                namePlayer1={namePlayer1}
            />
            <GameBoard
            /> */}

        </Fragment>
    );
}

export default Campaign;
