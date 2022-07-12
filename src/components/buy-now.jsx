import ReactCountryFlag from 'react-country-flag';
import ApplePay from "./apple-pay";
import PaymentLink from "./payment-link";
import {AiFillCreditCard} from 'react-icons/ai'

const BuyNow = () => {
  return (
    <div className="pt-6 border-b-2">
        <p className="pt-2">Free shipping to the United Kingdom</p>
                <ReactCountryFlag countryCode='GB' className='pb-2'/>
                {/* <p className='text-xs pb-2'>Royal Mail 2nd Class Shipping</p> */}

      <div p className="text-xs text-red-600 pt-4"><p>Due to heavy traffic there is a limit of 1 per transaction.</p>
      <p className='pb-2'>Thank you!</p></div>
      <a href='https://buy.stripe.com/bIY7tmdX92Lye7SfYY' className='cursor-pointer'><div className='bg-black flex justify-evenly items-center'>
      
        
      
      <span className='text-white text-2xl'>Pay with card</span>
      <AiFillCreditCard className='text-white text-3xl'/>
      </div></a>
      <div className="pt-4">
        <ApplePay className='w-[100px]'/>
      </div>
      
    </div>
  );
};

export default BuyNow;
