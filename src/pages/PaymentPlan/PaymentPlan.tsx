import React, { FC } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import { Container } from "../AuthFlow/AuthStyles";
import PaymentPlanComp from "../../components/PaymentPlan/PaymentPlanCom";



const PaymentPlan: FC = () => {
    return (
        <Container>
            <Header />
            <PaymentPlanComp/>
            <Footer />
        </Container>
    )
}
export default PaymentPlan;