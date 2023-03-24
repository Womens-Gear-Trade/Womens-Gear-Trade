import React from 'react';
import welcome from '../assets/girlJumpWelcome.png';
import whoAreWe from '../assets/whoAreWe.png';
import gearClimbing from '../assets/gearClimbing.png';
import snowboardBlog from '../assets/snowboardBlog.png';
import babyHear from '../assets/babyHear.png';
import connectedLadies from '../assets/connectedLadies.png';

import '../CSS/home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <div className='home-block' id='welcome'>
          <div id='welcome-group1'>
            <h1>Welcome to Women's Gear!!</h1>
            <h3>
              Helping women and non-binary individuals get the tools they need
              to get into the outdoors!{' '}
            </h3>
            <button>Join Us!</button>
          </div>
          <div id='img-block'>
            <img id='welcome-blockimg' src={welcome} alt='picofpeeps'></img>
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
        <div className='home-block' id='who-block'>
          <div id='img-block'>
            <img id='welcome-blockimg' alt='picofus' src={whoAreWe}></img>
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
            <h1>Who are we and why do we exist?</h1>
            <h3>Women rule and we are the coolest! </h3>
            <p>about link</p>
          </div>
        </div>
        <div className='home-block' id='gear-block'>
          <div id='welcome-group3'>
            <h1>Find your gear!</h1>
            <h3>
              Sell, buy and trade your used gear with other ladies in your area!{' '}
            </h3>
            <p>Check out the gear here</p>
          </div>
          <div id='img-block'>
            <img
              id='welcome-blockimg-gear'
              alt='picofpeeps'
              src={gearClimbing}
            ></img>
            <p className='imgref'>
              Photo by{' '}
              <a href='https://unsplash.com/@speckfechta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                x )
              </a>{' '}
              on{' '}
              <a href='https://unsplash.com/photos/N4QTBfNQ8Nk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                Unsplash
              </a>
            </p>
          </div>
        </div>
        <div className='home-block' id='blog'>
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
            <h1>Check out our blog!</h1>
            <h3>
              Hear from women across the country of all activity levels on their
              outdoor experiences!{' '}
            </h3>
            <button>Blog</button>
          </div>
        </div>
        <div className='home-block' id='connect'>
          <div id='welcome-group5'>
            <h1>Get connected!</h1>
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
        <div className='home-block' id='hear'>
          <div id='img-block'>
            <img id='welcome-blockimg' alt='picofsomin' src={babyHear}></img>
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
            <h1>Hear from us!</h1>

            <div>
              <p>blog emailed</p>
              <p>something else </p>
              <p>who knows what this says</p>
            </div>

            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
