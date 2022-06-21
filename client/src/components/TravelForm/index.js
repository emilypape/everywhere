import React from 'react';
import { Icon } from '@iconify/react';
import TravelFormCss from '../../assets/css/travelForm.css';

function TravelForm() {
  return (
    <div className='z-50 absolute shadow-2xl shadow-inner bg-white p-5 mt-3 rounded-lg'>
      <h1 className='font-bold text-3xl'>Find places to stay Everywhere</h1>
      <p className='text-gray mt-2 mb-4'>Discover entire homes and private rooms perfect for any trip.</p>
      <div>
        <form>
          <div className=' flex flex-col border-lightgrey border-2 rounded-lg'>
            <label className='absolute font-bold text-sm ml-4 mt-1' for='location'>
              Location
            </label>
            <input
              className='multiselect__input ProseMirror p-4 mt-2 border-gray rounded-full'
              type='text'
              placeholder='Anywhere'
            />
          </div>
        </form>
      </div>
      <button className='searchBtn flex rounded-lg py-4 px-48'>
        <Icon className='mt-2' icon='bi:search' color='white' width='15' height='15' />
        <h1 className='text-white p-1 font-bold'>Search</h1>
      </button>
    </div>
  );
}

export default TravelForm;
