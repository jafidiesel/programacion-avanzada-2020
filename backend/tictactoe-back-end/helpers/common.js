var crypto = require('crypto');

module.exports = {
    buildResponse: function (statusCode, msg, data){
        return {
            statusCode: statusCode,
            message: msg,
            data: data
        }
    
    },
    hashGenerator : (player_name) => {
        return crypto.createHash('md5').update(player_name).digest('hex');
    }
}
