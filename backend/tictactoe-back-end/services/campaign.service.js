const campaignModel = require('../models/campaign.model')
const commonHelper = require('../helpers/common')

const newCampaign = () => {
    let newHash = commonHelper.hashGenerator();

    campaignModel.setCampaign({
        hash: newHash,
        namePlayer1: "namePlayer1",
        symbolPlayer1: "X"
    })
    console.log(JSON.stringify(campaignModel.getCampaign()));
    
    return {
        status: 200,
        message: 'Campaign created.',
        data: {
            hash: campaignModel.getCampaign().hash
        }
    };
}

const joinCampaign = (hash, body) => {
    campaignModel.setCampaign({
        namePlayer2: body.namePlayer,
        symbolPlayer1: "O"
    })
    console.log(JSON.stringify(campaignModel.getCampaign()));
    
    return {
        status: 200,
        message: 'Campaign joined.',
        data: {
            hash: campaignModel.getCampaign().hash
        }
    };
}




module.exports = {
    newCampaign
}