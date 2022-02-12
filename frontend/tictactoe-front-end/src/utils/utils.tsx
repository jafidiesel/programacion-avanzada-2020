import { PlayersData } from "interfaces/player";


export const getActualPlayer = (playersData: PlayersData, nextPlayer: string) => {
    if (!playersData.namePlayer2) return playersData.namePlayer1;
    return nextPlayer === playersData.namePlayer1 ? playersData.namePlayer1 : playersData.namePlayer2;
}