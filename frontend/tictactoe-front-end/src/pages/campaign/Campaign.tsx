import React, { Fragment } from 'react';
import Board from 'components/board/Board';
import Player from 'components/player/Player';
import {Container, Row, Col} from 'react-bootstrap';


function Campaign() {

    return (
        <Fragment>
            <Container >
                <Row>
                    <Col style={{backgroundColor: 'blue'}}>
                        <Player name="player1" symbol="X" />
                    </Col>
                    <Col style={{backgroundColor: 'red'}}>
                        <Board/>
                    </Col>
                    <Col style={{backgroundColor: 'blue'}}>
                        <Player name="player2" symbol="O" />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Campaign;
