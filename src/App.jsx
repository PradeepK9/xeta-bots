import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import XBCarousel from './components/xb-carousel';
import Header from './components/xb-header/navbar';
import MediaCard from './components/xb-services'
import XBProducts from './components/xb-products'
import XBFooter from './components/xb-footer'

function App() {

  return (
    <>
      <Header />
      <XBCarousel />
      <MediaCard />
      <XBProducts />
      <XBFooter />
    </>
  )
}

export default App
