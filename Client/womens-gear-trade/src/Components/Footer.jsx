import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAppStore,
  faFacebook,
  faTiktok,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import '../CSS/footer.css';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer-content'>
          <div id='logo-container'>
            <div id='logo'>Logo here</div>
            <button id='logo-button'>Sign Up</button>
          </div>
          <div id='socials'>
            <h3>Follow Us!</h3>
            <ul className='sociallist'>
              <li>
                <FontAwesomeIcon
                  className='icon-social'
                  icon={faInstagram}
                  size='2x'
                  color='black'
                />
              </li>
              <li>
                {' '}
                <FontAwesomeIcon
                  className='icon-social'
                  icon={faFacebook}
                  color='black'
                  size='2x'
                />
              </li>
              <li>
                {' '}
                <FontAwesomeIcon
                  className='icon-social'
                  icon={faTiktok}
                  color='black'
                  size='2x'
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className='icon-social'
                  icon={faLinkedinIn}
                  color='black'
                  size='2x'
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className='icon-social'
                  icon={faAppStore}
                  color='black'
                  size='2x'
                />
              </li>
            </ul>
          </div>
          <div id='mini-navlinks'>
            <ul className='list'>
              <a id='miniLink' href='#homeJump'>
                <li>Home</li>
              </a>
              <Link id='miniLink' to='/about'>
                <li>About</li>
              </Link>
              <Link id='miniLink' to='/gear'>
                <li>Gear</li>
              </Link>
              <Link id='miniLink' to='/blog'>
                <li>Blog</li>
              </Link>
              <Link id='miniLink' to='/social'>
                <li>Social</li>
              </Link>
              <Link id='miniLink' to='/profile'>
                <li>Profile</li>
              </Link>
              <Link id='miniLink' to='/login'>
                <li>Login</li>
              </Link>
            </ul>
          </div>
          <div id='contactUs'>
            <h3>Contact Us</h3>
            <div>Contact Form Here</div>
          </div>
        </div>
        <div className='copyright'>Copyright Women's Gear Trade 2023</div>
      </footer>
    </div>
  );
};

export default Footer;
