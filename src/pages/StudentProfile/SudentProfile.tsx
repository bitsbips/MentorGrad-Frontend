import React, { FC } from "react";
import { Container } from "../AuthFlow/AuthStyles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import StudentProfileAll from "../../components/StudentProfileDetails/StudentProfileAll";

const StudentProfile = () => {
    return(
       <Container>
       <Header/>
       <StudentProfileAll/>
       <Footer/>
       </Container>
    )
}
export default StudentProfile;