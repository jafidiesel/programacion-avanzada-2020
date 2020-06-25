const boardModel = require('../models/board.model')
const commonHelper = require('../helpers/common')
const redisService =  require('./redis.service');
const boardRepository = require('../repositories/board.repository')

const createBoard = async(idBoard, idCampaign) => {
    return await boardRepository.newBoard(idBoard, idCampaign);
}

const placeCell = async(campaign, cell, body) => {
    /* 
    teniendo la campaña:
        chequear si body.namePlayer === nextPlayer
        obtener el lastBoard
        traer el board
        chequear la celda:
            - si esta vacia, chequear (guardar Board) y corroborar wins
                -en caso de win or tie:
                    - actualizar score
                    - crear nuevo tablero y actualizarlo en lastBoard
            - si esta ocupada rechazar
        
    */
}

module.exports = {
    createBoard,
    placeCell
}