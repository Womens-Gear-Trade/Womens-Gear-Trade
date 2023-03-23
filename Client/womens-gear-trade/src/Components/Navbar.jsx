import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/nav.css';

const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink
            to='/'
            className={'navlink'}
          >
            Home
          </NavLink>
          <NavLink
            to='/login'
            className={'navlink'}
          >
            Login
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
