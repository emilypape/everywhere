import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingsPage';
import SingleBooking from './components/SingleBookingPage';

function App() {
  const [data, setData] = useState([]);
  async function getData() {
    try {
      const response = await fetch('https://immense-hamlet-26327.herokuapp.com/api');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else {
        throw response;
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage data={data} />} />
          <Route path='/BookingPage' element={<BookingPage data={data} />} />
          <Route path='/SingleBooking' element={<SingleBooking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
