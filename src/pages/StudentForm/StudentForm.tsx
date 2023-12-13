import React, { FC } from "react";
import { Container } from "../AuthFlow/AuthStyles";
import Header from "../../components/Header/Header";
import UserFormAll from "../../components/UserForm/UserForm";
import Footer from "../../components/Footer";

const StudentForm = () => {
  return (
    <Container>
      <Header />
      <UserFormAll />
      <Footer />
    </Container>
  );
};
export default StudentForm;
