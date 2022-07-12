import ApplePay from "./apple-pay";
import PaymentLink from "./payment-link";

const BuyNow = () => {
  return (
    <div className="pt-6 border-b-2">
      <h1 className="text-3xl">Buy now!</h1>
      <div className="flex justify-center">
        <PaymentLink />
      </div>
      <div className="pt-4 pb-4">
        <ApplePay/>
      </div>
    </div>
  );
};

export default BuyNow;
