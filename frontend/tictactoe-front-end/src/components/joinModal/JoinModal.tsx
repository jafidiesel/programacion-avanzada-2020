import React, { useState } from 'react';
import { Row, Col, Modal, Form, Button } from 'react-bootstrap';
import { joinCampaign } from "../../utils/apiCalls";

interface JoinModalProps {
	showModal: boolean;
	campaignHash: string;
    toggleShowModal(): void;
    history: any;
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
			setNumberPlayer(Number(e.target.value));
		}
	}

	const checkJoin = () => {
		if( !numberPlayer ) return;
		try {
			joinCampaign(props.campaignHash, namePlayer)
				.then(res => {
                    props.history.push({
                        pathname:`/campaign/${props.campaignHash}`,
                        state: {
                            player1Selected: false
                        }
                    })
                    props.toggleShowModal();
                })
		} catch (error) {
			console.log(error);
		}
	}

	return(
		<Modal animation={false} show={props.showModal} onHide={props.toggleShowModal} centered size="lg">
			<Modal.Header closeButton>
				<Modal.Title><b>Game hash: </b>{props.campaignHash}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row>
					<Col md={{offset: 3, span: 6}}>
						<Form>
							<Form.Row>
								<Col><h5>Join game as:</h5></Col>
								<Col>
									<Form.Check
										type="radio"
										label="Player 1"
										name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        value={1}
                                        onChange={handleNumberPlayer}
                                        disabled
									/>
									<Form.Check
										type="radio"
										label="Player 2"
										name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                        value={2}
                                        onChange={handleNumberPlayer}
                                        checked
									/>
								</Col>
							</Form.Row>
                            {
                                numberPlayer === 2
                                ? <>
                                    <hr></hr>
                                    <Form.Row>
                                        <Col className="text-center">
                                            <p>2nd player's name: </p>
                                        </Col>
                                        <Col className="text-center">
                                            <Form.Control
                                                placeholder="Player name"
                                                value={namePlayer}
                                                onChange={handleNamePlayer}
                                            />
                                        </Col>
                                    </Form.Row>
                                </>
                                : null
                            }
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