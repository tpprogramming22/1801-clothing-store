import { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

const ApplePay = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentStatus, setPaymentStatus] = useState('');

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
        amount: 40,
      },
      requestShipping: true,
      shippingOptions: [{
        id: 'free-shipping',
        label: 'Free shipping',
        detail: 'Sent within 2 days with royal mail',
        amount: 0,},]
    });
    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });

    pr.on("shippingaddresschange", async (e) => {
        if(e.shippingAddress.country !== 'GB') {
            e.updateWith({status: 'invalid_shipping_address'})
        }
        else {
            e.updateWith({
                status: 'success',
            })

        }

    })

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
          }),
        }
      ).then((res) => res.json());

      const {
        paymentIntent: { client_secret },
      } = response;

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        client_secret,
        {
          payment_method: e.paymentMethod.id,
        },
        {
          handleActions: false,
        }
      )

      if(error) {
        e.complete('fail');
        setPaymentStatus('There was an error with your payment, please try again.')
        return;
      }

      e.complete('success')
      if(paymentIntent.status == 'requires_action') {
        stripe.confirmCardPayment(client_secret);
      }
      setPaymentStatus('Payment complete! You will be emailed shortly with confirmation!')
    });
  }, [stripe, elements]);

  return (
    <div>
      {paymentRequest && (
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      )}
      <h1>{paymentStatus}</h1>
    </div>
  );
};

export default ApplePay;
