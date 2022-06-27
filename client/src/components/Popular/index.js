import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function Popular({ data }) {
  const popular = data
    ?.filter(function (popular) {
      return popular.locationRating >= '5' && popular.reviews.length;
    })
    .splice(0, 3);

  return (
    <div>
      <div className='ml-28 mt-10'>
        <div className='text-3xl font-bold'>What Guests are Saying about homes in the United States</div>
        <div className='font-semibold text-gray mt-3'>
          Over 79,000,000 guest reviews with an average of 4.8 out of 5 stars
        </div>
      </div>
      <div className='flex flex-wrap justify-center mt-5'>
        {popular.map((popular) => {
          return (
            <div className='flex'>
              <div className='flex flex-col flex-wrap ml-10 '>
                <div className='flex-col'>
                  <Link to='/SingleBooking' state={popular.id}>
                    <img className='popular-width rounded-lg' src={popular?.images[0]} />
                  </Link>
                  <div className='flex mt-3 mb-1'>
                    {Array(parseInt(popular.locationRating))
                      .fill('star')
                      .map((el) => {
                        return <Icon icon='bxs:star' color='#fa385c' width='20' height='20' />;
                      })}
                  </div>
                  <div className='text-black w-96'>{popular.reviews[0].reviewBody.slice(250)}..</div>
                </div>
                <div className='flex mt-2'>
                  <img className='inline object-cover w-14 h-14 mr-2 rounded-full' src={popular.hostInfo.hostImage} />
                  <div className='mt-1'>
                    <div className='font-bold'>{popular.hostInfo.name}</div>
                    <div className='text-gray'>United States</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
