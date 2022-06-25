import React, { useState } from 'react';
import Slider from 'react-input-slider';

function PriceSlider() {
  const [state, setState] = useState({ x: 0, y: 10 });

  return (
    <div>
      <h1 className='text-3xl font-semibold'>Price Range</h1>
      <p className='text-gray mr-36'>The average nightly price is $350</p>
      <Slider axis='x' x={state.x} onChange={({ x }) => setState((state) => ({ ...state, x }))} />
    </div>
  );
}

export default PriceSlider;
