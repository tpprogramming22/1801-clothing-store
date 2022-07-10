import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Payment from './components/payment';
import ApplePay from './components/apple-pay';
import { useState, useEffect } from 'react';

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
      <h1 className='text-red-500 text-4xl text-center'>SITE IS UNDERCONSTRUCTION</h1>
      <Payment />
      <ApplePay />
    </div>
  );
}

export default App;
