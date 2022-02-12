import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Board from "components/Board/Board";
import { IBoard } from "interfaces/board";
import { setPosition } from '../../utils/apiCalls';
import "./GameBoard.scss";

interface GameBoardProps {
    hash: string;
    board?: IBoard[];
    actualPlayer: string | null;
    nextPlayer: string;
}

export default function GameBoard(props: GameBoardProps) {
    const [gameMessage, setGameMessage] = useState("");
    const lastBoard = props.board ? props.board[props.board.length - 1] : null;

    if (gameMessage === "dsadasdas") setGameMessage("");
    const selectCell = (index: Number) => {
        console.log(index);
        if (!props.actualPlayer) return;
        setPosition(props.hash, index, props.actualPlayer).then(res => console.log(res));
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
