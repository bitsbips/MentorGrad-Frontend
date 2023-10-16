import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Describe } from '../PaymentPlan/PaymentPlanStyles';

const PAYPAL_CLIENT_ID = "Ac13SPvKCSxaj9kDJklzL0K2t3nkbA3pdFxbB1CpoX9dyDVy1DMUs5bUgRhvHi6FeUDNmkcQgQF5_yMG";

// ...

function PaypalPayment() {
  return (
    <PayPalScriptProvider           
    options={{ "client-id": PAYPAL_CLIENT_ID ,'disable-funding': 'credit'}}>
      <Describe>Click the Button below to Purchase it from Paypal! </Describe>
      <div style={{width:'30%',margin:'auto'}}>
        <PayPalButtons
        options={{ currency:"USD", disableFunding: 'credit' }}     
          style={{
            color:'blue',
            layout:'horizontal',
            tagline:false,
            shape:'pill',
           }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "10.00", // The total amount for the purchase
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(function (details) {
              // Handle the successful payment here
              console.log("Payment completed: ", details);
            });
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
}

export default PaypalPayment;
