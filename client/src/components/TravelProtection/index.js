import React from 'react';
import { Icon } from '@iconify/react';
import TravelProtectionCss from '../../assets/css/travelProtection.css';

function TravelProtection() {
  return (
    <div className='mt-10'>
      <div className='flex justify indent-32 text-3xl font-bold'>
        <h1>Travel with peace of mind when you book on Everywhere</h1>
      </div>
      <div className=' flex justify-center'>
        <div className='border-b-2 border-lightgrey text-lightgrey fashion-line'>.</div>
      </div>
      <div className='flex flex-wrap justify-evenly p-4 mb-6'>
        <div className='flex flex-col '>
          <Icon className='text-2xl' icon='ant-design:security-scan-twotone' color='#ff385c' width='40' height='40' />
          <h1 className='font-bold text-xl'>Protection with AirCover</h1>
          <p className='w-64'>The most comprehensive protection in travel. Always included, always free.</p>
        </div>
        <div className='flex flex-col'>
          <Icon className='text-2xl' icon='icon-park-twotone:calendar' color='#ff385c' width='40' height='40' />
          <h1 className='font-bold text-xl'>Flexible cancellation options</h1>
          <p className='w-64'>Cancellation options make it easy to re-book if your plans change.</p>
        </div>
        <div className='flex flex-col'>
          <Icon className='text-2xl' icon='ic:twotone-contact-support' color='#ff385c' width='40' height='40' />
          <h1 className='font-bold text-xl'>24/7 customer support</h1>
          <p className='w-64'>Talk to our support team from anywhere in the world, any hour of the day.</p>
        </div>
      </div>
    </div>
  );
}

export default TravelProtection;
