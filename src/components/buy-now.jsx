import ReactCountryFlag from 'react-country-flag';
import ApplePay from "./apple-pay";
import PaymentLink from "./payment-link";
import {AiFillCreditCard} from 'react-icons/ai'
import DiscordHook from './discordhook';

const BuyNow = () => {
  return (
    <div className="pt-6 border-b-2 w-396px">
        {/* <div className='flex justify-evenly items-center'>
        <p className="pt-2">Free shipping to the UK <strong> </strong><ReactCountryFlag countryCode='GB' /></p>
                
                <p className='text-xs pb-2'>Royal Mail 2nd Class Shipping</p>
                </div> */}

      <div p className="text-xs text-red-600 pt-4"><p></p>
      <p className='pb-2'></p></div>
      <a href='https://buy.stripe.com/7sIcNG4mz85Sgg03ce' className='cursor-pointer'>
      
      <div className='bg-black flex justify-center items-center rounded h-10'>
      
      <span className='text-white text-xl pr-2'>Pay with card</span>
      <AiFillCreditCard className='text-white text-3xl'/>
      </div></a>
      <div className="pt-4">
        <ApplePay className='w-[100px]'/>
      </div>
      
    </div>
  );
};

export default BuyNow;
