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
        return crypto.createHash('md5').update(player_name + Math.random() ).digest('hex');
    },
    objectBoardToArray : (obj) => {
        let boardArray = [
            obj.cell0,
            obj.cell1,
            obj.cell2,
            obj.cell3,
            obj.cell4,
            obj.cell5,
            obj.cell6,
            obj.cell7,
            obj.cell8
        ];

        console.log("objectBoardToArray","boardArray",boardArray);

        return boardArray;
    }
}
