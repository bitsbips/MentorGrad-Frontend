import React from "react";
import ReactDOM from "react-dom";
import {
  Elements,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import PaymentForm from "./PaymentFormStripe";
import Spinner from "../../components/Spinner";
import axios from "axios";
import { IMGURL } from "../../api";
import { notifyError } from "../../components/Toastifycom";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

interface PaymentCompoProps {
  data: any; // Define the type of data, replace 'any' with the actual type if known
}
const StripePayment: React.FC<PaymentCompoProps> = ({ data }) => {

  const stripePromise = loadStripe(
    "pk_test_51ODjRrH8aippXnMNG8qvuyJYx6YMkcUm1IqZ5gVF5pmKmYUhfJ0DmjVXQddNWxLj4olgZ6TY4aOn2CqnxTBGepKf00A3WnsPMl"
  );
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let called = false;

  useEffect(() => {
    if (!called) {
      setIsLoading(true);
      called = true;
      let payload = localStorage.getItem("booking") || "";
      console.log(payload);
      let parsedPayload = JSON.parse(payload);
      // Create a Checkout Session as soon as the page loads
      axios
        .post(`${IMGURL}auth/create-checkout-session-for-subscription`, {
          price: parsedPayload?.amount,
        })
        .then((response) => {
          setClientSecret(response.data.clientSecret);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          notifyError(error?.message || "Service not working!");
        });
    }
  }, []);

  const options: StripeElementsOptions = {
    mode: "payment",
    currency: "usd",
    amount: 1099,

    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: "#0570de",
        colorBackground: "#ffffff",
        colorText: "#30313d",
        colorDanger: "#df1b41",
        fontFamily: "Inter",
        spacingUnit: "5px",
        borderRadius: "10px",
        // See all possible variables below
      },
    },
  };

  return (
    <>
      <Elements stripe={stripePromise} options={options}>
        {/* <PaymentForm data={data} /> */}
        <div id="checkout">
          {isLoading && <Spinner />}
          {clientSecret && (
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ clientSecret }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          )}
        </div>
      </Elements>
    </>
  );
};

export default StripePayment;
