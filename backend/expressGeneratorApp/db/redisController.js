var redis = require('redis');
var redisClient = redis.createClient();

const { promisify } = require("util");
const hGetAsync = promisify(redisClient.hget).bind(redisClient);
const keysAsync = promisify(redisClient.keys).bind(redisClient);



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
        name: await hGetAsync( `client${idClient}`, 'name'), // new Promise(redisClient.hget(id, name))
        lastname: await hGetAsync( `client${idClient}`, 'lastname'),
        idClient: await hGetAsync( `client${idClient}`, 'idClient')
    }
    
    return client;
}

const getAllClients = async () => {
    let result = await keysAsync("client*");
    if(!result.length) return [];

    let clientsArray = [];

    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        
        if(!element.includes("contract")){
            clientsArray.push({
                name: await hGetAsync( `${element}`, 'name'),
                lastname: await hGetAsync( `${element}`, 'lastname'),
                idClient: await hGetAsync( `${element}`, 'idClient')
            });
        }
    }

    return clientsArray;
}

module.exports = {
    redisClient,
    redis,
    saveClient,
    getClient,
    getAllClients
}