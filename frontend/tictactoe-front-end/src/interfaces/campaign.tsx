export interface CampaignModel {
    hash: string;
    campaign: {
        idCampaign: number;
        namePlayer1: string;
        symbolPlayer1: string;
        scorePlayer1: number;
        namePlayer2: string;
        symbolPlayer2: string;
        scorePlayer2: number;
        ties: number;
        lastBoard: string;
        nextPlayer: string;
    };
}


export interface CampaignResponseData {
    campaign: {
        nextPlayer: string;
        lastBoard: string;
    };
    lastBoard: [];
    players: [
        {
            namePlayer1: string;
            symbolPlayer1: string;
        },
        {
            namePlayer2?: string;
            symbolPlayer2?: string;
        }
    ];
    score: {
        scorePlayer1: string;
        scorePlayer2: string;
        ties: string;
    };
}
