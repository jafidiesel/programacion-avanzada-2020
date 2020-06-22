let campaign = {
    idCampaign: "",
    hash: "",
    namePlayer1: "",
    symbolPlayer1: "",
    scorePlayer1: "",
    namePlayer2: "",
    symbolPlayer2: "",
    scorePlayer2: "",
    ties: "",
    nextPlayer: "",
}

const setCampaign = (obj) =>{
    campaign.idCampaign  = obj.idCampaign ? obj.idCampaign : campaign.idCampaign;
    campaign.hash  = obj.hash ? obj.hash : campaign.hash;
    campaign.namePlayer1  = obj.namePlayer1 ? obj.namePlayer1 : campaign.namePlayer1;
    campaign.symbolPlayer1  = obj.symbolPlayer1 ? obj.symbolPlayer1 : campaign.symbolPlayer1;
    campaign.scorePlayer1  = obj.scorePlayer1 ? obj.scorePlayer1 : campaign.scorePlayer1;
    campaign.namePlayer2  = obj.namePlayer2 ? obj.namePlayer2 : campaign.namePlayer2;
    campaign.symbolPlayer2 = obj.symbolPlayer2 ? obj.symbolPlayer2 : campaign.symbolPlayer2;
    campaign.scorePlayer2  = obj.scorePlayer2 ? obj.scorePlayer2 : campaign.scorePlayer2;
    campaign.ties = obj.ties ? obj.ties : campaign.ties;
    campaign.nextPlayer = obj.nextPlayer ? obj.nextPlayer : campaign.nextPlayer;
}

const getCampaign = (hash) => campaign;


module.exports = {
    setCampaign,
    getCampaign
}