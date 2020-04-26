const declareAWinner = (letterWinner) => {
  if (sessionStorage.getItem("player1Letter") === letterWinner) {
    sessionStorage.setItem(
      "player1Wins",
      parseInt(sessionStorage.getItem("player1Wins")) + 1
    );
  } else if (sessionStorage.getItem("player2Letter") === letterWinner) {
    sessionStorage.setItem(
      "player2Wins",
      parseInt(sessionStorage.getItem("player2Wins")) + 1
    );
  }
};

const declareATie = () => {
  sessionStorage.setItem("ties", parseInt(sessionStorage.getItem("ties")) + 1);
};

const getPlayerNameByLetter = (letter) => {
  if (sessionStorage.getItem("player1Letter") === letter) {
    return sessionStorage.getItem("player1Name");
  } else if (sessionStorage.getItem("player2Letter") === letter) {
    return sessionStorage.getItem("player2Name");
  }
};

const initializePlayersWins = () => {
  sessionStorage.setItem("player1Wins", 0);
  sessionStorage.setItem("player2Wins", 0);
  sessionStorage.setItem("ties", 0);
};

const savePlayersNames = (name1, name2) => {
  sessionStorage.setItem("player1Name", name1);
  sessionStorage.setItem("player1Letter", "x");
  sessionStorage.setItem("player2Name", name2);
  sessionStorage.setItem("player2Letter", "0");
};

const getPlayerData = (player) => {
  let playerName;
  let playerLetter;

  switch (player) {
    case "player1":
      playerName = sessionStorage.getItem("player1Name");
      playerLetter = sessionStorage.getItem("player1Letter");
      break;
    case "player2":
      playerName = sessionStorage.getItem("player2Name");
      playerLetter = sessionStorage.getItem("player2Letter");
      break;

    default:
      playerName = "";
      playerLetter = "";
      break;
  }

  return {
    name: playerName,
    letter: playerLetter,
  };
};

const getGameScore = () => {
  return {
    player1: sessionStorage.getItem("player1Wins"),
    player2: sessionStorage.getItem("player2Wins"),
    ties: sessionStorage.getItem("ties"),
  };
};

const updateCurrentPlayer = (playerName, playerLetter) => {
  sessionStorage.setItem("playerCurrentName", playerName);
  sessionStorage.setItem("playerCurrentLetter", playerLetter);
};

const getCurrentPlayer = () => {
  return {
    name: sessionStorage.getItem("playerCurrentName"),
    letter: sessionStorage.getItem("playerCurrentLetter"),
  };
};

const nextPlayer = () => {
  if (getCurrentPlayer().name === getPlayerData("player1").name) {
    updateCurrentPlayer(
      getPlayerData("player2").name,
      getPlayerData("player2").letter
    );
  } else if (getCurrentPlayer().name === getPlayerData("player2").name) {
    updateCurrentPlayer(
      getPlayerData("player1").name,
      getPlayerData("player1").letter
    );
  }
};

const gameStatus = (arr) => {
  let multiArr = [[]];
  let multiArrTransp = [[]];
  let multiArrDiagonals = [[]];
  let arrIscomplete = true;

  for (let index = 0; index < arr.length; index++) {
    const row = multiArr[Math.floor(index / Math.sqrt(arr.length))];
    if (!row) multiArr[Math.floor(index / Math.sqrt(arr.length))] = [];

    multiArr[Math.floor(index / Math.sqrt(arr.length))].push(arr[index]);
  }

  // check rows
  for (let index = 0; index < multiArr.length; index++) {
    const row = multiArr[index];
    if (checkRowCombination(row)) {
      declareAWinner(row[0]);

      return `Ganador ${getPlayerNameByLetter(row[0])} (${row[0]})`;
    }
  }
  // check columns
  multiArrTransp = transposeMat(multiArr);

  for (let index = 0; index < multiArrTransp.length; index++) {
    const row = multiArrTransp[index];
    if (checkRowCombination(row)) {
      declareAWinner(row[0]);
      return `Ganador ${getPlayerNameByLetter(row[0])} (${row[0]})`;
    }
  }

  // check diagonals
  multiArrDiagonals = extractDiagonals(multiArr);
  for (let index = 0; index < multiArrDiagonals.length; index++) {
    const row = multiArrDiagonals[index];
    if (checkRowCombination(row)) {
      declareAWinner(row[0]);
      return `Ganador ${getPlayerNameByLetter(row[0])} (${row[0]})`;
    }
  }

  // check for a tie
  // check for arr completition
  arr.map((element) => {
    if (element === "") {
      arrIscomplete = false;
    }
  });
  if (arrIscomplete) {
    declareATie();
    return `¡Empate!`;
  }
};

const checkRowCombination = (arr) => {
  if (arr[0] === "") return false;
  for (let index = 1; index < arr.length; index++) {
    if (arr[0] !== arr[index]) return false;
  }
  return true;
};

const transposeMat = (mat) => {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < i; j++) {
      const tmp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = tmp;
    }
  }
  return mat;
};

const extractDiagonals = (mat) => {
  let diagonalElements = [];
  let diagonalInvertedElements = [];
  for (let index = 0; index < mat.length; index++) {
    const element = mat[index][index];
    const elementInverted = mat[mat.length - index - 1][index];
    diagonalElements.push(element);
    diagonalInvertedElements.push(elementInverted);
  }
  return [diagonalElements, diagonalInvertedElements];
};
