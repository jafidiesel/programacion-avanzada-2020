import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Board from 'components/board/Board';
import "./GameBoard.scss";

interface GameBoardProps {
    hash: string;
    player1Selected: boolean;
    board?: any;
}

export default function GameBoard(props: GameBoardProps) {

    const [gameMessage, setGameMessage] = useState("");

    const selectCell = (e: any) => {
        console.log(e.target.value);
        
    }
	return(
		<Container>
			<Row>
				<Col xs="12">
					<h2 className="card-title">Game Board</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card className="main-card">
                        {
                            !gameMessage
                            ? <Board
                                selectCell={selectCell}
                                board={props.board}
                            />
                            :<div className="game-board">
                                <p>{gameMessage}</p>
                                <Button>New Game!</Button>
                            </div> 
                        }
					</Card>
				</Col>
			</Row>
        </Container>
	);
}