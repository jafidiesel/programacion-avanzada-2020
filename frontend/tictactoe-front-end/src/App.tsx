import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Initialize from 'components/initialize/Initialize';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Initialize />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
