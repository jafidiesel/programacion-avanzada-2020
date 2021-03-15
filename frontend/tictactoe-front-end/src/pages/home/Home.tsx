import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col, Button, InputGroup, FormControl, OverlayTrigger, Tooltip, Alert } from 'react-bootstrap';

import { newCampaign } from '../../utils/apiCalls';
import Errors from '../../utils/static/Errors';

import './Home.scss';

const onClickHandle = (event:any)=>{
	console.log(event.target);
}

function Home() {
	const [namePlayer, setNamePlayer] = useState("");
	const [hash, setHash] = useState("");
	const [ error, setError] = useState({
		message: "",
		state: false,
		type: Errors.NONE
	});

	const updateNamePlayer = (event:any) => {
		setNamePlayer(event.target.value)
	}

	const generateHash = async () => {
		if(!namePlayer || namePlayer.length < 4) {
			setError({
				message: "Name field must be at least 4 character long.",
				state: true,
				type: Errors.INPUT_TOO_SHORT
			});
			return;
		}
		let campaign = await newCampaign(namePlayer);
		setHash(campaign.hash);
		setError({
			message: "",
			state: false,
			type: Errors.NONE
		});
	}

	return (
		<Container className="main-container">
			<Row>
				<Col xs="12">
					<Card className="main-card">
						<h2 className="text-left pt-2 pl-4 pb-0">New Campaign</h2>
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
							{ 
								!hash
									? null
									: <Fragment>
											<p><b>Your name:</b> {namePlayer}</p>
											<p><b>Your game hash:</b> {hash}</p>
											<p>Remember to share your game hash ({hash}) with your 2nd player.</p>
											<Link to={{
												pathname:`/campaign/${hash}`,
												state: {
													namePlayer: namePlayer,
												}
											}}>
											<Button
												onClick={onClickHandle}
												className="secondary-button scale-animation"
											>
													Start Game!
											</Button>
										</Link>
									</Fragment>
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
						<Card.Footer>
							{
								error.state
									? <Alert variant="danger">
										{error.message}
									</Alert>
									: null
							}
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>			
	);
}

export default Home;
