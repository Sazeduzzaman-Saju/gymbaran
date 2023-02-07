import '@/styles/globals.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import PuffLoader from "react-spinners/PuffLoader";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, [])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  return (
    <>
      {loading ?
        <div className='container'>
          <div className='row'>
            <div className='flex justify-center items-center' style={{ height: '100vh' }}>
              <PuffLoader color={'#4568dc'} loading={loading} size={150} />
            </div>
          </div>
        </div>
        :
        <>
          <Header></Header>
          <Component {...pageProps} />
          <Footer></Footer>
        </>
      }
    </>
  )
}
