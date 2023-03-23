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
            to='/meetups'
            className={'navlink'}
          >
            Meet Ups
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
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
