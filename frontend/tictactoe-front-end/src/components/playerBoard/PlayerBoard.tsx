import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './PlayerBoard.scss';

interface PlayerBoardProps {
	namePlayer1: string;
	namePlayer2?: string;
}

export default function PlayerBoard (props:PlayerBoardProps) {
	return (
		<Container>
			<Row>
				<Col xs="12">
					<h2>PlayerBoard</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card className="main-card">
						<p>namePlayer1: {props.namePlayer1}</p>
						{
							props.namePlayer2
								? <p>namePlayer2: {props.namePlayer2}</p>
								: null
						}
					</Card>
					
				</Col>
			</Row>
		</Container>
	);
}
