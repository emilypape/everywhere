import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SingleBooking() {
  // grab info from previous loading page
  const location = useLocation();
  const [listingData, setListingData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // grab fetch information for state
  useEffect(() => {
    getListingData();
  }, []);

  if (!location.state) {
    return <div>Sorry, we couldn't find that booking, go back!</div>;
  }

  // id of selected booking
  const id = location.state;

  // fetch listing info
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
      {/* map through and append information */}
      {listingData.map((listing) => {
        return (
          <div className='px-36'>
            <div className='font-semibold text-3xl'>
              {listing.title}: {listing.address}
            </div>
            <div className='flex justify-between'>
              <div className='flex mt-2'>
                <div className='font-semibold'>
                  <span className='text-black'>&#9733;</span>
                  {listing.locationRating}.0 &#160;
                </div>
                &#183;
                <div className='font-semibold'>
                  &#160;&#160;{listing.reviews.length} <span className='underline'>reviews</span>
                </div>
              </div>
              <div className='flex mb-5 mt-2'>
                <Icon className='mr-1 ml-96' icon='ant-design:heart-twotone' color='black' width='24' height='24' />
                <div className='underline font-semibold hover:text-coral'>Save</div>
              </div>
            </div>
            <div className='flex'>
              <div>
                <img className='rounded-l-lg pr-2 singleBookBigImg' src={listing.images[0]} />
              </div>
              <div className='flex flex-col'>
                <img className='pr-1 pb-1 singleBookSmallImg' width={944} src={listing.images[1]} />
                <img className='pr-1 pt-1 singleBookSmallImg' width={944} src={listing.images[2]} />
              </div>
              <div className='flex flex-col'>
                <img className='rounded-tr-lg pb-1 pl-1 singleBookSmallImg' width={944} src={listing.images[3]} />
                <img className='rounded-br-lg pl-1 pt-1 singleBookSmallImg' width={944} src={listing.images[4]} />
              </div>
            </div>
            <div className='flex justify-end mr-5 z-10 showPhotos mb-10'>
              <button className='flex border-2 rounded-lg border-black p-2 hover:bg-lightgrey bg-white '>
                <Icon className='mr-1' icon='akar-icons:dot-grid' color='black' width='22' height='22' />
                <div className='font-semibold'>Show all photos</div>
              </button>
            </div>
            {/* start lower part under photos */}
            <div className='mt-12  flex border-b-2 border-lightgrey w-7/12 justify-between'>
              <div className='flex justify-between '>
                <div className=''>
                  <div className='font-semibold text-2xl'>Hosted by {listing.hostInfo.name}</div>
                  <div className='flex mb-5'>
                    <div>{listing.rooms} guests &#160;</div>
                    &#183;
                    <div> &#160;{listing.rooms} bedrooms</div>
                  </div>
                </div>
              </div>
              <div className='ml-32'>
                <img className='inline object-cover w-16 h-16 mr-2 rounded-full' src={listing.hostInfo.hostImage} />
              </div>
            </div>
            {/* start form */}
            <div className='flex justify-end'>
              <div>
                {/* edit this stupid form */}
                <div className='z-50 sticky shadowMe  bg-white p-8 rounded-lg w-96'>
                  <div className='flex justify-between'>
                    <div>
                      <span className='font-semibold text-xl'>${listing.price}</span> night
                    </div>
                    <div className='flex'>
                      <div>
                        <span className='text-black'>&#9733;</span>
                        {listing.locationRating}.0 &#160;
                      </div>
                      <div className='font-semibold'>
                        &#160;&#160;{listing.reviews.length} <span className='underline'>reviews</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <form>
                      <div className='flex border-lightgrey border-2 rounded-lg mt-3 justify-between'>
                        <div className='flex flex-col check-in'>
                          <h1 className='font-bold text-sm ml-4 mt-1'>Check In</h1>
                          <DatePicker
                            className='multiselect__input ProseMirror p-3'
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>
                        <div>
                          <h1 className='font-bold text-sm ml-4 mt-1'>Check Out</h1>
                          <DatePicker
                            className='multiselect__input ProseMirror p-3 w-28'
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                          />
                        </div>
                      </div>
                      <div className='flex border-lightgrey border-2 rounded-lg mt-3 justify-between mb-10'>
                        <div className='flex flex-col'>
                          <label className='font-bold text-sm ml-4 mt-1' for='cars'>
                            Guests
                          </label>
                          <div className='ml-4 mb-1'>{listing.rooms} guest</div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <button className='searchBtn flex rounded-lg py-4 px-32'>
                    <h1 className='text-white font-bold'>Reserve</h1>
                  </button>
                  <div className='px-16 pt-5 text-gray'>You won't be charged yet</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SingleBooking;
