let redis = require('redis');
let redisClient = redis.createClient();

redisClient.on('connect', function() {
    console.log('Redis client connected');
});

redisClient.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

const { promisify } = require("util");
let {ErrorHandler} = require('../helpers/error')
const keysAsync = promisify(redisClient.keys).bind(redisClient);
const delAsync = promisify(redisClient.del).bind(redisClient);
const getAllAsync = promisify(redisClient.hgetall).bind(redisClient);
const existAsync = promisify(redisClient.exists).bind(redisClient);

const save = async(obj)=>{
    let resulSet = await redisClient.hset(`campaign${obj.idCampaign}`, 'namePlayer1', obj.namePlayer1, 'symbolPlayer1', obj.symbolPlayer1,'scorePlayer1', obj.scorePlayer1,'namePlayer2', obj.namePlayer2, 'symbolPlayer2', obj.symbolPlayer2,'scorePlayer2', obj.scorePlayer2, 'ties', obj.ties);
    return resulSet;
}

const update = async() =>{

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