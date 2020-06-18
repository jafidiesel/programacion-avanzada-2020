import React, { Fragment, useState } from 'react';
import Board from 'components/board/Board';
import Player from 'components/player/Player';
import {Container, Row, Col} from 'react-bootstrap';


function Campaign(props:any) {

    const [ player2, setPlayer2] = useState()

    const namePlayer1 = props.location.state.namePlayer;
    const { hash } = props.match.params


    return (
        <Fragment>
            <p>nombre recibido: {namePlayer1}</p>
            <p>hash recibido: {hash}</p>
            <Container >
                <Row>
                    <Col style={{backgroundColor: 'blue'}}>
                        <Player name={namePlayer1} symbol="X" />
                    </Col>
                    <Col style={{backgroundColor: 'red'}}>
                        <Board/>
                    </Col>
                    <Col style={{backgroundColor: 'blue'}}>
                        <Player name="" symbol="" />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Campaign;
