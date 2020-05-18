var redis = require('redis');
var redisClient = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(redisClient.hget).bind(redisClient);


redisClient.on('connect', function() {
    console.log('Redis client connected');
});

redisClient.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

redisClient.set('redis-up-and-running',"REDIS-OK", redis.print)

redisClient.get('redis-up-and-running', function (error, result) {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log('Redis status: ' + result);
});

const saveClient = (idClient, obj)=>{
    let result = redisClient.hset(`client${idClient}`, 'name', obj.name, 'lastname', obj.lastname, 'idClient', obj.idClient)
    console.log('saveClient',result);
}

const getClient = async (idClient) => {
    if(isNaN(idClient)) return false;

    let client = {
        name: await getAsync( `client${idClient}`, 'name'),
        lastname: await getAsync( `client${idClient}`, 'lastname'),
        idClient: await getAsync( `client${idClient}`, 'idClient')
    }
    
    return client;
}

module.exports = {
    redisClient,
    redis,
    saveClient,
    getClient
}