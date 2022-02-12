import { IBoard } from "interfaces/board";
import React from "react";
import "./Board.scss";

interface BoardProps {
    board: IBoard | null;
    selectCell(index: Number, playerName: string): void;
    playerInSession: string;
    isPlayerTurn: boolean;
    watcher: boolean;
}

function Board(props: BoardProps) {
    if (!props.board) return <h5>No board created! Make sure to share your hash with player 2!</h5>;

    const { idBoard, ...cellBoard } = props.board;

    return (
        <div className="board-component">
            <div className="board" id={`board-${idBoard}`}>
                {Object.values(cellBoard).map((key: string, index) => {
                    return (
                        <button
                            key={`cell-${index}`}
                            value={index}
                            className="box"
                            onClick={() => props.selectCell(index, props.playerInSession)}
                            disabled={!props.isPlayerTurn || props.watcher}
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
