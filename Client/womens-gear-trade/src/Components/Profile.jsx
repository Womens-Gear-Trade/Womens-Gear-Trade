import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/profile.css';
import profPic from '../assets/AIProfPic.png';
import { useAuth } from '../Custom-Hooks';

const Profile = () => {
  const user = useAuth();
  console.log('this is user', user);
  return (
    <div className='profile-container'>
      {!user.token ? (
        <div>
          Please Head to <Link to='/signup'>Sign Up </Link> or
          <Link to='/login'>Login</Link> to View Profile!
        </div>
      ) : (
        <div>
          <div className='profileInfo-content'>
            <div>
              <img id='profPic' src={profPic} alt='profPicHur'></img>
            </div>
            <div id='info-container'>
              <h3>{user.user.name}</h3>
              <h5>Username: {user.user.username}</h5>
              <h5>Email: {user.user.email}</h5>
              <h5>Address: {user.user.address}</h5>
              <button>Edit Profile</button>
            </div>
          </div>
          <div className='profileBio'>
            <h5>Bio:</h5>
            <textarea id='textarea' value='Text'>
              Tell the world about your interests!
            </textarea>
          </div>
          <hr id='profileHR'></hr>
          <div className='profileOptions'>
            <nav id='profNav'>
              <ul className='profileLinks'>
                <li id='profLink'>Inbox</li>
                <li id='profLink'>Selling</li>
                <li id='profLink'>Buying</li>
                <li id='profLink'>Saved</li>
              </ul>
              <div id='createButt'>Create Listing</div>
            </nav>
            <div className='optionContainer'>ALL THE OPTIONS</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
