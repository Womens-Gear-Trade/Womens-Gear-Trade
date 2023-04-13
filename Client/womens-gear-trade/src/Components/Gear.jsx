import React, { useState, useEffect } from 'react';
import '../CSS/gear.css';
import { fetchGear } from '../api/gear';

const Gear = () => {
  const [allGear, setAllGear] = useState([]);

  useEffect(() => {
    const getAllGear = async () => {
      const allTheGear = await fetchGear();
      setAllGear(allTheGear);
      // console.log('this is the state of allTheGear', allTheGear);
    };
    getAllGear();
  }, []);
  // console.log('this is the allGear state', allGear);
  return (
    <div className='gear-container'>
      <div className='gear-content'>
        {allGear &&
          allGear.map((gear) => {
            return (
              <div
                key={gear.id}
                className='singleGearPost'
              >
                <h4>{gear.title}</h4>
                <div>*img*</div>
                <p>{gear.description}</p>
                <p>{gear.condition}</p>
                <p>{gear.location}</p>
                <p>{gear.size}</p>
                <p>{gear.price}</p>
                <p>{gear.category}</p>
                <p>{gear.willdeliver}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gear;
