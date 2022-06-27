import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SingleBooking() {
  const location = useLocation();
  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    getListingData();
  }, []);

  if (!location.state) {
    return <div>Sorry, we couldn't find that booking, go back!</div>;
  }

  const id = location.state;

  async function getListingData() {
    try {
      const response = await fetch(`https://immense-hamlet-26327.herokuapp.com/api/${id}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setListingData(data);
      } else {
        throw response;
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      {listingData.map((listing) => {
        return (
          <div className='px-16'>
            <div>
              {listing.title}: {listing.address}
            </div>
            <div className='flex'>
              <div>
                <img className='rounded-l-lg pr-2' src={listing.images[0]} />
              </div>
              <div className='flex flex-col'>
                <img className='pr-1 pb-1' width={944} src={listing.images[1]} />
                <img className='pr-1 pt-1' width={944} src={listing.images[2]} />
              </div>
              <div className='flex flex-col'>
                <img className='rounded-tr-lg pb-1 pl-1' width={944} src={listing.images[3]} />
                <img className='rounded-br-lg pl-1 pt-1' width={944} src={listing.images[4]} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SingleBooking;
