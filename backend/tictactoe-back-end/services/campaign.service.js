const campaignModel = require('../models/campaign.model')
const commonHelper = require('../helpers/common')
const redisService =  require('./redis.service');
const campaignRepository = require('../repositories/campaign.repository')
const boardService = require('./board.service') ;

const getCampaignByHash = async(hash) => {
    let campaignId = await redisService.getByHash(hash);

    let rawCampaign = await campaignRepository.findById(campaignId);

    let campaignByModel = await campaignModel.getCampaign(rawCampaign);

    return campaignByModel;
}

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
        data: {
            hash: newHash,
            campaigh: await campaignRepository.findById(actualCampaignId)
        }
    };
}

const joinCampaign = async (hash, body) => {

    let idCampaign = await redisService.getByHash(hash);

    let rawCampaign = await campaignRepository.findById(idCampaign);

    let campaignByModel = await campaignModel.getCampaign(rawCampaign);
    
    // Check if there's a second player already playing
    if(campaignByModel.namePlayer2) return { message: "There're already two players in this campaign. No more room to join more players."};
    
    // create the first board of the campaign
    let boardCreated = await boardService.createBoard(0, idCampaign);
    if(boardCreated){
        console.log("board created");
        
        campaignByModel.idCampaign = idCampaign;
        campaignByModel.symbolPlayer2 = "0";
        campaignByModel.namePlayer2 = body.namePlayer;
        campaignByModel.lastBoard = 0;
        campaignByModel.nextPlayer = Math.random() > 0.5 ? campaignByModel.namePlayer1 : campaignByModel.namePlayer2;
        
        await campaignRepository.save(campaignByModel);
        
    }

    return {
        message: 'Player 2 joined.',
        data: await campaignRepository.findById(idCampaign)
    };
}

const getCampaignStatus = async (hash) => {
    let campaignByModel = await getCampaignByHash(hash);

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
        boards:[{
            idBoard: 0,
            cell0: "",
            cell1: "",
            cell2: "",
            cell3: "",
            cell4: "",
            cell5: "",
            cell6: "",
            cell7: "",
            cell8: ""
        }],
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


const placeCell = async(hash, cell, body) => {
    let campaignByModel = await getCampaignByHash(hash);

    console.log("idCampaign", campaignByModel.idCampaign);
    
    boardService.placeCell(campaignByModel, cell, body);


}

module.exports = {
    newCampaign,
    joinCampaign,
    getCampaignStatus,
    placeCell
}