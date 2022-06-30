import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import PriceSlider from '../PriceSlider';
import TypeOfPlace from '../TypeOfPlace';

function FilterSearch({ listings, setListings }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='flex justify-end'>
        <button
          className='text-bold flex text-sm px-3 py-3 rounded-lg mr-10 mb-1 border-lightgrey border-2 rounded-lg'
          type='button'
          onClick={() => setShowModal(true)}>
          <Icon width='23' height='23' icon='system-uicons:filtering' />
          &nbsp;
          <div className='p-1'>Filters</div>
        </button>
      </div>
      {showModal ? <FilterModal setShowModal={setShowModal} listings={listings} setListings={setListings} /> : null}
    </>
  );
}

export default FilterSearch;

function FilterModal({ setShowModal, listings, setListings }) {
  const [isSelected, setIsSelected] = useState('0');
  const [isAlsoSelected, setIsAlsoSelected] = useState('0');
  const [range, setRange] = useState([0, 350]);
  const [typeOfPlace, setTypeOfPlace] = useState('');
  const [amenities, setAmenities] = useState([]);

  function showStays() {
    setListings(
      listings.filter(function (listing) {
        return (
          listing.rooms >= parseInt(isSelected) &&
          listing.price <= range[1] &&
          compareArrays(listing.amenities, amenities)
        );
      }),
    );
    setShowModal(false);
  }
  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl '>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <div className='text-xl'>Filters</div>
              <button
                className='p-1 ml-auto  border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none '
                onClick={() => setShowModal(false)}>
                <span classname='text-black'>x</span>
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto overflow-scroll overflow-auto max-h-96'>
              <PriceSlider range={range} setRange={setRange} />
              <TypeOfPlace
                isSelected={isSelected}
                setIsSelected={setIsSelected}
                isAlsoSelected={isAlsoSelected}
                setIsAlsoSelected={setIsAlsoSelected}
                typeOfPlace={typeOfPlace}
                setTypeOfPlace={setTypeOfPlace}
                amenities={amenities}
                setAmenities={setAmenities}
              />
            </div>
            {/*footer*/}
            <div className='flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b'>
              <button
                className='underline text-black-500 background-transparent font-semibold  px-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => setShowModal(false)}>
                Clear All
              </button>
              <button
                className='bg-offBlack bg-emerald-500 text-white active:bg-emerald-600 font-bold text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={showStays}>
                Show Stays
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
}

function compareArrays(listingAmenities, selectedAmenities) {
  let amenityMatch = 0;
  for (let i = 0; i < selectedAmenities.length; i++) {
    for (let j = 0; j < listingAmenities.length; j++) {
      if (selectedAmenities[i] === listingAmenities[j]) {
        amenityMatch += 1;
        continue;
      }
    }
  }
  return amenityMatch === selectedAmenities.length;
}
