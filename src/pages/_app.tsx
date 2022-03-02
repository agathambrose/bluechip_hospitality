import '../../styles/globals.scss'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import type { AppProps } from 'next/app'

function MyApp ( { Component, pageProps }: AppProps ) {
  	useEffect(() => {
			Aos.init({ duration: 1000 });
		}, []);
  return <Component {...pageProps} />
}

export default MyApp
