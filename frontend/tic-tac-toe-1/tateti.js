
const declareAWinner = () => {}

const savePlayersNames = (name1, name2) => {
    sessionStorage.setItem('player1Name', name1);
    sessionStorage.setItem('player1Letter', "x");
    sessionStorage.setItem('player2Name', name2);
    sessionStorage.setItem('player2Letter', "0");
}

const getPlayerData = (player)=> {
    let playerName;
    let playerLetter;

    switch (player) {
        case 'player1':
            playerName = sessionStorage.getItem('player1Name');
            playerLetter = sessionStorage.getItem('player1Letter');
            break;
        case 'player2':
            playerName = sessionStorage.getItem('player2Name');
            playerLetter = sessionStorage.getItem('player2Letter');
            break;
    
        default:
            playerName = ''
            playerLetter = ''
            break;
    }
    
    return {
        name: playerName,
        letter: playerLetter
    }

}

const updateCurrentPlayer = (playerName, playerLetter) =>{
    sessionStorage.setItem('playerCurrentName', playerName);
    sessionStorage.setItem('playerCurrentLetter', playerLetter);
}

const getCurrentPlayer = () =>{
    return{
        name: sessionStorage.getItem('playerCurrentName'),
        letter: sessionStorage.getItem('playerCurrentLetter')

    }  
}


const nextPlayer = () => {
    if(getCurrentPlayer().name === getPlayerData('player1').name){
        updateCurrentPlayer(getPlayerData('player2').name, getPlayerData('player2').letter)
    }else if(getCurrentPlayer().name === getPlayerData('player2').name){
        updateCurrentPlayer(getPlayerData('player1').name, getPlayerData('player1').letter)
    }
}

const gameStatus = (nodeArr) =>{
    let arr = []
    let multiArr = [[]];
    let multiArrTransp = [[]];

    // convert nodeArr to arr
    for (let index = 0; index < nodeArr.length; index++) {
        const element = nodeArr[index];
        arr.push(element);
    }



    for (let index = 0; index < arr.length; index++) {
        const row = multiArr[Math.floor(index/(Math.sqrt(arr.length)))];
        if(!row) multiArr[Math.floor(index/(Math.sqrt(arr.length)))] = [];

        multiArr[Math.floor(index/(Math.sqrt(arr.length)))].push(arr[index]);

    }

    console.log('multiArr',multiArr);

    // check rows
    for (let index = 0; index < multiArr.length; index++) {
        const row = multiArr[index];
        checkCombination(row);
        
    }
    // check columns
    multiArrTransp = transposeMat(multiArr);

    for (let index = 0; index < multiArrTransp.length; index++) {
        const row = multiArrTransp[index];
        checkCombination(row);
        
    }

}

const checkRowCombination = (arr) =>{

}

const transposeMat = (mat) => {
    for (let i = 0; i < mat.length; i++) { 
        for (let j = 0; j < i; j++) { 
            const tmp = mat[i][j]; 
            mat[i][j] = mat[j][i]; 
            mat[j][i] = tmp; 
        } 
    }
}