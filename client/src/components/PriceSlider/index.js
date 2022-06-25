import React, { useState } from 'react';
// import Slider from 'rc-slider';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function PriceSlider() {
  const [range, setRange] = useState([0, 350]);

  return (
    <div>
      <div className='text-3xl font-semibold'>Price Range</div>
      <p className='text-gray mr-36 mb-10'>The average nightly price is $350</p>
      <div className='sliderArea'>
        <Slider
          range
          startPoint
          allowCross={false}
          ariaLabelForHandle
          marks={{ 0: '$0', 2000: '$2,000' }}
          count={1}
          min={0}
          max={2000}
          value={range}
          ariaLabelForHandle={range}
          onChange={setRange}
          tipFormatter={(value) => `$ ${value}`}
          tipProps={{
            placement: 'top',
            visible: true,
          }}
        />
      </div>
      <div className='flex justify-center mt-5 '>
        <div className='border-lightgrey border-2 rounded-lg p-1'>${range[0]}</div>
        <div className='p-1 ml-5 mr-5'>-</div>
        <div className='border-lightgrey border-2 rounded-lg p-1'>${range[1]}</div>
      </div>
    </div>
  );

  // const [state, setState] = useState({ x: 0, y: 10 });

  // return (

  // );
}

export default PriceSlider;
