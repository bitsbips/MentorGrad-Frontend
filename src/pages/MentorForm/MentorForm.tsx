import React, { FC } from "react";
import { Container } from "../AuthFlow/AuthStyles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import MentorAppDetails from "../../components/MentorForm/MentorAppForm";
import { Containerm } from "../../components/UserForm/UserFormStyles";

const MentorForm = () => {
    return(
       <Container>
       <Header/>
       <MentorAppDetails/>
       <Footer/>
       </Container>
    )
}
export default MentorForm;