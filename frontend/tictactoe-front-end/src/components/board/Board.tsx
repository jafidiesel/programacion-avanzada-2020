import { IBoard } from "interfaces/board";
import React from "react";
import "./Board.scss";

interface BoardProps {
    board: IBoard | null;
    selectCell(e: any): void;
}

function Board(props: BoardProps) {
    if (!props.board) return <p>No board received!</p>;

    console.log("board", props.board);
    const { idBoard, ...cellBoard } = props.board;

    // hacer un array nuevo desde el objeto props.board para hacer el tablero (esto no haria falta filtrando bien el map como esta ahora)
    // quitar o guardar el idBoard
    // Chequear que el tablero sea el ultimo (no recuerdo como era esto)
    return (
        <div className="board-component">
            <div className="board">
                {Object.keys(cellBoard).map((key: string, index) => {
                    return (
                        <button
                            key={key}
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
