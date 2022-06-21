import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import 'tw-elements';

function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = './TW-ELEMENTS-PATH/dist/js/index.min.js';
    script.async = true;

    document.body.appendChild(script);
  }, []);
  return (
    <div>
      <Nav />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
