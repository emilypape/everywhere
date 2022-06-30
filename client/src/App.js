import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Favorites from './components/Favorites';
import BookingPage from './components/BookingsPage';
import SingleBooking from './components/SingleBookingPage';
import Reservation from './components/Reservation';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


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
    <ApolloProvider client={client}>
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage data={data} />} />
          <Route path='/BookingPage' element={<BookingPage data={data} />} />
          <Route path='/SingleBooking' element={<SingleBooking />} />
          <Route path='/Reservation' element={<Reservation/>} />
          <Route path='/Favorites' element={<Favorites />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;