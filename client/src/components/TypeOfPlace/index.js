import React, { useState } from 'react';
import { Checkbox } from '@material-tailwind/react';
import '../../assets/css/typeOfPlace.css';
import RoomsAndBeds from '../RoomsAndBeds';
import Amenities from '../Amenities';

function TypeOfPlace({
  isSelected,
  setIsSelected,
  isAlsoSelected,
  setIsAlsoSelected,
  typeOfPlace,
  setTypeOfPlace,
  amenities,
  setAmenities,
}) {
  return (
    <div className='mt-10'>
      <h1 className='text-3xl font-semibold mb-3'>Type of Place</h1>
      <div className='flex border-lightgrey border-b-2'>
        <div onClick={() => setTypeOfPlace('Entire Place')}>
          <Checkbox className='p-3' color='pink' />
        </div>
        <div className='py-2'>
          <h1 className=''>Entire Place</h1>
          <p className='text-sm text-gray'>A place all to yourself</p>
        </div>
        <div className='ml-10' onClick={() => setTypeOfPlace('Private Room')}>
          <Checkbox className='p-3' color='pink' />
        </div>
        <div className='py-2 mb-5'>
          <h1 className=''>Private Room</h1>
          <p className='text-sm text-gray w-80'>Your own room in a home or a hotel, plus some shared common spaces </p>
        </div>
      </div>
      {/* Rooms and Beds */}
      <RoomsAndBeds
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        isAlsoSelected={isAlsoSelected}
        setIsAlsoSelected={setIsAlsoSelected}
      />
      {/* amenities */}
      <Amenities amenities={amenities} setAmenities={setAmenities} />
    </div>
  );
}

export default TypeOfPlace;
