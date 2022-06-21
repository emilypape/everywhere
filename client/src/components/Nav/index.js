import React from 'react';
import { Icon } from '@iconify/react';

function Nav() {
  return (
    <div>
      <div className='flex mt-4 justify-between'>
        <div className='flex'>
          <Icon className='p-1 text-5xl ml-3' icon='wpf:worldwide-location' color='#ff385c' />
          <h1 className='text-coral font-bold p-1 text-2xl'>everywhere</h1>
        </div>
        <div className='flex mr-3 '>
          <h1 className='text-coral font-medium p-3'>Signup</h1>
          <h1 className='text-coral font-medium p-3'>Login</h1>
        </div>
      </div>
    </div>
  );
}

export default Nav;
