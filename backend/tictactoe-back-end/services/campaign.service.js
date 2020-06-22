const campaignModel = require('../models/campaign.model')
const commonHelper = require('../helpers/common')
const redisService =  require('./redis.service');
const campaignRepository = require('../repositories/campaign.repository')


const newCampaign = async (body) => {
    let newHash = commonHelper.hashGenerator(body.namePlayer);

    //new campaign
    lastcampaignId = await redisService.getLastId('campaignId')
    actualCampaignId = parseInt(lastcampaignId)+1

    campaignModel.setCampaign({
        idCampaign: actualCampaignId,
        hash: newHash,
        namePlayer1: body.namePlayer,
        symbolPlayer1: "X"
    })

 
    await campaignRepository.save(campaignModel.getCampaign())
    await redisService.saveHash(newHash, actualCampaignId)

    await redisService.setLastId('campaignId')

    
    return {
        status: 200,
        message: 'Campaign created.',
        data: campaignModel.getCampaign()
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