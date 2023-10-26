import React, { FC } from "react";
import { Container } from "../AuthFlow/AuthStyles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import MentorProfileAll from "./MentorProfileAll";

const MentorProfile = () => {
    return(
       <Container>
       <MentorProfileAll/>
       </Container>
    )
}
export default MentorProfile;