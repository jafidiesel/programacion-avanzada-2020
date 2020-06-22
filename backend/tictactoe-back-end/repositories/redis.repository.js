let redis = require('redis');
let redisClient = redis.createClient();

redisClient.on('connect', function() {
    console.log('Redis client connected');
});

redisClient.on('error', function (err) {
    console.log('Something went wrong ' + err);
});


const { promisify } = require("util");
const getKeyAsync = promisify(redisClient.get).bind(redisClient);
const incrKeyAsync = promisify(redisClient.incr).bind(redisClient);
const saveKeyAsync = promisify(redisClient.set).bind(redisClient);

const getLastId = async(key) => {
    let result = await getKeyAsync(key)
    if (result) {
        return result;
    } else {
        return 0;
    }
}

const setLastId = async(key) =>{
    return await incrKeyAsync(key)
}

const saveHash = async(hash,key)=>{
    await saveKeyAsync(hash,key)
}

const findByHash = async(hash)=>{
   result = await getKeyAsync(hash)
   return result;
}

module.exports = {
    getLastId,
    setLastId,
    saveHash,
    findByHash
}