import React, { useState } from 'react';
import { Row, Col, Modal, Form, Button } from 'react-bootstrap';
import { joinCampaign } from "../../utils/apiCalls";

interface JoinModalProps {
	showModal: boolean;
	campaignHash: string;
	toggleShowModal(): void;
}

export default function JoinMondal(props: JoinModalProps) {
	const [ namePlayer, setNamePlayer ] = useState("");
	const [ numberPlayer, setNumberPlayer ] = useState(2);

	const handleNamePlayer = (e: any) => {
		if( !e.target.value ) return;
		setNamePlayer(e.target.value)
	}

	const handleNumberPlayer = (e: any) => {
		if( !e.target.checked ) {
			return;
		} else {
			setNumberPlayer(2);
		}
	}

	const checkJoin = () => {
		if( !namePlayer ) return;
		try {
			joinCampaign(props.campaignHash, namePlayer)
				.then(res => console.log(res))
		} catch (error) {
			console.log(error);
		}
	}

	return(
		<Modal animation={false} show={props.showModal} onHide={props.toggleShowModal} centered size="lg">
			<Modal.Header closeButton>
				<Modal.Title>Game hash: <b>{props.campaignHash}</b></Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row>
					<Col md={{offset: 3, span: 6}}>
						<Form>
							<Form.Row>
								<Col><h5>Join game as:</h5></Col>
								<Col>
									<Form.Control
										placeholder="Player name"
										value={namePlayer}
										onChange={handleNamePlayer}
									/>
								</Col>
							</Form.Row>
							<hr></hr>
							<Form.Row>
								{/* <Col className="text-center">
									<Form.Check
										type="radio"
										label="Player 1"
										name="formHorizontalRadios"
										id="formHorizontalRadios1"
									/>
								</Col> */}
								<Col className="text-center">
									<Form.Check
										type="radio"
										label="Player 2"
										name="formHorizontalRadios"
										id="formHorizontalRadios2"
										onChange={handleNumberPlayer}
										checked
									/>
									{namePlayer}
								</Col>
							</Form.Row>
						</Form>
					</Col>
				</Row>
			</Modal.Body>
			<Modal.Footer className="text-left">
				<Button onClick={checkJoin}>Join Game</Button>
			</Modal.Footer>
		</Modal>
	);
}