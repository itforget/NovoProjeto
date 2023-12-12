import '@/styles/globals.css'
import React from 'react';
import SlidingPage from './components/SlidingPage';

function MyApp({ Component, pageProps }) {
 return (
    <SlidingPage transition='scale'>
      <Component {...pageProps} />
    </SlidingPage>
 );
}

export default MyApp;