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
      <Header />
      <Carousel />
      <Information />
      <BuyNow />
    </div>
  );
}

export default App;
