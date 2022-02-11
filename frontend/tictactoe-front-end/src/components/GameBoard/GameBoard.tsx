import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Board from "components/Board/Board";
import "./GameBoard.scss";
import { IBoard } from "interfaces/board";

interface GameBoardProps {
    hash: string;
    player1Selected: boolean;
    board?: IBoard[];
    nextPlayer: string;
}

export default function GameBoard(props: GameBoardProps) {
    const [gameMessage, setGameMessage] = useState("");
    const lastBoard = props.board ? props.board[props.board.length - 1] : null;

    const selectCell = (e: any) => {
        console.log(e.target.value);
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
                        {!gameMessage ? (
                            <Board
                                selectCell={selectCell}
                                board={lastBoard}
                            />
                        ) : (
                            <div className="game-board">
                                <p>{gameMessage}</p>
                                <Button>New Game!</Button>
                            </div>
                        )}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
