import './App.css'
import AboutUs from './Components/AboutUs'
import Destinations from './Components/Destinations'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    AOS.init(
      {once: true}
    );
  
  }, [])

  return (
    <>
      <Header text = 'Book a Flight' link = {'/booking'} />
      <Hero />
      <Destinations />
      <Footer />
    </>
  )
}

export default App
