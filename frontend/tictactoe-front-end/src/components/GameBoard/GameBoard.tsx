import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Board from "components/Board/Board";
import { IBoard } from "interfaces/board";
import { setPosition } from '../../utils/apiCalls';
import "./GameBoard.scss";

interface GameBoardProps {
    hash: string;
    board?: IBoard[];
    nextPlayer: string;
    playerInSession: string;
    watcher: boolean;
}

export default function GameBoard(props: GameBoardProps) {
    const lastBoard = props.board ? props.board[props.board.length - 1] : null;

    const selectCell = (index: Number, playerName: string) => {
        setPosition(props.hash, index, playerName);
    };
    return (
        <Container>
            <Row>
                <Col xs="12">
                    <h2 className="card-title">Game Board</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="main-card">
                        <Board
                            selectCell={selectCell}
                            board={lastBoard}
                            playerInSession={props.playerInSession}
                            isPlayerTurn={props.playerInSession === props.nextPlayer}
                            watcher={props.watcher}
                        />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
