import React, { useState } from 'react';
import { CardElement, Elements, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import ButtonComp from '../Button';


const PaymentForm = ({data}) => {
    const [isPaymentLoading, setPaymentLoading] = useState(false);

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const paymentElementOptions = {
        layout: {
            type: 'accordion',
            defaultCollapsed: false,
            radios: true,
            spacedAccordionItems: false
        },
        theme: 'stripe',

        variables: {
            colorPrimary: '#0570de',
            colorBackground: '#ffffff',
            colorText: '#30313d',
            colorDanger: '#df1b41',
            fontFamily: 'Inter',
            spacingUnit: '2px',
            borderRadius: '4px',
            // See all possible variables below
        }

    }
   
    

    const handleSubmit = async (data,e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (result.error) {
            setError(result.error.message);
        } else {
            // Handle successful payment, e.g., send the payment method to your server.
            console.log('Payment successful. Price:', data);

            console.log(result.paymentMethod);
        }
    };

    return (
        <form onSubmit={handleSubmit} >
            <PaymentElement id="payment-element" options={paymentElementOptions} />

            {error && <div className="error">{error}</div>
            }
            <div style={{ marginTop: '4%', marginBottom: '2%' }}>
                <ButtonComp title='Submit' style={{ padding: '9px', margin: 'auto' }} fontSize={'14px'} width={'30%'} onClick={() => handleSubmit(data)} disabled={!stripe} />
            </div>
        </form >
    );
};

export default PaymentForm;


