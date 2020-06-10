import React, { Fragment } from 'react';
import './App.css';
import Welcome from 'components/welcome/Welcome';
import Board from 'components/board/Board';

function App() {
  return (
    <Fragment>
      <Welcome/>
      <Board />
    </Fragment>
  );
}

export default App;
