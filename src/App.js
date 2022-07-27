import logo from './logo.svg';
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
      <header className='bg-black text-white w-[400px] text-sm p-[2px] fixed top-0 z-30'>Less than 50 in stock!</header>
      <Header />
      <Carousel />
      <Information />
      <BuyNow />
      <About />
      <Footer />

    </div>
  );
}

export default App;
