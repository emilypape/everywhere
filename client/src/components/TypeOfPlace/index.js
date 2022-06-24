import React from 'react';
import { Checkbox } from '@material-tailwind/react';

function TypeOfPlace() {
  return (
    <div className='mt-10'>
      <h1 className='text-3xl font-semibold'>Type of Place</h1>
      <div className='flex border-lightgrey border-b-2'>
        <div>
          <Checkbox className='p-3' color='pink' />
        </div>
        <div className='py-2'>
          <h1 className=''>Entire Place</h1>
          <p className='text-sm text-gray'>A place all to yourself</p>
        </div>
        <div className='ml-10'>
          <Checkbox className='p-3' color='pink' />
        </div>
        <div className='py-2 mb-5'>
          <h1 className=''>Private Room</h1>
          <p className='text-sm text-gray w-80'>Your own room in a home or a hotel, plus some shared common spaces </p>
        </div>
      </div>
      {/* Rooms and Beds */}
      <div>
        <h1 className='text-3xl font-semibold mt-5'>Rooms and Beds</h1>
        <div>
          <div className='flex flex-col mb-3'>
            <h1 className='mb-5 text-lg mt-3'>Bedrooms</h1>
            <div>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>Any</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>1</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>2</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>3</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>4</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>5</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>6</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>7</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>8+</button>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='mb-5 text-lg mt-3'>Beds</h1>
            <div>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>Any</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>1</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>2</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>3</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>4</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>5</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>6</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>7</button>
              <button className='border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black'>8+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypeOfPlace;
