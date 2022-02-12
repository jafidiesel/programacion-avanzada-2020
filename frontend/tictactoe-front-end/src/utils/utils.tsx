import { CampaignResponseData } from "interfaces/campaign";
import { PlayersData } from "interfaces/player";
import { Score } from "interfaces/score";

export const getPlayersData = (campaignResponse: CampaignResponseData | null): (PlayersData | null) => {
    let playersData: PlayersData;
    if (!campaignResponse || campaignResponse === undefined) return null;

    playersData = {
        player1: {
            name: campaignResponse.players[0].namePlayer1,
            symbol: campaignResponse.players[0].symbolPlayer1,
        }
    };
    if (!!campaignResponse.players[1].namePlayer2 && !!campaignResponse.players[1].symbolPlayer2) {
        playersData.player2 = {
            name: campaignResponse.players[1].namePlayer2,
            symbol: campaignResponse.players[1].symbolPlayer2
        }
    }
    return playersData;
}
export const getScoreData = (campaignResponse: CampaignResponseData | null): (Score | null) => {
    return !!campaignResponse ? campaignResponse.score : null;
}

export const getActualPlayer = (playersData: (PlayersData | null), nextPlayer: string): string => {
    if (!playersData) return '';
    if (!!playersData && !!playersData.player1 && !playersData.player2) return playersData.player1.name;
    return nextPlayer === playersData.player1.name ? playersData.player1.name : !!playersData.player2 ? playersData.player2.name : "";
}
