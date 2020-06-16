import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from 'components/navbar/NavBar';
import Router from 'components/router/Router';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
