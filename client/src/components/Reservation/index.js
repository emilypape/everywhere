import React, { useState, useEffect, useRef } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Auth from '../../utils/auth';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { useSelector, useDispatch } from 'react-redux'

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Reservation = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector(state => state.cart);
  const cart = cartStore.cart;
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  // grab info from previous loading page
  const myRef = useRef(null);
  const location = useLocation();

  const [listingData, setListingData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  console.log(cartStore)
  // grab fetch information for state
  useEffect(() => {
    getListingData();
  }, []);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
    dispatch({
      type: "CLEAR_CART"
    })
  }, [data]);

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

  function submitCheckout(listingInfo, days) {
    console.log('Information: ', listingInfo.title, days)
    const totalPrice = listingInfo.price * days * 100;
    const orderTitle = listingInfo.title;
    dispatch({
      type: "ADD_TO_CART",
      order: {title: orderTitle, price:totalPrice}
    })
    getCheckout({
      variables: {title: orderTitle, price: totalPrice.toString()}
    })
  }

  const executeScroll = () => myRef.current.scrollIntoView();

  //calculate total nights
  const diffTime = Math.abs(endDate - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  //calculate total price

  // (function () {
  //     document.getElementById("footer").style.cssText = "bottom: 0; left: 0; position: absolute;";
  // })();

  return (
    <div>
      {/* map through and append information */}
      {listingData.map((listing) => {
        return (
          <div className='px-36 flex justify-center inset-0 whitespace-normal'>
            {/* start form */}
            <div className='flex mt-28 mb-24'>
              <div>
                {/* edit this stupid form */}
                <div ref={myRef} className='z-50 shadowMe  bg-white p-8 rounded-lg w-96 '>
                  <div className='font-semibold text-3xl pb-9'>Confirm and Pay</div>
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
                      <div className='relative bottom-1'>
                        ${listing.price} x {diffDays} nights{' '}
                        <span className='absolute right-0'>Total: ${listing.price * diffDays}</span>
                      </div>
                    </form>
                  </div>
                  {Auth.loggedIn() ? (
                    <button
                      className='searchBtn flex rounded-lg py-4 px-32'
                      onClick={() => submitCheckout(listing, diffDays)}>
                      <h1 className='text-white font-bold'>Reserve</h1>
                    </button>
                  ) : (
                    <span>(login to checkout)</span>
                  )}
                  <div className='px-16 pt-5 text-gray'></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reservation;
