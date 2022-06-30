import React, { useState, useEffect } from 'react';
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
  const [filteredListings, setFilteredListings] = useState([]);
  const [favoritesArray, setFavoritesArray] = useState([]);
  const [listings, setListings] = useState(data);
  const [favorited, setFavorited] = useState();
  const location = useLocation();

  useEffect(() => {
    // filter listings
    setFilteredListings(
      listings.filter(function (listing) {
        return listing.address.includes(locations) && listing.availability.length && listing.rooms >= adults;
      }),
    );
  }, [listings.length]);

  useEffect(() => {
    setFavoritesArray(Array(filteredListings.length).fill(false));
  }, [filteredListings.length]);

  if (!location.state) {
    return <div>Sorry, no bookings here, go back!</div>;
  }
  // import destructured data from homepage using location.state
  const { adults, children, startDate, endDate, locations } = location.state;

  // put date object in readable format
  const displayStartDate = startDate.toString().slice(4, 11);
  const displayEndDate = endDate.toString().slice(4, 11);

  const postFavorite = async (e, favoriteId, i) => {
    e.preventDefault();
    const updatedFavoritesArray = [...favoritesArray];
    updatedFavoritesArray[i] = !updatedFavoritesArray[i];
    setFavoritesArray(updatedFavoritesArray);

    try {
      await addFavorites({ variables: { favoriteId } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FilterSearch listings={listings} setListings={setListings} />
      <div className='flex justify-evenly mt-10 flex-wrap'>
        {filteredListings.map((listing, i) => {
          return (
            <div className='flex flex-col mb-10'>
              <div className='flex justify-end heart mr-3'>
                <Icon
                  value='favorite'
                  id={listing.id}
                  icon='ant-design:heart-twotone'
                  color={favoritesArray[i] ? '#fa385c' : 'white'}
                  width='26'
                  height='26'
                  onClick={(event) => postFavorite(event, listing._id, i)}
                  key={listing.id}
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
