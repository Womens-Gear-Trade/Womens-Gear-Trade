import React from 'react';
import welcome from '../assets/girlJumpWelcome.png';
import whoAreWe from '../assets/whoAreWe.png';
import gearHome from '../assets/gearHome.png';
import snowboardBlog from '../assets/snowboardBlog.png';
import babyHear from '../assets/babyHear.png';
import connectedLadies from '../assets/connectedLadies.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../CSS/home.css';

const Home = () => {
  return (
    <div
      className='home-container'
      id='homeJump'
    >
      <div className='home-content'>
        <div
          className='home-block'
          id='welcome'
        >
          <div id='welcome-group1'>
            <h1>
              Welcome to <span id='women-word'>Women's</span> Gear!
            </h1>
            <h3>
              Helping women and non-binary individuals get the tools they need
              to get into the outdoors!{' '}
            </h3>
            <Link to='/signup'>
              <button className='sign-butt'>Join Us!</button>
            </Link>
          </div>
          <div id='img-block'>
            <img
              id='welcome-blockimg'
              src={welcome}
              alt='picofpeeps'
            ></img>
            <p className='imgref'>
              Photo by{' '}
              <a href='https://unsplash.com/@peterconlan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Peter Conlan
              </a>{' '}
              on{' '}
              <a href='https://unsplash.com/photos/LEgwEaBVGMo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Unsplash
              </a>
            </p>
          </div>
        </div>
        {/* ********************************************************** */}
        <div
          className='home-block'
          id='who-block'
        >
          <div id='img-block'>
            <img
              id='welcome-blockimg'
              alt='picofus'
              src={whoAreWe}
            ></img>
            <p className='imgref'>
              Photo by{' '}
              <a href='https://unsplash.com/de/@fredasem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Freddy Kearney
              </a>{' '}
              on{' '}
              <a href='https://unsplash.com/photos/6FSnZxPU8oE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Unsplash
              </a>
            </p>
          </div>
          <div id='welcome-group2'>
            <h1>
              {' '}
              <span id='whoword'>Who</span> are we?
              <span id='whyword'> Why</span> do we exist?
            </h1>
            <h3>Women rule and we are the coolest! </h3>
            <div id='readp'>
              <Link to='/about'>
                <p>
                  Read more about us here!{' '}
                  <FontAwesomeIcon
                    id='arrow'
                    icon={faArrowRight}
                  />
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* ********************************************************** */}
        <div
          className='home-block'
          id='gear-block'
        >
          <div id='welcome-group3'>
            <h1>
              Find your <span id='gearword'>gear!</span>
            </h1>
            <h3>
              Sell, buy and trade your used gear with other ladies in your area!{' '}
            </h3>
            <p>Check out the gear here</p>
          </div>
          <div id='img-block'>
            <img
              id='welcome-blockimg'
              alt='picofpeeps'
              src={gearHome}
            ></img>
            <p className='imgref'>
              Photo by{' '}
              <a href='https://unsplash.com/@mvds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Mads Schmidt Rasmussen
              </a>{' '}
              on{' '}
              <a href='https://unsplash.com/photos/VTi8DpO4ViQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Unsplash
              </a>
            </p>
          </div>
        </div>
        {/* ********************************************************** */}
        <div
          className='home-block'
          id='blog'
        >
          <div id='img-block'>
            <img
              id='welcome-blockimg'
              alt='picofblog'
              src={snowboardBlog}
            ></img>
            <p className='imgref'>
              Photo by{' '}
              <a href='https://unsplash.com/@hambourine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Hamish Duncan
              </a>{' '}
              on{' '}
              <a href='https://unsplash.com/photos/XO6FSH3H5CE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Unsplash
              </a>
            </p>
          </div>
          <div id='welcome-group4'>
            <h1>
              Check out our <span id='blogword'>blog!</span>
            </h1>
            <h3>
              Hear from women across the country of all activity levels on their
              outdoor experiences!{' '}
            </h3>
            <button className='blog-butt'>Visit The Blog!</button>
          </div>
        </div>
        {/* ********************************************************** */}
        <div
          className='home-block'
          id='connect'
        >
          <div id='welcome-group5'>
            <h1>
              Get <span id='connectedword'>connected!</span>
            </h1>
            <h3>
              Chat with other ladies and meet up with people in your area!
            </h3>
            <p>Chat here</p>
          </div>
          <div id='img-block'>
            <img
              id='welcome-blockimg'
              alt='anotherimage'
              src={connectedLadies}
            ></img>
            <p className='imgref'>
              Photo by{' '}
              <a href='https://unsplash.com/de/@anggakrnwan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Angga Kurniawan
              </a>{' '}
              on{' '}
              <a href='https://unsplash.com/photos/4VkfX4uOuHA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Unsplash
              </a>
            </p>
          </div>
        </div>
        {/* ********************************************************** */}
        <div
          className='home-block-6'
          id='hear'
        >
          <div id='img-block'>
            <img
              id='welcome-blockimg-baby'
              alt='picofsomin'
              src={babyHear}
            ></img>
            <p className='imgref'>
              Photo by{' '}
              <a href='https://unsplash.com/@we_are_rising?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                lucas Favre
              </a>{' '}
              on{' '}
              <a href='https://unsplash.com/photos/Iq-nPK6xOzc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Unsplash
              </a>
            </p>
          </div>
          <div id='welcome-group6'>
            <h1>
              Hear from <span id='usword'>us!</span>
            </h1>

            <div>
              <p>blog emailed</p>
              <p>something else </p>
              <p>who knows what this says</p>
            </div>

            <button className='hear-butt'>Select!</button>
          </div>
        </div>
        {/* ********************************************************** */}
      </div>
    </div>
  );
};

export default Home;
