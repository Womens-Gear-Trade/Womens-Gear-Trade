import React, { useState } from 'react';
import { makeGearPost } from '../api/gear';
import { useAuth } from '../Custom-Hooks';

const CreateListing = () => {
  const user = useAuth();
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [createdAt, setCreatedAt] = useState(null);
  const [updatedAt, setUpdatedAt] = useState(null);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      let newGearPost = await makeGearPost(
        user.token,
        title,
        location,
        description,
        price,
        condition,
        category,
        size,
        createdAt,
        updatedAt
      );
      console.log('this is our new gear post!', newGearPost);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className='listingHeader'>Create a new listing!</h1>
      <form>
        <div className='login-form'>
          <input
            type='text'
            value={title}
            name='title'
            placeholder='Title'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
          <input
            value={location}
            name='location'
            placeholder='Location'
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <input
            value={description}
            type='text'
            name='description'
            placeholder='Description'
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            value={price}
            type='text'
            name='price'
            placeholder='Price'
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <input
            value={condition}
            type='text'
            name='condition'
            placeholder='Condition'
            onChange={(e) => {
              setCondition(e.target.value);
            }}
          />
          <input
            value={category}
            type='text'
            name='category'
            placeholder='Category'
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <input
            value={size}
            type='text'
            name='size'
            placeholder='Size'
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
          <div className='loginButt-container'>
            <button
              className='login-button'
              onClick={submitHandler}
            >
              Create Listing
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateListing;
