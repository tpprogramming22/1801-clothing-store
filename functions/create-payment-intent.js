require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_ALWAYS_KEY);

exports.handler = async (event) => {
  try {
    // const { amount } = JSON.parse(event.body);
    const { paymentMethodType } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 40,
      currency: "gbp",
      payment_method_types: [paymentMethodType],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
