import React, { Fragment } from 'react';
import Board from 'components/board/Board';
import Player from 'components/player/Player';


function Campaign() {

    return (
        <Fragment>
            
            <Player />
            <Board/>
            <Player />
        </Fragment>
    );
}

export default Campaign;
