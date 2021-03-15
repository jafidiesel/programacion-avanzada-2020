import React, { Fragment, useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

import Errors from '../../utils/static/Errors';
import { getStatus as getStatusAPI } from '../../utils/apiCalls';
import { PlayersData, CampaignStatus } from '../../utils/static/interfaces';

import PlayerBoard from 'components/playerBoard/PlayerBoard';
import GameBoard from 'components/gameBoard/GameBoard';

function Campaign(props:any) {

	const { hash } = props.match.params
	const namePlayer1 = props.location.state.namePlayer;
	let playersData: PlayersData = {
		namePlayer1: '',
		symbolPlayer1: ''
	};
	const [campaignResponse, setCampaignResponse] = useState<CampaignStatus>({
		campaign: {
			nextPlayer: "",
			lastBoard: ""
		},
		lastBoard: [],
		players: [
			{
				namePlayer1: "",
				symbolPlayer1: ""
			},
			{
				namePlayer2: "",
				symbolPlayer2: ""
			}
		],
		score: {
			scorePlayer1: "",
			scorePlayer2: "",
			ties: ""
		}
	});

	const [ error, setError] = useState({
		message: "",
		state: false,
		type: ""
	});

	useEffect( () => {
		// this declaration in useEffect guarantee the ability to call
		// a async function inside useEffect
		async function fetchData(hash: string) {
			setCampaignResponse(await getStatusAPI(hash));
		}

		try {
			fetchData(hash);
		} catch (error) {
			setError({
				message: "hash error",
				state: true,
				type: Errors.INVALID_HASH
			});
		}
	}, []);

	// this code 
	if(campaignResponse.players.length){
		playersData = {
			namePlayer1: campaignResponse.players[0].namePlayer1,
			symbolPlayer1: campaignResponse.players[0].symbolPlayer1,
			namePlayer2: campaignResponse.players[1].namePlayer2,
			symbolPlayer2: campaignResponse.players[1].symbolPlayer2
		};
	}

	return (
		<Fragment>
			<PlayerBoard
				playersData={playersData}
				nextPlayer={campaignResponse.campaign.nextPlayer}
				hash={hash}
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
