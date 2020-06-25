let redisController = require('../db/redisController'); 
let redisClient = redisController.redisClient; 

const { promisify } = require("util");
let {ErrorHandler} = require('../helpers/error')
const keysAsync = promisify(redisClient.keys).bind(redisClient);
const delAsync = promisify(redisClient.del).bind(redisClient);
const hSetAsync = promisify(redisClient.hset).bind(redisClient);
const getAllAsync = promisify(redisClient.hgetall).bind(redisClient);
const existAsync = promisify(redisClient.exists).bind(redisClient);

const newBoard = async(idBoard, idCampaign)=>{
    
    let resulSet = await hSetAsync(`board${idBoard}campaign${idCampaign}`, 'idBoard', idBoard, 'cell0', '', 'cell1', '', 'cell2', '', 'cell3', '', 'cell4', '', 'cell5', '', 'cell6', '', 'cell7', '', 'cell8', '' );

    return resulSet;
}

const del = async() =>{

}

const findById = async(id) =>{
    return await getAllAsync(`board${id}`);
}

const findAll = async() =>{

}

module.exports = {
    newBoard,
    findById
}