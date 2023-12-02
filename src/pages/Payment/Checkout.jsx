import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { IMGURL } from "../../api";
import { notifyError } from "../../components/Toastifycom";
import Spinner from "../../components/Spinner";

export const CheckoutForm = () => {
  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  // This is your test public API key.
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
      let parsedPayload = JSON.parse(payload);
      // Create a Checkout Session as soon as the page loads
      axios
        .post(`${IMGURL}auth/create-checkout-session`, {
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

  return (
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
  );
};
