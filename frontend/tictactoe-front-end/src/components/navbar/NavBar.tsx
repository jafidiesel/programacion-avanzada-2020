import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Fragment>
        <Link to="/"> home</Link>
        <Link to="/campaign"> campaign</Link>
        <Link to="/welcome"> welcome page</Link>
    </Fragment>
  );
}

export default NavBar;