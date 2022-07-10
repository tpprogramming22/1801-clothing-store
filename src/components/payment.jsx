import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const Payment = () => {

    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                paymentMethodType: 'card',
             }),
          }).then(res => res.json());
      
          const { paymentIntent: { client_secret }} = response;

        

        console.log('Payment intent created')
        console.log(response)

        
        const {paymentIntent} = await stripe.confirmCardPayment(
            client_secret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                }
            }
        )

    }
    
    return (
        <div>
            <h1>Payment Form</h1>
            <a href="https://buy.stripe.com/bIY7tmdX92Lye7SfYY">Pay with card</a>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button>Pay now!</button>
                </form>
        </div>
    )
}

export default Payment;