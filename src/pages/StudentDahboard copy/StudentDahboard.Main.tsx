import React, { FC } from "react";
import { Container } from "../AuthFlow/AuthStyles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Sidebarcompo from "../../components/SideBar/Sidebarcompo";
import TestDashboard from "../../components/Student-Dashboard/Student-Dashboard";
import HeaderDashboard from "../../components/Header/HeaderDashboard";

const StudentDashboardMain = () => {
    return (
        <Container>
            <HeaderDashboard />
            <TestDashboard/>
            <Footer />
        </Container>
    )
}
export default StudentDashboardMain;