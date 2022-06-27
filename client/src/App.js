import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingsPage';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/BookingPage' element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
