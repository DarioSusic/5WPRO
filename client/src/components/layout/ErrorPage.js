import React from 'react';

import { NavLink } from 'react-router-dom';

//TODO edit 404
const ErrorPage = () => {
  return (
    <div id='notfound'>
      <div className='notfound'>
        <div className='notfound-404'>
          <h1>Oops!</h1>
          <h2>404 - The Page cannot be found</h2>
        </div>
        <a>
          <NavLink to='/'>Go TO Homepage</NavLink>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
