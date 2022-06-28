import React from 'react';
import TravelForm from '../TravelForm';
import { Icon } from '@iconify/react';
import Popular from '../Popular';
import TravelProtection from '../TravelProtection';
import Bnb from '../../assets/images/airbnb-homepage-image.webp';
import sofaPic from '../../assets/images/sofa-photo.jpg';
import '../../assets/css/homepage.css';

function Homepage({ data }) {
  return (
    <div>
      <div className='flex justify-evenly '>
        <div>
          <TravelForm data={data} />
        </div>
        <div className='flex'>
          <div className='flex'>
            <img width={1100} height={600} className='house-img rounded-lg h-full' src={Bnb} alt='bnb'></img>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-12'>
        <div>
          <h1 className='mt-48 ml-16 bg-gradient-to-r from-black-500 to-transparent absolute text-white text-4xl font-semibold'>
            Let us host you
          </h1>
          <div className='flex'>
            <p className='absolute text-white w-64 mt-64 ml-24'>
              Choose from one of thousands of stays for your next adventure.
            </p>
            {/* <Icon className='absolute' icon='ant-design:question-circle-filled' color='white' width='26' height='26' /> */}
          </div>
        </div>
        <img className='host-you-img rounded-2xl' src={sofaPic} />
      </div>
      <div>
        <Popular data={data} />
      </div>
      <div>
        <TravelProtection />
      </div>
    </div>
  );
}

export default Homepage;
