import React from 'react';
import './Board.scss';

function Board() {
    const printing = (event:any) => console.log(event.target.value);

    return (
        <div className="board-component">
            <div className="board">
                {Array.from({ length: 9 }, (value, key) => {
                    return (
                        <button
                            key={key + 1}
                            value={key + 1}
                            className="box"
                            onClick={printing}
                        >
                            {key + 1}
                        </button>
                    )
                })}
            </div>
        </div>
    );
}

export default Board;
