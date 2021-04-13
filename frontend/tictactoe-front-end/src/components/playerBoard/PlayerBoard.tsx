import React, { Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { PlayersData } from '../../utils/static/interfaces';

import './PlayerBoard.scss';

interface PlayerBoardProps {
	playersData: PlayersData;
	nextPlayer: string;
    hash: string;
    player1Selected?: boolean;
}

export default function PlayerBoard (props:PlayerBoardProps) {
	return (
		<Container>
			<Row>
				<Col xs="12">
					<h2 className="card-title">PlayerBoard</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card className="main-card">
						<h3>{ props.player1Selected ? "You are " : "" }Player 1</h3>
						<p>Name: {props.playersData.namePlayer1}</p>
						<p>Symbol: {props.playersData.symbolPlayer1}</p>
					</Card>
				</Col>
				<Col>
					<Card className="main-card">
                        <Fragment>
                            <h3>{ !props.player1Selected ? "You are " : "" }Player 2</h3>
                            {
                                !props.playersData.namePlayer2 || props.playersData.namePlayer2 === ''
                                    ? <p>Invite your second player with your hash: <b>{props.hash}</b></p>
                                    : <Fragment>
                                        <p>Name: {props.playersData.namePlayer2}</p>
                                        <p>Symbol: {props.playersData.symbolPlayer2}</p>
                                    </Fragment>
                            }
                        </Fragment>
					</Card>
				</Col>
				<Col>
					<Card className="main-card">
						<Fragment>
                            <h3>Game Status:</h3>
							{
								props.nextPlayer
									? <p>Next Player: {props.nextPlayer}</p>
									: <p>Waiting for second player</p>
							}
							<p>Game hash: {props.hash}</p>
						</Fragment>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
