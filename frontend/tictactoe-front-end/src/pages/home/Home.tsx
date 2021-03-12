import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col, Button, InputGroup, FormControl, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { getHash } from '../../utils/backend';
import './Home.scss';

const onClickHandle = (event:any)=>{
	console.log(event.target);
}

function Home() {
	const [namePlayer, setNamePlayer] = useState("")
	const [hash, setHash] = useState("")

	const updateNamePlayer = (event:any) => {
		setNamePlayer(event.target.value)
	}

	const generateHash = () => {
		setHash(getHash(namePlayer));
	}

	return (
		<Container className="main-container">
			<Row>
				<Col xs="12">
					<Card className="main-card">
						<Card.Title className="text-left pt-2 pl-4 pb-0">New Campaign</Card.Title>
						<Card.Body>
							{ !hash && <InputGroup className="mb-3">
								<FormControl
									placeholder="Your name"
									aria-label="Your name"
									aria-describedby="basic-addon2"
									value={namePlayer}
									onChange={updateNamePlayer}
								/>
								<InputGroup.Append>
									<Button
										onClick={generateHash}
										variant="secondary"
									>
										Create game
									</Button>
								</InputGroup.Append>
							</InputGroup>}
							<small>The name must be at least 4 character long.</small>
							<br></br>
							{ hash && <p><b>Your name:</b> {namePlayer}</p>}
							{ hash && <p><b>Your game hash:</b> {hash}</p>}
							{ hash && <p>Remember to share your game hash ({hash}) with your 2nd player.</p>}
							{ hash 
								? <Button
									onClick={onClickHandle}
									className="secondary-button scale-animation"
								>
									<Link to={{
										pathname:`/campaign/${hash}`,
										state: {
											namePlayer: namePlayer,
										}
									}}>
										¡Comenzar partida!
									</Link>
								</Button>
								: null
							}
							<Button
								onClick={onClickHandle}
								className="secondary-button scale-animation"
							>
								<Link to={{
									pathname:`/campaign/test-hash-123`,
									state: {
										namePlayer: "tempName",
									}
								}} >
									¡Comenzar partida harcode!
								</Link>
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>			
	);
}

export default Home;
