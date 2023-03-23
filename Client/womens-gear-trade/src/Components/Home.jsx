import React from 'react';
import '../CSS/home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <div className='home-block' id='welcome'>
          <div id='welcome-group1'>
            <h1>Welcome to Women's Gear!</h1>
            <h3>
              Helping women and non-binary individuals get the tools they need
              to get into the outdoors!{' '}
            </h3>
            <button>Join Us!</button>
          </div>
          <img id='welcome-blockimg' alt='picofpeeps'></img>
        </div>
        <div className='home-block' id='who-block'>
          <img alt='picofus'></img>
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
          <img id='welcome-blockimg' alt='picofpeeps'></img>
        </div>
        <div className='home-block' id='blog'>
          <img alt='picofblog'></img>
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
          <img id='welcome-blockimg' alt='anotherimage'></img>
        </div>
        <div className='home-block' id='hear'>
          <img alt='picofsomin'></img>
          <div id='welcome-group6'>
            <h1>Hear from us!</h1>
            <ul>
              <li>blog emailed</li>
              <li>something else </li>
              <li>who knows what this says</li>
            </ul>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
