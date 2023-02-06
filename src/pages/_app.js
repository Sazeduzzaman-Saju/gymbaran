import '@/styles/globals.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}
