const setBoard = async(obj) =>{

    let board={
        idBoard: 0,
        cell1: "",
        cell2: "",
        cell3: "",
        cell4: "",
        cell5: "",
        cell6: "",
        cell7: "",
        cell8: "",
        cell9: "",
    }
    
    board.idBoard  = obj.idBoard ? obj.idBoard : board.idBoard;
    board.cell1  = obj.cell1 ? obj.cell1 : board.cell1;
    board.cell2  = obj.cell2 ? obj.cell2 : board.cell2;
    board.cell3  = obj.cell3 ? obj.cell3 : board.cell3;
    board.cell4  = obj.cell4 ? obj.cell4 : board.cell4;
    board.cell5  = obj.cell5 ? obj.cell5 : board.cell5;
    board.cell6 = obj.cell6 ? obj.cell6 : board.cell6;
    board.cell7  = obj.cell7 ? obj.cell7 : board.cell7;
    board.cell8 = obj.cell8 ? obj.cell8 : board.cell8;
    board.cell9 = obj.cell9 ? obj.cell9 : board.cell9;
    
    return board;
}

const gtBoard = (obj) => {
    return setBoard(obj);
}


module.exports = {
    setBoard,
    gtBoard
}