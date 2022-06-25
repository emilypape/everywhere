import React, { useState } from 'react';
import { Checkbox } from '@material-tailwind/react';
import '../../assets/css/typeOfPlace.css';

function TypeOfPlace() {
  const [isSelected, setIsSelected] = useState('Any');
  const [isAlsoSelected, setIsAlsoSelected] = useState('Any');

  function selectedOnClick(e) {
    setIsSelected(e.target.innerText);
  }

  function alsoSelectedOnClick(e) {
    setIsAlsoSelected(e.target.innerText);
  }
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
      <div className='border-lightgrey border-b-2'>
        <h1 className='text-3xl font-semibold mt-5'>Rooms and Beds</h1>
        <div>
          <div className='flex flex-col mb-3'>
            <h1 className='mb-5 text-lg mt-3'>Bedrooms</h1>
            <div>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isSelected === 'Any' ? 'isSelected' : ''
                }`}
                onClick={(e) => selectedOnClick(e)}>
                Any
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isSelected === '1' ? 'isSelected' : ''
                }`}
                onClick={(e) => selectedOnClick(e)}>
                1
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isSelected === '2' ? 'isSelected' : ''
                }`}
                onClick={(e) => selectedOnClick(e)}>
                2
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isSelected === '3' ? 'isSelected' : ''
                }`}
                onClick={(e) => selectedOnClick(e)}>
                3
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isSelected === '4' ? 'isSelected' : ''
                }`}
                onClick={(e) => selectedOnClick(e)}>
                4
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isSelected === '5' ? 'isSelected' : ''
                }`}
                onClick={(e) => selectedOnClick(e)}>
                5
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isSelected === '6' ? 'isSelected' : ''
                }`}
                onClick={(e) => selectedOnClick(e)}>
                6
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isSelected === '7' ? 'isSelected' : ''
                }`}
                onClick={(e) => selectedOnClick(e)}>
                7
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isSelected === '8+' ? 'isSelected' : ''
                }`}
                onClick={(e) => selectedOnClick(e)}>
                8+
              </button>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='mb-5 text-lg mt-3'>Beds</h1>
            <div>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isAlsoSelected === 'Any' ? 'isSelected' : ''
                }`}
                onClick={(e) => alsoSelectedOnClick(e)}>
                Any
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isAlsoSelected === '1' ? 'isSelected' : ''
                }`}
                onClick={(e) => alsoSelectedOnClick(e)}>
                1
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isAlsoSelected === '2' ? 'isSelected' : ''
                }`}
                onClick={(e) => alsoSelectedOnClick(e)}>
                2
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isAlsoSelected === '3' ? 'isSelected' : ''
                }`}
                onClick={(e) => alsoSelectedOnClick(e)}>
                3
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isAlsoSelected === '4' ? 'isSelected' : ''
                }`}
                onClick={(e) => alsoSelectedOnClick(e)}>
                4
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isAlsoSelected === '5' ? 'isSelected' : ''
                }`}
                onClick={(e) => alsoSelectedOnClick(e)}>
                5
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isAlsoSelected === '6' ? 'isSelected' : ''
                }`}
                onClick={(e) => alsoSelectedOnClick(e)}>
                6
              </button>
              <button
                className={`border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isAlsoSelected === '7' ? 'isSelected' : ''
                }`}
                onClick={(e) => alsoSelectedOnClick(e)}>
                7
              </button>
              <button
                className={`mb-10 border-lightgrey border-2 rounded-full px-5 py-1 mr-2 hover:border-black ${
                  isAlsoSelected === '8+' ? 'isSelected' : ''
                }`}
                onClick={(e) => alsoSelectedOnClick(e)}>
                8+
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* amenities */}
      <div>
        <h1 className='text-3xl font-semibold  mt-5 mb-3'>Amenities</h1>
        <div className='flex flex-wrap'>
          <div className='flex flex-col'>
            <div className='flex'>
              <div>
                <Checkbox className='p-3' color='pink' />
              </div>
              <div className='py-2'>
                <h1 className=''>Wifi</h1>
              </div>
            </div>
            <div className='flex'>
              <div className=''>
                <Checkbox className='p-3' color='pink' />
              </div>
              <div className='py-2 '>
                <h1 className=''>TV</h1>
              </div>
            </div>
            <div className='flex'>
              <div>
                <Checkbox className='p-3 ' color='pink' />
              </div>
              <div className='py-2'>
                <h1 className=''>Private Entrance</h1>
              </div>
            </div>
            <div className='flex'>
              <div className=''>
                <Checkbox className='p-3' color='pink' />
              </div>
              <div className='py-2 '>
                <h1 className=''>Smoke Alarm</h1>
              </div>
            </div>
            <div className='flex'>
              <div>
                <Checkbox className='p-3' color='pink' />
              </div>
              <div className='py-2'>
                <h1 className=''>Air conditioning</h1>
              </div>
            </div>
          </div>
          {/* column two */}
          <div className='flex flex-col ml-36'>
            <div className='flex'>
              <div className=''>
                <Checkbox className='p-3' color='pink' />
              </div>
              <div className='py-2 '>
                <h1 className=''>Hot water</h1>
              </div>
            </div>
            <div className='flex'>
              <div>
                <Checkbox className='p-3' color='pink' />
              </div>
              <div className='py-2'>
                <h1 className=''>Backyard</h1>
              </div>
            </div>
            <div className='flex'>
              <div className=''>
                <Checkbox className='p-3' color='pink' />
              </div>
              <div className='py-2 '>
                <h1 className=''>Parking on Premesis</h1>
              </div>
            </div>
            <div className='flex'>
              <div>
                <Checkbox className='p-3' color='pink' />
              </div>
              <div className='py-2'>
                <h1 className=''>Pets allowed</h1>
              </div>
            </div>
            <div className='flex'>
              <div className=''>
                <Checkbox className='p-3' color='pink' />
              </div>
              <div className='py-2 '>
                <h1 className=''>Self Check-in</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypeOfPlace;
