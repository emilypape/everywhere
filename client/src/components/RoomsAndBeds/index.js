import React, { useState } from 'react';
import '../../assets/css/typeOfPlace.css';

function RoomsAndBeds() {
  const [isSelected, setIsSelected] = useState('Any');
  const [isAlsoSelected, setIsAlsoSelected] = useState('Any');

  function selectedOnClick(e) {
    setIsSelected(e.target.innerText);
  }

  function alsoSelectedOnClick(e) {
    setIsAlsoSelected(e.target.innerText);
  }
  return (
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
  );
}

export default RoomsAndBeds;
