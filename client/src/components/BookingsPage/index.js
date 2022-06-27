import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import FilterSearch from '../FilterSearch';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Icon } from '@iconify/react';

function BookingPage({ data }) {
  const listings = data;
  const location = useLocation();
  if (!location.state) {
    return <div>Sorry, no bookings here, go back!</div>;
  }
  const { adults, children, startDate, endDate, locations } = location.state;

  const displayStartDate = startDate.toString().slice(4, 11);
  const displayEndDate = endDate.toString().slice(4, 11);

  const filteredListings = listings.filter(function (listing) {
    return listing.address.includes(locations) && listing.availability.length && listing.rooms >= adults;
  });
  return (
    <div>
      <FilterSearch />
      <div className='flex justify-evenly mt-10 flex-wrap'>
        {filteredListings.map((listing) => {
          return (
            <div className='flex flex-col'>
              <div className='flex justify-end heart mr-3'>
                <Icon icon='ant-design:heart-twotone' color='white' width='26' height='26' />
              </div>
              <Carousel showStatus={false} width={300} showThumbs={false} className='custom-slider rounded-lg carousel'>
                <div>
                  <img src={listing.images[0]} />
                </div>
                <div>
                  <img src={listing.images[1]} />
                </div>
                <div>
                  <img src={listing.images[2]} />
                </div>
                <div>
                  <img src={listing.images[3]} />
                </div>
                <div>
                  <img src={listing.images[4]} />
                </div>
              </Carousel>
              <div className='mt-3'>
                <div className='flex justify-between'>
                  <div className='font-semibold '>{listing.address}</div>
                  <div className='text-darkGrey'>
                    {listing.locationRating}.0 <span className='text-black'>&#9733;</span>
                  </div>
                </div>
                <div className='text-gray'>
                  {displayStartDate} - {displayEndDate}
                </div>
                <div>
                  <div className='font-semibold'>
                    ${listing.price} <span className='font-normal'>night</span>
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

export default BookingPage;
