import React from 'react';
import ReactDOM from 'react-dom';
import { Elements, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe ,StripeElementsOptions} from '@stripe/stripe-js';
import { useState } from 'react';
import PaymentForm from './PaymentFormStripe';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51LBeSyAkhb1qhmCgnJI7vT1T2znf2U8lU75btjY9GWwjqzS8iC2Uw5Cfwtm0o7Fgvgl3QUFe88yiHoZgcSon1unh00UT8Izrq8');

interface PaymentCompoProps {
  data: any; // Define the type of data, replace 'any' with the actual type if known
}
const StripePayment: React.FC<PaymentCompoProps> = ({ data }) => { 
  const options: StripeElementsOptions = {

    mode: 'payment',
    currency: 'usd',
    amount: 1099,

    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#0570de',
        colorBackground: '#ffffff',
        colorText: '#30313d',
        colorDanger: '#df1b41',
        fontFamily: 'Inter',
        spacingUnit: '5px',
        borderRadius: '10px',
        // See all possible variables below
      }
  }
  };

  return (
    <>
      <Elements stripe={stripePromise} options={options}>
        <PaymentForm data={data}/>
      </Elements>


    </>
  );
};

export default StripePayment