import ApplePay from "./apple-pay";
import PaymentLink from "./payment-link";

const BuyNow = () => {
  return (
    <div className="pt-6 border-b-2">
      <h1 className="text-3xl">Buy now!</h1>
      <div p className="text-xs text-red-600 pt-4"><p>Due to heavy traffic there is a limit of 1 per transaction. </p>
      <p>Thank you!</p></div>
      
      <div className="flex justify-center">
        <PaymentLink />
      </div>
      <h2>Click me!</h2>
      <div className="pt-4 pb-4">
        <ApplePay className='w-[100px]'/>
      </div>
    </div>
  );
};

export default BuyNow;
