import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Board from 'components/board/Board';

interface GameBoardProps {
    hash: string;
    player1Selected: boolean;
    board?: any;
}

export default function GameBoard(props: GameBoardProps) {

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
                        <Board
                            selectCell={selectCell}
                            board={props.board}
                        />
					</Card>
				</Col>
			</Row>
        </Container>
	);
}