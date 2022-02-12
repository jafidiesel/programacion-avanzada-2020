import React, { Fragment, useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

import Errors from '../../utils/errors';
import { getStatus as getCampaignData } from '../../utils/apiCalls';
import { PlayersData } from '../../interfaces/player';

import PlayerDashboard from 'components/PlayerDashboard/PlayerDashboard';
import GameBoard from 'components/GameBoard/GameBoard';
import { IError } from 'interfaces/error';
import { CampaignResponseData } from 'interfaces/campaign';
import { getActualPlayer } from 'utils/utils';
import DebuggerDashboard from 'components/DebuggerDashboard/DebuggerDashboard';

const Campaign = (props: any) => {
    const { hash } = props.match.params;
    const { player1Selected } = props.location?.state;

    let playersData: PlayersData = {
        namePlayer1: '',
        symbolPlayer1: ''
    };
    let actualPlayer: string | null = null;
    const [campaignResponse, setCampaignResponse] = useState<CampaignResponseData | null>(null);

    const [error, setError] = useState<IError>({
        message: "",
        state: false,
        type: Errors.NONE
    });


    useEffect(() => {
        async function fetchData() {
            setCampaignResponse(await getCampaignData(hash));
        }
        const interval = setInterval(() => {
            fetchData();
        }, 10000);
        try {
            fetchData();
        } catch (error) {
            setError({
                message: "hash error",
                state: true,
                type: Errors.INVALID_HASH
            });
        }
        return () => clearInterval(interval);
    }, [hash]);

    if (!!campaignResponse) {
        playersData = {
            namePlayer1: campaignResponse.players[0].namePlayer1,
            symbolPlayer1: campaignResponse.players[0].symbolPlayer1,
            namePlayer2: campaignResponse.players[1].namePlayer2,
            symbolPlayer2: campaignResponse.players[1].symbolPlayer2
        };
        actualPlayer = getActualPlayer(playersData, campaignResponse.campaign.nextPlayer);
    }

    return (
        <Fragment>
            {
                !!campaignResponse && <>
                    <PlayerDashboard
                        playersData={playersData}
                        nextPlayer={campaignResponse.campaign.nextPlayer}
                        hash={hash}
                        player1Selected={player1Selected}
                    />
                    <GameBoard
                        hash={hash}
                        board={campaignResponse.lastBoard}
                        actualPlayer={actualPlayer}
                        nextPlayer={campaignResponse.campaign.nextPlayer}
                    />
                </>
            }

            <DebuggerDashboard campaignResponse={campaignResponse} />
            <hr></hr>
            {
                error.state && <Alert variant="danger">
                    {error.message}
                </Alert>
            }
        </Fragment>
    );
}

export default Campaign;
