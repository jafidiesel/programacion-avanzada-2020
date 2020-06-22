const redisRepository = require('../repositories/redis.repository');

const getLastId = async(key) => {
    return await redisRepository.getLastId(key)
}
const setLastId = async(key)=>{
    return await redisRepository.setLastId(key)
}

const saveHash = async(hash,key)=>{
    await redisRepository.saveHash(hash,key)
}

const getByHash = async(hash)=>{
    return await redisRepository.findByHash(hash)
}

module.exports = {
    getLastId,
    setLastId,
    saveHash,
    getByHash
}