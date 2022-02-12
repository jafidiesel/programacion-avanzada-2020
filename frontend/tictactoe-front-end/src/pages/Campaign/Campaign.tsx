import React, { Fragment, useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

import Errors from '../../utils/errors';
import { getStatus as getCampaignData } from '../../utils/apiCalls';
import { PlayersData } from '../../interfaces/player';

import PlayerDashboard from 'components/PlayerDashboard/PlayerDashboard';
import GameBoard from 'components/GameBoard/GameBoard';
import { IError } from 'interfaces/error';
import { CampaignResponseData } from 'interfaces/campaign';
import { getPlayersData, getScoreData } from 'utils/utils';
import DebuggerDashboard from 'components/DebuggerDashboard/DebuggerDashboard';
import { Score } from 'interfaces/score';

const Campaign = (props: any) => {
    const { hash } = props.match.params;
    const { player1Selected, watcher } = props.location?.state;

    let playersData: PlayersData | null = null;
    let scoreData: Score | null = null;

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

    playersData = getPlayersData(campaignResponse);
    scoreData = getScoreData(campaignResponse);

    return (
        <Fragment>
            {
                !!campaignResponse && !!playersData && <>
                    <PlayerDashboard
                        playersData={playersData}
                        nextPlayer={campaignResponse.campaign.nextPlayer}
                        hash={hash}
                        player1Selected={player1Selected}
                        score={scoreData}
                        watcher={watcher}
                    />
                    <GameBoard
                        hash={hash}
                        board={campaignResponse.lastBoard}
                        nextPlayer={campaignResponse.campaign.nextPlayer}
                        playerInSession={player1Selected ? playersData.player1.name : !!playersData.player2 ? playersData.player2?.name! : ''}
                        watcher={watcher}
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
