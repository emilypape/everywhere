import React from 'react';
import TravelForm from '../TravelForm';
// import Popular from '../Popular';
import Bnb from '../../assets/images/airbnb-homepage-image.webp';

function Homepage() {
  return (
    <div>
      <div className='flex justify-evenly '>
        <div>
          <TravelForm />
        </div>
        <div className='flex'>
          <div className='flex'>
            <img width={900} height={600} className='rounded-lg h-full ' src={Bnb} alt='bnb'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
