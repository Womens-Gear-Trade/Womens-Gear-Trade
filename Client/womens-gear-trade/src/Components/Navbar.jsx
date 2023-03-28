import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/nav.css';

const Navbar = () => {
  return (
    <div id='is-sticky'>
      <header>
        <nav className='navbar-content'>
          <div className='logo'>Women's Gear Trade</div>
          <div className='nav-links'>
            <NavLink
              to='/'
              className={'navlink'}
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              className={'navlink'}
            >
              About
            </NavLink>
            <NavLink
              to='/gear'
              className={'navlink'}
            >
              Gear
            </NavLink>
            <NavLink
              to='/blog'
              className={'navlink'}
            >
              Blog
            </NavLink>
            <NavLink
              to='/social'
              className={'navlink'}
            >
              Social
            </NavLink>
            <NavLink
              to='/profile'
              className={'navlink'}
            >
              Profile
            </NavLink>
            <NavLink
              to='/login'
              className={'navlink'}
            >
              Login
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
