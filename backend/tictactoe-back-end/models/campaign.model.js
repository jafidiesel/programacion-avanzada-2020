let campaign = {
    hash: null,
    namePlayer1: null,
    symbolPlayer1: null,
    scorePlayer1: null,
    namePlayer2: null,
    symbolPlayer2: null,
    scorePlayer1: null,
    ties: null,
    nextPlayer: null,
}

const setCampaign = (obj) =>{
    campaign.hash  = obj.hash ? obj.hash : null;
    campaign.namePlayer1  = obj.namePlayer1 ? obj.namePlayer1 : null;
    campaign.symbolPlayer1  = obj.symbolPlayer1 ? obj.symbolPlayer1 : null;
    campaign.scorePlayer1  = obj.scorePlayer1 ? obj.scorePlayer1 : null;
    campaign.namePlayer2  = obj.namePlayer2 ? obj.namePlayer2 : null;
    campaign.symbolPlayer2  = obj.symbolPlayer2 ? obj.symbolPlayer2 : null;
    campaign.scorePlayer2  = obj.scorePlayer2 ? obj.scorePlayer2 : null;
    campaign.ties  = obj.ties ? obj.ties : null;
    campaign.nextPlayer  = obj.nextPlayer ? obj.nextPlayer : null;
}

const getCampaign = (hash) => campaign;


module.exports = {
    setCampaign,
    getCampaign
}