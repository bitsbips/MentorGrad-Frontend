import React, { FC, useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import StripePayment from "./StripePayment";
import PaypalPayment from "./PaypalPayment";
import {
  PaymentContainer,
  PaymentSubContainer,
  PriceDesc,
  PriceDesc1,
} from "../StudentProfileDetails/StudentProfileStyles";
import PaymentsIcon from "@mui/icons-material/Payments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import { jwtDecode } from "../../helper-functions";

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
  const userId = jwtDecode(localStorage.getItem("@storage_Key"))?.userId;

  const classes = useStyles();

  const [selectedPaymentOption, setSelectedPaymentOption] = useState("stripe");

  useEffect(() => {
    setlocalStorage();
  }, []);

  const setlocalStorage = async () => {
    let payload = {
      desc: data.desc,
      features: data.features,
      subscriptionId: data.id,
      amount: data.price,
      currency:"usd",
      time: data.time,
      plan: data.title,
      userId: userId,
      paymentApproved: true,
    };
    // await localStorage.setItem("booking", "");
    await localStorage.setItem("booking", JSON.stringify(payload));
  };

  const handlePaymentOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPaymentOption(event.target.value);
  };

  return (
    <PaymentContainer>
      <PaymentSubContainer>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <FormControlLabel
            control={
              <Radio
                checked={selectedPaymentOption === "stripe"}
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
                checked={selectedPaymentOption === "paypal"}
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
        <PriceDesc>
          You are going to Purchase{" "}
          <PriceDesc style={{ color: "#7476D1" }}>{data.title}</PriceDesc> Plan
          for <PriceDesc style={{ color: "#7476D1" }}>${data.price}</PriceDesc>/
          {data.time}
        </PriceDesc>

        {selectedPaymentOption === "stripe" && (
          <div style={{ marginTop: "3%" }}>
            {/* Stripe Payment component content */}
            <StripePayment data={data} />
          </div>
        )}

        {selectedPaymentOption === "paypal" && (
          <div style={{ marginTop: "3%" }}>
            {/* Paypal Payment component content */}
            <PaypalPayment />
          </div>
        )}
      </PaymentSubContainer>
    </PaymentContainer>
  );
};

export default PaymentCompo;
