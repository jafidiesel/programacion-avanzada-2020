module.exports = {
    buildResponse: function (statusCode, msg, data){
        return {
            statusCode: statusCode,
            message: msg,
            data: data
        }
    
    },
    hashGenerator : () => {
        return Math.random();
    }
}
