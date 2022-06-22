import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import TravelFormCss from '../../assets/css/travelForm.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TravelForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className='z-50 absolute shadow-2xl shadow-inner bg-white p-8 mt-16 rounded-lg'>
      <h1 className='font-bold text-3xl'>Find places to stay Everywhere</h1>
      <p className='text-gray mt-2 mb-4'>Discover entire homes and private rooms perfect for any trip.</p>
      <div>
        <form>
          <div className=' flex flex-col border-lightgrey border-2 rounded-lg '>
            <label className='absolute font-bold text-sm ml-4 mt-1' for='location'>
              Location
            </label>
            <input
              className='multiselect__input ProseMirror p-4 mt-2 border-gray rounded-full'
              type='text'
              placeholder='Anywhere'
            />
          </div>
          <div className='flex border-lightgrey border-2 rounded-lg mt-3 justify-between'>
            <div className='flex flex-col check-in'>
              <h1 className='font-bold text-sm ml-4 mt-1'>Check In</h1>
              <DatePicker
                className='multiselect__input ProseMirror p-3'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <h1 className='font-bold text-sm ml-4 mt-1'>Check Out</h1>
              <DatePicker
                className='multiselect__input ProseMirror p-3'
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>
          </div>
          <div className='flex border-lightgrey border-2 rounded-lg mt-3 justify-between mb-10'>
            <div className='flex flex-col'>
              <label className='font-bold text-sm ml-4 mt-1' for='cars'>
                Adults
              </label>
              <select className='multiselect__input ProseMirror p-3' id='adults' name='adults'>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
              </select>
            </div>
            <div className='flex flex-col mr-28'>
              <label className='font-bold text-sm ml-4 mt-1' for='children'>
                Children
              </label>
              <select className='multiselect__input ProseMirror p-3' id='children' name='children'>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
              </select>
            </div>
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
