import React, { FC } from "react";
import Header from "../../components/Header/Header";
import UserFormAll from "../../components/UserForm/UserForm";
import Footer from "../../components/Footer";
import Confirm from "../ConfirmScreen/ConfirmResponse";
import { Container } from "../../pages/AuthFlow/AuthStyles";

const Response = () => {
    return(
       <Container>
       <Header/>
       <Confirm/>
       <Footer/>
       </Container>
    )
}
export default Response;