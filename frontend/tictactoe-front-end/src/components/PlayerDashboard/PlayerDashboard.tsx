import { PlayersData } from "interfaces/player";
import { Score } from "interfaces/score";
import React, { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import "./PlayerDashboard.scss";

interface PlayerDashboardProps {
    playersData: PlayersData;
    nextPlayer: string;
    hash: string;
    player1Selected?: boolean;
    score: Score | null;
    watcher: boolean;
}

export default function PlayerDashboard(props: PlayerDashboardProps) {

    const renderFirstPlayerCard = () => {
        return (
            <Card className="main-card">
                <h4>{props.player1Selected && !props.watcher ? "You are " : ""}Player 1</h4>
                <p>Name: {props.playersData.player1.name}</p>
                <p>Symbol: {props.playersData.player1.symbol}</p>
            </Card>
        )
    }

    const renderSecondPlayerCard = () => {
        return (
            <Card className="main-card">
                <h4>{!props.player1Selected && !props.watcher ? "You are " : ""}Player 2</h4>
                {!props.playersData.player2 || !props.watcher ? (
                    <p>
                        Invite your second player with your hash: <small>{props.hash}</small>
                    </p>
                ) : (
                        <>
                            <p>Name: {props.playersData.player2.name}</p>
                            <p>Symbol: {props.playersData.player2.symbol}</p>
                        </>
                    )}
            </Card>
        )
    }


    return (
        <Container>
            <Row>
                <Col xs="12">
                    <h2 className="card-title">Player Dashboard</h2>
                </Col>
            </Row>
            <Row>
                <Col md="6" lg="3" className="pb-sm-2 pb-lg-0" > {renderFirstPlayerCard()} </Col>
                <Col md="6" lg="3" className="pb-sm-2 pb-lg-0" > {renderSecondPlayerCard()} </Col>
                <Col md="6" lg="3" className="pb-sm-2 pb-lg-0" >
                    <Card className="main-card">
                        <Fragment>
                            <h4>Game Status:</h4>
                            {props.nextPlayer ? (
                                <p>Next Player: {props.nextPlayer}</p>
                            ) : (
                                    <p>Waiting for second player</p>
                                )}

                            <h4>Game hash:</h4>
                            <p><small>{props.hash}</small></p>
                        </Fragment>
                    </Card>
                </Col>
                {!!props.score && <Col md="6" lg="3">
                    <Card className="main-card">
                        <h4>Score:</h4>
                        <p>Player 1 wins: {props.score.scorePlayer1}</p>
                        <p>Player 2 wins: {props.score.scorePlayer2}</p>
                        <p>Ties: {props.score.ties}</p>
                    </Card>
                </Col>}
            </Row>
        </Container>
    );
}
