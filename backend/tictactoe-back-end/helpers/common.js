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
    },
    checkRowCombination : (arr) => {
        if (arr[0] === "") return false;
        for (let index = 1; index < arr.length; index++) {
            if (arr[0] !== arr[index]) return false;
        }
        return true;
    },
    transposeMat : (mat) => {
        for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < i; j++) {
            const tmp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = tmp;
        }
        }
        return mat;
    },
    extractDiagonals : (mat) => {
        let diagonalElements = [];
        let diagonalInvertedElements = [];
        for (let index = 0; index < mat.length; index++) {
            const element = mat[index][index];
            const elementInverted = mat[mat.length - index - 1][index];
            diagonalElements.push(element);
            diagonalInvertedElements.push(elementInverted);
        }
        return [diagonalElements, diagonalInvertedElements];
    }
}
