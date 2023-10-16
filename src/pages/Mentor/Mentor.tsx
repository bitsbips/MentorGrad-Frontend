import React from "react";
import { BackCartImage, BackCartImageVideo, BackCartMentor, BackCartMentorVideo, BottomBackCart, BottomNewsMentor, BottomTextMentor, Container, HeaderCart, HeaderCartContent, HeaderCartContentPostion, HeaderCartTopBack, HeaderCartimg, HeaderName, HeaderOccupation, HomeHeading, IconBack, MentorHeading, MentorSubHeading, MentorSubHeadingbtm, NewsHeadMentor, RowDirectionMentor, RowDirectionMentorWrap, SocialHeading } from "./MentorStyles";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import { BackgroundChecked2, BackgroundChecked3, BackgroundCheckedM, TextChecked1, TextChecked2, TopBack } from "../About/AboutStyles";
import { BottomPosHome, ColDirection, Column, NewsHead, Row, RowDirection, RowDirectionBetween, WorksSubHeading } from "../Home/HomeStyles";
import ScrollSocial from "../../components/ScrollSocial";
import { InputHolder } from "../../components/UserForm/UserFormStyles";
import profile from '../../Assets/Images/user.svg'
import { AllMentors } from "../../Data/Data";
import SupportCom from "../../components/SupportComponent";
import MentorsFaq from "../../components/MentorsFaq";
import ButtonComp from "../../components/Button";
import HeaderCartCompo from "../../components/HeaderCart";
import useMediaQuery from "../../hooks/MediaQuery";
import MentorOffers from "../../components/MentorOffers";

const Mentor = () => {
    const isMobile = useMediaQuery('(min-width: 950px)');

    return (
        <Container>
            <Header />
            <TopBack>
                <BottomPosHome>
                    <RowDirectionBetween>
                        <ColDirection style={{alignSelf:'center'}}>
                            <HomeHeading>Expertise Shared,<br/>Growth Achieved,<br/>Difference Made.</HomeHeading>
                            <BackgroundCheckedM>
                                <TextChecked2>Browse Mentors</TextChecked2>
                            </BackgroundCheckedM>
                        </ColDirection>
                    <HeaderCartCompo/>
                    </RowDirectionBetween>
                </BottomPosHome>
            </TopBack>
            <BottomPosHome>
                <ColDirection >

                    <SocialHeading>Join Elite Network of <SocialHeading style={{ color: '#7476D1' }}>Educators & Leaders </SocialHeading></SocialHeading>
                    <ScrollSocial />

                </ColDirection>
            </BottomPosHome>
            <div style={{marginTop:'2%'}}>
                <BottomPosHome>
                    <MentorHeading>Discover the Incredible Benefits that <MentorHeading style={{ color: '#7476D1' }}>Mentoring</MentorHeading> Can Offer You</MentorHeading>
                    <MentorSubHeading>Mentoring is highly valued by managers, executives, and leaders as a highly effective
                        use of time that helps cultivate essential leadership skills.</MentorSubHeading>
                </BottomPosHome>
            </div>
             <MentorOffers/>
             <div style={{marginTop:'0.5%'}}>
                <BottomPosHome>
                    <MentorHeading>Let's Hit the Ground Running, We're Here to  <MentorHeading style={{ color: '#7476D1' }}>Support You</MentorHeading></MentorHeading>
                    <MentorSubHeading>Partnering with Us means you won't have to take care
                        of anything other than what you care about most.</MentorSubHeading>
                </BottomPosHome>
            </div>
            <InputHolder>
                <SupportCom />
            </InputHolder>
            <InputHolder>
                <MentorsFaq />
            </InputHolder>
            <InputHolder>
                <BottomNewsMentor>
                    <ColDirection>
                        <NewsHeadMentor>Become Part of the<br />
                            Leading Mentoring Community</NewsHeadMentor>
                        <MentorSubHeadingbtm>Thousands of mentees and mentors can't be wrong – with a 97% satisfaction rate,<br /> We are one of the highest quality mentoring communities out there.</MentorSubHeadingbtm>
                        <ButtonComp fontSize={'14px'} width={isMobile ? '13%' : '50%'} style={{ padding: '0.3%', marginTop: '2%' }} title='Become a Mentor' onClick={() => ''} />

                    </ColDirection>  
                </BottomNewsMentor>
            </InputHolder>

            <Footer />
        </Container>
    )
}
export default Mentor;