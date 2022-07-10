import { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

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
        label: "1801 Maxi Dress",
        amount: 2999,
      },
      requestShipping: true,
    });
    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });

    pr.on("paymentmethod", async (e) => {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentMethodType: "card",
            shippingAddress: e.shippingAddress,
          }),
        }
      ).then((res) => res.json());

      const {
        paymentIntent: { client_secret },
      } = response;

      const { paymentIntent } = await stripe.confirmCardPayment(
        client_secret,
        {
          payment_method: e.paymentMethod.id,
        },
        {
          handleActions: false,
        }
      )
      e.complete('success')
      if(paymentIntent.status == 'requires_action') {
        stripe.confirmCardPayment(client_secret);
      }
    });
  }, [stripe, elements]);

  return (
    <div>
      <h1 className="text-center text-4xl">Apple Pay Header</h1>
      {paymentRequest && (
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      )}
    </div>
  );
};

export default ApplePay;
