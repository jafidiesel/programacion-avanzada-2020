const boardModel = require('../models/board.model')
const commonHelper = require('../helpers/common')
const redisService =  require('./redis.service');
const boardRepository = require('../repositories/board.repository')

const createBoard = async(idBoard, idCampaign) => {
    return await boardRepository.newBoard(idBoard, idCampaign);
}

module.exports = {
    createBoard
}