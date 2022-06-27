import React from 'react';
import { Checkbox } from '@material-tailwind/react';

function Amenities() {
  return (
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
  );
}

export default Amenities;
