const campaignModel = require('../models/campaign.model')
const commonHelper = require('../helpers/common')
const redisService =  require('./redis.service');
const campaignRepository = require('../repositories/campaign.repository')


const newCampaign = async (body) => {
    let newHash = commonHelper.hashGenerator(body.namePlayer);

    //new campaign
    lastcampaignId = await redisService.getLastId('campaignId');
    actualCampaignId = parseInt(lastcampaignId)+1;

    let campaignByModel = await campaignModel.setCampaign({
        idCampaign: actualCampaignId,
        hash: newHash,
        namePlayer1: body.namePlayer,
        symbolPlayer1: "X"
    })

    await campaignRepository.save(campaignByModel);
    await redisService.saveHash(newHash, actualCampaignId);

    await redisService.setLastId('campaignId');

    
    return {
        status: 200,
        message: 'Campaign created.',
        data: await campaignRepository.findById(actualCampaignId)
    };
}

const joinCampaign = async (hash, body) => {
    let campaignId = await redisService.getByHash(hash);

    let rawCampaign = await campaignRepository.findById(campaignId);

    let campaignByModel = await campaignModel.getCampaign(rawCampaign);
    
    // Check if there's a second player already playing
    if(campaignByModel.namePlayer2) return { message: "There're already two players in this campaign. No more room to join more players."};
    
    campaignByModel.idCampaign = campaignId;
    campaignByModel.symbolPlayer2 = "0";
    campaignByModel.namePlayer2 = body.namePlayer;
    
    await campaignRepository.save(campaignByModel)

    return {
        message: 'Player 2 joined.',
        data: await campaignRepository.findById(campaignId)
    };
}

const getCampaignStatus = async (hash) => {
    let campaignId = await redisService.getByHash(hash);

    let rawCampaign = await campaignRepository.findById(campaignId);

    let campaignByModel = await campaignModel.getCampaign(rawCampaign);

    let data = {
        players:[
            {
                namePlayer1: campaignByModel.namePlayer1,
                symbolPlayer1: campaignByModel.symbolPlayer1
            },
            {
                namePlayer2: campaignByModel.namePlayer2,
                symbolPlayer2: campaignByModel.symbolPlayer2
            }
        ],
        board:{
            idBoard: 0,
            cell1: "",
            cell2: "",
            cell3: "",
            cell4: "",
            cell5: "",
            cell6: "",
            cell7: "",
            cell8: ""
        },
        campaign: {
            nextPlayer: campaignByModel.nextPlayer,
            lastBoard: campaignByModel.lastBoard
        },
        score:{
            scorePlayer1: campaignByModel.scorePlayer1,
            scorePlayer2: campaignByModel.scorePlayer2,
            ties: campaignByModel.ties
        }
    }

    return data;
}



module.exports = {
    newCampaign,
    joinCampaign,
    getCampaignStatus
}