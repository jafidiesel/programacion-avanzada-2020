const boardModel = require('../models/board.model')
const commonHelper = require('../helpers/common')
const redisService =  require('./redis.service');
const boardRepository = require('../repositories/board.repository')

const createBoard = async(idBoard, idCampaign) => {
    return await boardRepository.newBoard(idBoard, idCampaign);
}

const placeCell = async(campaign, idCampaign, cell, body) => {
    console.log("placeCell", "campaign", campaign, "cell", cell,"body", body);
    

    if(campaign.nextPlayer !== body.namePlayer) return ;

    let symbolToUse = body.namePlayer === campaign.namePlayer1 ? campaign.symbolPlayer1 : campaign.symbolPlayer2;
    console.log("symbolToUse",symbolToUse);
    
    let idBoard = campaign.lastBoard;
    let board = await boardRepository.findById(idBoard, idCampaign);
    console.log("idBoard", idBoard, "board",board);
    
    let cellToPosition = board[`cell${cell}`];
    console.log("cellToPosition",cellToPosition);
    
    if(cellToPosition !== '') return;
    console.log("guardar valor de la celda");

    board[`cell${cell}`] = symbolToUse;

    await boardRepository.saveBoard(idBoard,idCampaign,  board);
    
    console.log("board updated", await boardRepository.findById(idBoard, idCampaign));
    
    return await boardRepository.findById(idBoard, idCampaign);
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