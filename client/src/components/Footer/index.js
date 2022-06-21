import React from 'react';

function Footer() {
  return (
    <div className='fixed inset-x-0 bottom-0'>
      <hr className='border-slate-400 sm:mx-auto' />
      <span className='block text-sm text-gray-500 sm:text-left dark:text-gray-400 p-4'>
        © 2022 <a>everwhere™</a>. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
