import QuoteModal from '../Components/QuoteModal/QuoteModal'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return <>
    <Component {...pageProps} />
    <QuoteModal></QuoteModal>
  </>
}

export default MyApp
