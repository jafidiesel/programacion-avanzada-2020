var redis = require('redis');
var redisClient = redis.createClient();

const { promisify } = require("util");
const hGetAsync = promisify(redisClient.hget).bind(redisClient);
const hSetAsync = promisify(redisClient.hset).bind(redisClient);
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
    try {
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
    } catch (error) {
        next(error);
    }
}

const saveClient = (idClient, obj)=>{
    if(isNaN(idClient) | !obj) return false;

    try {
        let result = hSetAsync(`client${idClient}`, 'name', obj.name, 'lastname', obj.lastname, 'idClient', obj.idClient);
        return result;
    } catch (error) {
        next(error);
    }
}

const getClient = async (idClient) => {
    if(isNaN(idClient)) return false;

    try {
        let client = {
            name: await hGetAsync( `client${idClient}`, 'name'),
            lastname: await hGetAsync( `client${idClient}`, 'lastname'),
            idClient: await hGetAsync( `client${idClient}`, 'idClient')
        };
        
        return client;
    } catch (error) {
        next(error);
    }
}

const deleteClient = async (idClient)=>{
    if(isNaN(idClient)) return false;

    try {
        let result = delAsync(`client${idClient}`);
        return result;
    } catch (error) {
        next(error);
    }
}

const putClient = async (idClient, obj) =>{
    if(isNaN(idClient) | !obj) return false;

    let idClientRedis = await hGetAsync( `client${idClient}`, 'idClient');
    try {
        let result = await hSetAsync(`client${idClient}`, 'name', obj.name, 'lastname', obj.lastname, 'idClient', idClientRedis); 
        return result;
    } catch (error) {
        next(error);
    }
}

/* client-contracts */

const getAllContractsFromAClient = async (idClient) => {
    if(isNaN(idClient)) return false;

    try {
        let result = await keysAsync(`client${idClient}contract*`);
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
        
    } catch (error) {
        next(error);
    }

}


const saveContract = (idClient, obj)=>{
    if(isNaN(idClient) | !obj) return false;

    try {
        let result = hSetAsync(`client${idClient}contract${obj.idContract}`, 'description', obj.description, 'title', obj.title, 'idContract', obj.idContract);
        return result;
    } catch (error) {
        next(error);
    }
}

const getContract = async(idClient, idContract) => {
    if(isNaN(idClient) | isNaN(idContract)) return false;

    try {
        let contract = {
            title: await hGetAsync(`client${idClient}contract${idContract}`,'title'),
            description: await hGetAsync(`client${idClient}contract${idContract}`, 'description' ),
            idContract: await hGetAsync(`client${idClient}contract${idContract}`, 'idContract' )
        };
        return contract;
        
    } catch (error) {
        next(error);
    }
}

const putContract = async (idClient, idContract, obj) =>{ 
    if(isNaN(idClient) | isNaN(idContract) | !obj) return false;

    try {
        let result = await redisClient.hset(`client${idClient}contract${idContract}`, 'description', obj.description, 'title', obj.title);
        return result;
        
    } catch (error) {
        next(error);
    }
}

const deleteContract = async (idClient,idContract)=>{
    if(isNaN(idClient) | isNaN(idContract)) return false;

    try {
        let result = await delAsync(`client${idClient}contract${idContract}`);
        return result;
        
    } catch (error) {
        next(error);
    }
}

/* contracts */
const getAllContracts = async () => {

    try {
        let result = await keysAsync("*contract*");
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
        
    } catch (error) {
        next(error);
    }

}

module.exports = {
    redisClient,
    redis,
    getAllClients,
    saveClient,
    getClient,
    deleteClient,
    putClient,
    getAllContracts,
    getAllContractsFromAClient,
    saveContract,
    getContract,
    putContract,
    deleteContract
}