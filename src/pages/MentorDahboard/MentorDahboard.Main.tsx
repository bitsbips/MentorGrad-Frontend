import React, { FC } from 'react';
import { Container } from '../AuthFlow/AuthStyles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import Sidebarcompo from '../../components/SideBar/Sidebarcompo';
import HeaderDashboard from '../../components/Header/HeaderDashboard';
import Mentor_Dashboard from '../../components/Mentor-Dashboard/Mentor-Dashboard';

const MentorDashboardMain = () => {
  return (
    <Container>
      <HeaderDashboard />
      <Mentor_Dashboard />
      <Footer />
    </Container>
  );
};
export default MentorDashboardMain;
