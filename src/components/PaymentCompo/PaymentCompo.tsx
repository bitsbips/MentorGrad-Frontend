import React, { FC, useState } from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import StripePayment from './StripePayment';
import PaypalPayment from './PaypalPayment';
import { PaymentContainer, PaymentSubContainer, PriceDesc, PriceDesc1 } from '../StudentProfileDetails/StudentProfileStyles';
import PaymentsIcon from '@mui/icons-material/Payments';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    display: "flex",
    alignItems: "center",
  },
}));
interface PaymentCompoProps {
    data: any; // Define the type of data, replace 'any' with the actual type if known
  }
  const PaymentCompo: React.FC<PaymentCompoProps> = ({ data }) => {
    const classes = useStyles();

    const [selectedPaymentOption, setSelectedPaymentOption] = useState('stripe');

    const handlePaymentOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPaymentOption(event.target.value);
    };

    return (
        <PaymentContainer>
            <PaymentSubContainer>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <FormControlLabel
                    control={
                        <Radio
                            checked={selectedPaymentOption === 'stripe'}
                            onChange={handlePaymentOptionChange}
                            value="stripe"
                            color="primary" // You can change the color
                        />
                    }
                    label={
                        <div className={classes.label}>
                          Card Payment
                          {/* You can also add additional icons or components here */}
                        </div>
                    }
                   
                />

                <FormControlLabel
                    control={
                        <Radio
                            checked={selectedPaymentOption === 'paypal'}
                            onChange={handlePaymentOptionChange}
                            value="paypal"
                            color="primary" // You can change the color
                        />
                    }
                    label={
                        <div className={classes.label}>
                          Paypal
                          {/* You can also add additional icons or components here */}
                        </div>
                    }
                />
            </div>
            <PriceDesc>You are going to Purchase <PriceDesc style={{color:'#7476D1'}}>{data.title}</PriceDesc> Plan for <PriceDesc style={{color:'#7476D1'}}>${data.price}</PriceDesc>/{data.time}</PriceDesc>

            {selectedPaymentOption === 'stripe' && (
                <div style={{marginTop:'3%'}}>
                    {/* Stripe Payment component content */}
                    <StripePayment data={data.price}/>
                </div>
            )}

            {selectedPaymentOption === 'paypal' && (
                <div style={{marginTop:'3%'}}>
                    {/* Paypal Payment component content */}
                    <PaypalPayment />
                </div>
            )}
            </PaymentSubContainer>
        </PaymentContainer>
    );
};

export default PaymentCompo;
