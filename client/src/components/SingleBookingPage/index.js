import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ADD_FAVORITE } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

function SingleBooking() {
  const [addFavorite] = useMutation(ADD_FAVORITE);
  // grab info from previous loading page
  const myRef = useRef(null);
  const location = useLocation();
  const [showPhotoModal, setShowPhotoModal] = useState(false);
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

  const postFavorite = async (e, favoriteId) => {
    e.preventDefault();
    try {
      await addFavorite({ variables: { favoriteId } });
    } catch (error) {
      console.log(error);
    }
  };
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

  const executeScroll = () => myRef.current.scrollIntoView();

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
                {/* <Icon
                  className='mr-1 ml-96'
                  icon='ant-design:heart-twotone'
                  color='black'
                  width='24'
                  height='24'
                  onClick={event => postFavorite(event, listing._id)}
                /> */}
                <div className='underline font-semibold hover:text-coral'>Save</div>
              </div>
            </div>
            <div className='flex'>
              <div>
                <img className='rounded-l-lg pr-2 singleBookBigImg' src={listing.images[0]} alt='' />
              </div>
              <div className='flex flex-col'>
                <img className='pr-1 pb-1 singleBookSmallImg' width={944} src={listing.images[1]} alt='' />
                <img className='pr-1 pt-1 singleBookSmallImg' width={944} src={listing.images[2]} alt='' />
              </div>
              <div className='flex flex-col'>
                <img
                  className='rounded-tr-lg pb-1 pl-1 singleBookSmallImg'
                  width={944}
                  src={listing.images[3]}
                  alt=''
                />
                <img
                  className='rounded-br-lg pl-1 pt-1 singleBookSmallImg'
                  width={944}
                  src={listing.images[4]}
                  alt=''
                />
              </div>
            </div>
            <div className='flex justify-end mr-5 z-10 showPhotos mb-10'>
              <button
                className='flex border-2 rounded-lg border-black p-2 hover:bg-lightgrey bg-white '
                onClick={() => setShowPhotoModal(true)}>
                <Icon className='mr-1' icon='akar-icons:dot-grid' color='black' width='22' height='22' />
                <div className='font-semibold'>Show all photos</div>
              </button>
            </div>
            {showPhotoModal ? (
              <PhotoModal
                setShowPhotoModal={setShowPhotoModal}
                showPhotoModal={showPhotoModal}
                listings={listingData}
              />
            ) : null}
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
                <img
                  className='inline object-cover w-16 h-16 mr-2 rounded-full'
                  src={listing.hostInfo.hostImage}
                  alt=''
                />
              </div>
            </div>
            {/* start form */}
            <div className='flex justify-end'>
              <div>
                <div className='w-10/12 text-darkGrey mt-5'>
                  <span className='font-semibold text-lg'>Welcome to {listing.address}!</span> {listing.description}
                </div>
                <div className=''>
                  <div className='mt-5 font-semibold text-2xl border-t-2 border-lightgrey py-5 w-11/12'>
                    What this place offers
                  </div>
                  <div className='text-lg flex border-b-2 border-lightgrey '>
                    <div className='flex flex-col'>
                      <div className='py-2'>{listing.amenities[0]}</div>
                      <div className='py-2'>{listing.amenities[1]}</div>
                      <div className='py-2'>{listing.amenities[2]}</div>
                      <div className='py-2'>{listing.amenities[3]}</div>
                      <div className='py-2'>{listing.amenities[4]}</div>
                    </div>
                    <div className='flex flex-col ml-36'>
                      <div className='py-2'>{listing.amenities[5]}</div>
                      <div className='py-2'>{listing.amenities[6]}</div>
                      <div className='py-2'>{listing.amenities[7]}</div>
                      <div className='py-2'>{listing.amenities[8]}</div>
                      <div className='py-2'>{listing.amenities[9]}</div>
                    </div>
                  </div>
                </div>
                {/* reviews */}
                <div>
                  <div className='flex mt-5 '>
                    <div className='font-semibold text-xl'>
                      <span className='text-black'>&#9733;</span>
                      {listing.locationRating}.0 &#160;
                    </div>
                    &#183;
                    <div className='font-semibold text-xl '>
                      &#160;&#160;{listing.reviews.length} <span className='underline'>reviews</span>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <div className='font-semibold text-lg'>
                      {listing.reviews[0].revTitle}&#160; <span className='text-black'>&#9733;</span>{' '}
                      <span className='font-bold text-xl'>{listing.reviews[0].reviewRating}.0</span>
                    </div>
                    <div>
                      <div>{listing.reviews[0].reviewBody}</div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <div className='font-semibold text-lg'>
                      {listing.reviews[1].revTitle}&#160; <span className='text-black'>&#9733;</span>{' '}
                      <span className='font-bold text-xl'>{listing.reviews[1].reviewRating}.0</span>
                    </div>
                    <div>
                      <div>{listing.reviews[1].reviewBody}</div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <div className='font-semibold text-lg'>
                      {listing.reviews[2].revTitle}&#160; <span className='text-black'>&#9733;</span>{' '}
                      <span className='font-bold text-xl'>{listing.reviews[2].reviewRating}.0</span>
                    </div>
                    <div>
                      <div>{listing.reviews[2].reviewBody}</div>
                    </div>
                  </div>
                  <div className='mt-5 mb-5'>
                    <div className='font-semibold text-lg'>
                      {listing.reviews[3].revTitle}&#160; <span className='text-black'>&#9733;</span>{' '}
                      <span className='font-bold text-xl'>{listing.reviews[3].reviewRating}.0</span>
                    </div>
                    <div>
                      <div>{listing.reviews[3].reviewBody}</div>
                    </div>
                  </div>
                  <div
                    onClick={executeScroll}
                    className='font-semibold underline text-lg flex border-b-2 border-lightgrey '>
                    Book to see more reviews!
                  </div>
                </div>
                {/* start hosting information */}
                <div className='flex flex-col mt-8'>
                  <div className='flex'>
                    <img
                      src={listing.hostInfo.hostImage}
                      alt=''
                      className='inline object-cover w-16 h-16 mr-2 rounded-full'
                    />
                    <div>
                      <div className='font-semibold text-xl'>Hosted by {listing.hostInfo.name}</div>
                      <div className='text-gray'>Joined December 201{listing.hostInfo.hostResponseRating}</div>
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='mt-5'>
                      <span className='text-black'>&#9733;</span>
                      &#160;&#160;{listing.reviews.length} <span className=''>reviews</span>
                    </div>
                    <div className='flex mt-5 ml-5'>
                      <Icon className='mt-1' icon='bx:time' color='black' width='20' height='20' />
                      &#160;
                      <div>Response Rating: {listing.hostInfo.hostResponseRating}</div>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <div className='font-semibold'>During your stay</div>
                    <div className='mt-3'>
                      Welcome to my home! {listing.address} welcomes you! We offer {listing.rules[0]} and{' '}
                      {listing.rules[1]} for your convienance and safety.
                    </div>
                    <div className='flex w-96 mt-7 mb-5'>
                      <Icon icon='dashicons:money-alt' color='#fa385c' width='50' height='50' />
                      <div className='text-xs text-gray p-2'>
                        To protect your payment, never transfer money outside of the Everywhere website or app.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* edit this stupid form */}
                <div ref={myRef} className='z-50 shadowMe  bg-white p-8 rounded-lg w-96'>
                  <div className='flex justify-between'>
                    <div>
                      <span className='font-semibold text-2xl'>${listing.price}</span> night
                    </div>
                    <div className='flex'>
                      <div className='font-semibold'>
                        <span className='font-normal text-black'>&#9733;</span>
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
                          <select className='multiselect__input ProseMirror p-3' id='guests' name='guests'>
                            <option value='0'>{listing.rooms}</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  <Link to='/Reservation' state={listing.id}>
                    <button className='searchBtn flex rounded-lg py-4 px-32'>
                      <h1 className='text-white font-bold'>Reserve</h1>
                    </button>
                  </Link>
                  <div className='px-16 pt-5 text-gray'>You won't be charged yet</div>
                </div>
                <div className='flex border-lightgrey border-2 rounded-lg p-5 mt-10'>
                  <div>
                    <span className='font-semibold text-lg'>This is a rare find.</span>&#160;
                    {listing.hostInfo.name}'s place is usually fully booked.
                  </div>
                  <Icon icon='ic:twotone-diamond' color='#ff385c' width='60' height='60' />
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

function PhotoModal({ listings, showPhotoModal, setShowPhotoModal }) {
  return (
    <div>
      {listings.map((listing) => {
        return (
          <>
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none '>
              <div className='relative w-auto my-6 mx-auto max-w-3xl w-7/12'>
                {/*content*/}
                <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  {/*header*/}
                  <div className='flex justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                    <button
                      className='p-1 ml-auto  border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none '
                      onClick={() => setShowPhotoModal(false)}>
                      <span classname='text-black'>x</span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className='flex justify-center relative p-6 flex-auto overflow-scroll overflow-auto biggerModal'>
                    <div className='mb-5'>
                      <div className='flex'>
                        <img className='p-1 w-96 h-64 singleBookSmallImg' src={listing.images[0]} alt='' />
                        <img className='p-1 w-96 h-64 singleBookSmallImg' src={listing.images[1]} alt='' />
                      </div>
                      <div>
                        <img className='p-1 singleBookBigImg' src={listing.images[2]} alt='' />
                      </div>
                      <div className='flex '>
                        <img className='p-1 w-96 h-64 singleBookSmallImg' src={listing.images[3]} alt='' />
                        <img className='p-1 w-96 h-64 singleBookSmallImg' src={listing.images[4]} alt='' />
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className='flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b'>
                    <button
                      className='bg-offBlack bg-emerald-500 text-white active:bg-emerald-600 font-bold text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                      type='button'
                      onClick={() => setShowPhotoModal(false)}>
                      Show Stay
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </>
        );
      })}
    </div>
  );
}
