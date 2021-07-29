import React from 'react';
import './Board.scss';

interface BoardProps {
    selectCell(e: any): void;
    board?: any;
}

function Board(props: BoardProps) {
    console.log("board", props.board);
    let idBoard: number;
    //idBoard = props.board.length ? props.board[0].idBoard : 0;
    // hacer un array nuevo desde el objeto props.board para hacer el tablero
    // quitar o guardar el idBoard
    // Chequear que el tablero sea el ultimo (no recuerdo como era esto)
    return (
        <div className="board-component">
            <div className="board">
                {
                    props.board[0] ?
                        Object.keys(props.board[0]).map((key, index) => {
                            return (
                                <button
                                    key={key + 1}
                                    value={index + 1}
                                    className="box"
                                    onClick={props.selectCell}
                                >
                                    {index + 1}
                                </button>
                            )
                        })
                    : null
                }
                {/* {Array.from({ length: 9 }, (value, key) => {
                    return (
                        <button
                            key={key + 1}
                            value={key + 1}
                            className="box"
                            onClick={props.selectCell}
                        >
                            {key + 1}
                        </button>
                    )
                })} */}
            </div>
        </div>
    );
}

export default Board;
