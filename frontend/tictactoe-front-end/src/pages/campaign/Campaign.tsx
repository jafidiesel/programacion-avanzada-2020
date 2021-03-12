import React, { Fragment, useState, useEffect } from 'react';
import PlayerBoard from 'components/playerBoard/PlayerBoard';
import GameBoard from 'components/gameBoard/GameBoard';
import { Alert } from 'react-bootstrap';
import Errors from '../../utils/static/Errors';
import { getStatus } from '../../utils/backend';

function Campaign(props:any) {

	const namePlayer1 = props.location.state.namePlayer;

	const [ error, setError] = useState({
		message: "",
		state: false,
		type: ""
	});

	const { hash } = props.match.params

	useEffect(() => {
		// component did mount
		//- check hash received is valid
		//	if not show error

		if(getStatus(hash, namePlayer1))
			setError({
				message: "hash error",
				state: true,
				type: Errors.INVALID_HASH
			})
	}, []);

	return (
		<Fragment>
			<PlayerBoard 
				namePlayer1={namePlayer1}
			/>
			<GameBoard
			/>
			<hr></hr>
			<p>hash received: {hash}</p>
			{
				error.state
					? <Alert variant="danger">
						{error.message}
					</Alert>
					: null
			}
		</Fragment>
	);
}

export default Campaign;
