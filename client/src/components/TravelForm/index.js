import React from 'react';
import { Icon } from '@iconify/react';
import TravelFormCss from '../../assets/css/travelForm.css';

function TravelForm() {
  return (
    <div className='z-50 absolute shadow-2xl shadow-inner bg-white p-5 mt-3 rounded-lg'>
      <h1 className='font-bold text-3xl'>Find places to stay Everywhere</h1>
      <p className='text-gray mt-2'>Discover entire homes and private rooms perfect for any trip.</p>
      <div>
        <form>
          <div className='relative'>
            <label for='location'>Location</label>
            <input className='border-gray' type='text' placeholder='Anywhere' />
          </div>
        </form>
      </div>
      <button className='searchBtn flex rounded-lg py-4 px-48'>
        <Icon icon='bi:search' color='white' width='26' height='26' />
        <h1 className='text-white p-1'>Search</h1>
      </button>
    </div>
  );
}

export default TravelForm;
