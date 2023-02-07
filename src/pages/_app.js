import '@/styles/globals.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}
