import Script from 'next/script';

import './globals.css'

import '@fortawesome/fontawesome-svg-core/styles.css';
// import { config } from '@fortawesome/fontawesome-svg-core';
import Scrollbar from '@/components/Scrollbar/Scrollbar'; 

export default function App({ Component, pageProps }) {
  return (
    <>
    <Scrollbar/>
      <Component {...pageProps} />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5027162336385222"
        crossorigin="anonymous" />
    </>
  );
}
