import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <div className="page">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>)

}

export default MyApp
