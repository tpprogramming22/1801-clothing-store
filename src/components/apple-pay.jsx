import { useEffect, useState } from "react";
import { useStripe, useElements, PaymentRequestButtonElement } from "@stripe/react-stripe-js";

const ApplePay = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }
    const pr = stripe.paymentRequest({
      currency: "gbp",
      country: "GB",
      requestPayerEmail: true,
      requestPayerName: true,
      total: {
        label: "Demo Payment",
        amount: 1999,
      },
    });
    pr.canMakePayment().then((result) => {
        if(result){
            setPaymentRequest(pr)
        }
    })
  }, [stripe, elements]);

  return (
    <div>
      <h1 className="text-center text-4xl">Apple Pay Header</h1>
      {paymentRequest && <PaymentRequestButtonElement options={{paymentRequest}}/>}
    </div>
  );
};

export default ApplePay;
