import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function GameBoard() {
	return(
		<Container>
			<Row>
				<Col xs="12">
					<h2>GameBoard</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card className="main-card">
						Board
					</Card>
				</Col>
			</Row>
			</Container>
	);
}