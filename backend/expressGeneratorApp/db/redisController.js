var redis = require('redis');
var redisClient = redis.createClient();

const { promisify } = require("util");
const hGetAsync = promisify(redisClient.hget).bind(redisClient);
const keysAsync = promisify(redisClient.keys).bind(redisClient);
const delAsync = promisify(redisClient.del).bind(redisClient);

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

/* clients */
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

const deleteClient = async (idCLient)=>{
    let result = await delAsync(idCLient)
    console.log('deleteClient',result);
    return result;
}

const putClient = (idClient, obj) =>{ 
    redisClient.hset(`client${idClient}`, 'name', obj.name, 'lastname', obj.lastname)   
}

/* contracts */

const getAllContracts = async (idClient) => {
    let result = await keysAsync("client*contract*");
    if(!result.length) return [];

    let contractsArray = [];

    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        
        contractsArray.push({
            title: await hGetAsync( `${element}`, 'title'),
            description: await hGetAsync( `${element}`, 'description'),
            idContract: await hGetAsync( `${element}`, 'idContract')
        });
    
    }

    return contractsArray;
}

module.exports = {
    redisClient,
    redis,
    getAllClients,
    saveClient,
    getClient,
    getAllContracts,
    deleteClient,
    putClient
}