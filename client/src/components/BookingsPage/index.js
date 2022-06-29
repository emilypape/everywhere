import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FilterSearch from '../FilterSearch';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { ADD_FAVORITE } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

function BookingPage({ data }) {
  const [addFavorites] = useMutation(ADD_FAVORITE);
  const [listings, setListings] = useState(data);
  const [favorited, setFavorited] = useState();
  const location = useLocation();
  if (!location.state) {
    return <div>Sorry, no bookings here, go back!</div>;
  }
  // import destructured data from homepage using location.state
  const { adults, children, startDate, endDate, locations } = location.state;

  // put date object in readable format
  const displayStartDate = startDate.toString().slice(4, 11);
  const displayEndDate = endDate.toString().slice(4, 11);

  const postFavorite = async (e) => {
    e.preventDefault();
    try {
      await addFavorites({ variables: e.target.id });
    } catch (error) {
      console.log(error);
    }
  };

  // filter listings
  const filteredListings = listings.filter(function (listing) {
    return listing.address.includes(locations) && listing.availability.length && listing.rooms >= adults;
  });
  return (
    <div>
      <FilterSearch listings={listings} setListings={setListings} />
      <div className='flex justify-evenly mt-10 flex-wrap'>
        {filteredListings.map((listing) => {
          return (
            <div className='flex flex-col mb-10'>
              <div className='flex justify-end heart mr-3'>
                <Icon
                  id={listing.id}
                  icon='ant-design:heart-twotone'
                  color={`white`}
                  width='26'
                  height='26'
                  onClick={postFavorite}
                />
              </div>

              <Carousel showStatus={false} width={300} showThumbs={false} className='custom-slider rounded-lg carousel'>
                <div>
                  <img className='imageSizes' src={listing.images[0]} />
                </div>

                <div>
                  <img className='imageSizes' src={listing.images[1]} />
                </div>
                <div>
                  <img className='imageSizes' src={listing.images[2]} />
                </div>
                <div>
                  <img className='imageSizes' src={listing.images[3]} />
                </div>
                <div>
                  <img className='imageSizes' src={listing.images[4]} />
                </div>
              </Carousel>
              <Link to='/SingleBooking' state={listing.id}>
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
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookingPage;
