import { IBoard } from "interfaces/board";
import React from "react";
import "./Board.scss";

interface BoardProps {
    board: IBoard | null;
    selectCell(index: Number): void;
}

function Board(props: BoardProps) {
    if (!props.board) return <h5>No board created! Make sure to share your hash with player 2!</h5>;

    console.log("board", props.board);
    const { idBoard, ...cellBoard } = props.board;

    // hacer un array nuevo desde el objeto props.board para hacer el tablero (esto no haria falta filtrando bien el map como esta ahora)
    // Chequear que el tablero sea el ultimo (no recuerdo como era esto)
    return (
        <div className="board-component">
            <div className="board" id={`board-${idBoard}`}>
                {Object.values(cellBoard).map((key: string, index) => {
                    return (
                        <button
                            key={`cell-${index}`}
                            value={index}
                            className="box"
                            onClick={() => props.selectCell(index)}
                        >
                            {key ? key : "-"}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default Board;
