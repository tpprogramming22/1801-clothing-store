
import './App.css';
import axios from 'axios';
import Payment from './components/payment';
import ApplePay from './components/apple-pay';
import { useState, useEffect } from 'react';
import PaymentLink from './components/payment-link';
import Header from './components/header';
import Carousel from './components/carousel';
import Information from './components/information';
import BuyNow from './components/buy-now';
import About from './components/about';
import Footer from './components/footer';
import DiscordHook from './components/discordhook';
import ReactCountryFlag from 'react-country-flag';

function App() {
  const [message, setMessage] = useState('');
  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/helloWorld')
    console.log(results.data.message)
    setMessage(results.data.message)
  }

  useEffect(()=>{
    fetchData()
  },[]);


  return (
    <div>
      <header className='bg-black text-white w-[450px] text-sm p-[2px] fixed top-0 z-30 bg-opacity-25'>Free shipping to the UK <strong> </strong><ReactCountryFlag countryCode='GB' /></header>
      <Header />
      <Carousel />
      <Information />
      <div className='p-2 bg-black mt-10  rounded-lg bg-opacity-20 shadow-2xl'>
                <h1 className='font-bold text-black'>SORRY, WE'RE OUT OF STOCK</h1>
                
                {/* <h1 className='text-white'>Estimated 2 week shipping</h1> */}
                
                
            </div>
      {/* <BuyNow /> */}
      <About />
      <Footer />

    </div>
  );
}

export default App;
