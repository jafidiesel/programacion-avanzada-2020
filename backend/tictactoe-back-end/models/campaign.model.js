const setCampaign = async(obj) =>{

    let data = {
        idCampaign: "",
        hash: "",
        namePlayer1: "",
        symbolPlayer1: "",
        scorePlayer1: 0,
        namePlayer2: "",
        symbolPlayer2: "",
        scorePlayer2: 0,
        ties: 0,
        nextPlayer: "",
        lastBoard: ""
    }
    
    data.idCampaign  = obj.idCampaign ? obj.idCampaign : data.idCampaign;
    data.hash  = obj.hash ? obj.hash : data.hash;
    data.namePlayer1  = obj.namePlayer1 ? obj.namePlayer1 : data.namePlayer1;
    data.symbolPlayer1  = obj.symbolPlayer1 ? obj.symbolPlayer1 : data.symbolPlayer1;
    data.scorePlayer1  = obj.scorePlayer1 ? obj.scorePlayer1 : data.scorePlayer1;
    data.namePlayer2  = obj.namePlayer2 ? obj.namePlayer2 : data.namePlayer2;
    data.symbolPlayer2 = obj.symbolPlayer2 ? obj.symbolPlayer2 : data.symbolPlayer2;
    data.scorePlayer2  = obj.scorePlayer2 ? obj.scorePlayer2 : data.scorePlayer2;
    data.ties = obj.ties ? obj.ties : data.ties;
    data.nextPlayer = obj.nextPlayer ? obj.nextPlayer : data.nextPlayer;
    data.lastBoard = obj.lastBoard ? obj.lastBoard : data.lastBoard;

    return data;
}

const getCampaign = (obj) => {
    return setCampaign(obj);
}


module.exports = {
    setCampaign,
    getCampaign
}