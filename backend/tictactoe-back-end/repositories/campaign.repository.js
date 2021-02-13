let redisController = require('../db/redisController'); 
let redisClient = redisController.redisClient; 

const { promisify } = require("util");
let {ErrorHandler} = require('../helpers/error')
const keysAsync = promisify(redisClient.keys).bind(redisClient);
const delAsync = promisify(redisClient.del).bind(redisClient);
const hSetAsync = promisify(redisClient.hset).bind(redisClient);
const getAllAsync = promisify(redisClient.hgetall).bind(redisClient);
const existAsync = promisify(redisClient.exists).bind(redisClient);

const save = async(obj)=>{

    let resulSet = await hSetAsync(`campaign${obj.idCampaign}`,'idCampaign',obj.idCampaign, 'namePlayer1', obj.namePlayer1, 'symbolPlayer1', obj.symbolPlayer1,'scorePlayer1', obj.scorePlayer1,'namePlayer2', obj.namePlayer2, 'symbolPlayer2', obj.symbolPlayer2,'scorePlayer2', obj.scorePlayer2, 'ties', obj.ties, 'lastBoard', obj.lastBoard, 'nextPlayer', obj.nextPlayer);
    
    console.log("save", "obj", obj);
    console.log("save", "resulSet",resulSet);
    
    return resulSet;
}

const del = async() =>{

}

const findById = async(id) =>{
    return await getAllAsync(`campaign${id}`);
}

const findAll = async() =>{

}

module.exports = {
    save,
    findById
}