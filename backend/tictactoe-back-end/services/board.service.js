const boardModel = require('../models/board.model')
const commonHelper = require('../helpers/common')
const redisService =  require('./redis.service');
const campaignRepository = require('../repositories/campaign.repository')
const boardRepository = require('../repositories/board.repository')

const createBoard = async(idBoard, idCampaign) => {
    return await boardRepository.newBoard(idBoard, idCampaign);
}

const placeCell = async(campaign, idCampaign, cell, body) => {
    console.log("placeCell", "campaign", campaign, "cell", cell,"body", body);
    

    if(campaign.nextPlayer !== body.namePlayer) return {
        statusCode: 400,
        message: `It's ${campaign.nextPlayer} turn. Not yours!`,
        data: {}
    }

    let symbolToUse = body.namePlayer === campaign.namePlayer1 ? campaign.symbolPlayer1 : campaign.symbolPlayer2;
    
    let idBoard = campaign.lastBoard;
    let board = await boardRepository.findById(idBoard, idCampaign);
    
    let cellToPosition = board[`cell${cell}`];


    

    
    if(cellToPosition !== '') return {
        statusCode: 400,
        message: `Cell${cell} it's already occupied.`,
        data: {}
    }


    board[`cell${cell}`] = symbolToUse;

    await boardRepository.saveBoard(idBoard,idCampaign,  board);


    // check combinations
    let boardArray = commonHelper.objectBoardToArray(board);

    let winStatus = checkBoardCombinations(boardArray);

    

    if(winStatus.tie || (winStatus.winnerSymbol !== '')){
        //create a new board
        await boardRepository.newBoard(1+parseInt(idBoard),idCampaign);
        // update overall score
        await updateScore(idCampaign, 1+parseInt(idBoard), winStatus);
    }

    
    
    return {
        statusCode: 200,
        message: `Cell${cell} placed correctly!`,
        data: await boardRepository.findById(idBoard, idCampaign)
    };

}

const updateScore = async (idCampaign, idBoard, winStatus) =>{
    let rawCampaign = await campaignRepository.findById(idCampaign);
    
    rawCampaign.lastBoard = idBoard ? idBoard : rawCampaign.idBoard ;
    rawCampaign.ties = winStatus.tie ? (parseInt(rawCampaign.ties)+1) : rawCampaign.ties;
    
    if( winStatus.winnerSymbol === rawCampaign.symbolPlayer1 ){
        let numberToAdd = rawCampaign.scorePlayer1 === '' ? 1 : parseInt(rawCampaign.scorePlayer1) +1;
        rawCampaign.scorePlayer1 = numberToAdd;
    }else if( winStatus.winnerSymbol === rawCampaign.symbolPlayer2 ){
        let numberToAdd = rawCampaign.scorePlayer2 === '' ? 1 : parseInt(rawCampaign.scorePlayer2) +1;
        rawCampaign.scorePlayer2 = numberToAdd;
    }

    let resultSaveCampaign = await campaignRepository.save(rawCampaign);

    console.log("------------------------------------> updateScore");
    
}


const checkBoardCombinations = (arr) =>{
    let multiArr = [[]];
    let multiArrTransp = [[]];
    let multiArrDiagonals = [[]];
    let arrIscomplete = true;
  
    for (let index = 0; index < arr.length; index++) {
      const row = multiArr[Math.floor(index / Math.sqrt(arr.length))];
      if (!row) multiArr[Math.floor(index / Math.sqrt(arr.length))] = [];
  
      multiArr[Math.floor(index / Math.sqrt(arr.length))].push(arr[index]);
    }
  
    // check rows
    for (let index = 0; index < multiArr.length; index++) {
      const row = multiArr[index];
      if (commonHelper.checkRowCombination(row)) {
          console.log("row won", row);
          return {
              tie: false,
              winnerSymbol: row[0]
          }
      }
    }
    // check columns
    multiArrTransp = commonHelper.transposeMat(multiArr);
  
    for (let index = 0; index < multiArrTransp.length; index++) {
      const row = multiArrTransp[index];
      if (commonHelper.checkRowCombination(row)) {
        console.log("col won", row);
        return {
            tie: false,
            winnerSymbol: row[0]
        }
      }
    }
  
    // check diagonals
    multiArrDiagonals = commonHelper.extractDiagonals(multiArr);
    for (let index = 0; index < multiArrDiagonals.length; index++) {
      const row = multiArrDiagonals[index];
      if (commonHelper.checkRowCombination(row)) {
        console.log("diagonal won", row);
        return {
            tie: false,
            winnerSymbol: row[0]
        }
      }
    }
  
    // check for a tie
    // check for arr completition
    arr.map((element) => {
      if (element === "") {
        arrIscomplete = false;
      }
    });
    if (arrIscomplete) {
      //declareATie();
      console.log("tie");
        return {
            tie: true,
            winnerSymbol: ''
        }
    }

    return {
        tie: false,
        winnerSymbol: ''
    }
}

module.exports = {
    createBoard,
    placeCell
}
/* 
cell0: 'X',cell1: 'X',cell2: '0',
cell3: '0',cell4: 'X',cell5: '0',
cell6: 'X',cell7: '0',cell8: 'X'  */