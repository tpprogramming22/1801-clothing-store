import ReactCountryFlag from 'react-country-flag';
import ApplePay from "./apple-pay";
import PaymentLink from "./payment-link";

const BuyNow = () => {
  return (
    <div className="pt-6 border-b-2">

      <div p className="text-xs text-red-600 pt-4"><p>Due to heavy traffic there is a limit of 1 per transaction.</p>
      <p>Thank you!</p></div>
      
      <div className="flex justify-center">
        <PaymentLink />
      </div>
      <h2>Click me!</h2>
      <div className="pt-4">
        <ApplePay className='w-[100px]'/>
      </div>
      <p className="pt-2">Free shipping to the United Kingdom</p>
                <ReactCountryFlag countryCode='GB' className='pb-2'/>
                {/* <p className='text-xs pb-2'>Royal Mail 2nd Class Shipping</p> */}
    </div>
  );
};

export default BuyNow;
