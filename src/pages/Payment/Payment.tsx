import React, { FC } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import { Container } from "../AuthFlow/AuthStyles";
import PaymentCompo from "../../components/PaymentCompo/PaymentCompo";
import { useLocation } from "react-router-dom";



const PaymentPage: FC = () => {
    const { state } = useLocation();
    const data = state?.data || ""; // Access the passed data
     
    return (
        <Container>
            <Header />
            <PaymentCompo data={data}/>
            <Footer />
        </Container>
    )
}
export default PaymentPage;