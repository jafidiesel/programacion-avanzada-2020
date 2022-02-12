import { PlayersData } from "interfaces/player";
import React, { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import "./PlayerDashboard.scss";

interface PlayerDashboardProps {
    playersData: PlayersData;
    nextPlayer: string;
    hash: string;
    player1Selected?: boolean;
}

export default function PlayerDashboard(props: PlayerDashboardProps) {
    return (
        <Container>
            <Row>
                <Col xs="12">
                    <h2 className="card-title">Player Dashboard</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="main-card">
                        <h4>{props.player1Selected ? "You are " : ""}Player 1</h4>
                        <p>Name: {props.playersData.namePlayer1}</p>
                        <p>Symbol: {props.playersData.symbolPlayer1}</p>
                    </Card>
                </Col>
                <Col>
                    <Card className="main-card">
                        <h4>{!props.player1Selected ? "You are " : ""}Player 2</h4>
                        {!props.playersData.namePlayer2 ||
                            props.playersData.namePlayer2 === "" ? (
                            <p>
                                Invite your second player with your hash: <b>{props.hash}</b>
                            </p>
                        ) : (
                            <>
                                <p>Name: {props.playersData.namePlayer2}</p>
                                <p>Symbol: {props.playersData.symbolPlayer2}</p>
                            </>
                        )}
                    </Card>
                </Col>
                <Col>
                    <Card className="main-card">
                        <Fragment>
                            <h4>Game Status:</h4>
                            <p>Actual turn: {
                                (props.nextPlayer && props.playersData.namePlayer1 !== props.nextPlayer)
                                    ? props.playersData.namePlayer1
                                    : props.playersData.namePlayer2
                            }</p>
                            {props.nextPlayer ? (
                                <p>Next Player: {props.nextPlayer}</p>
                            ) : (
                                <p>Waiting for second player</p>
                            )}
                            <p>Game hash: {props.hash}</p>
                        </Fragment>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
