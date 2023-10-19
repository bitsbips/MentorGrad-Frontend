import React from "react";
import Header from "../../components/Header/Header";
import {
  BackCart,
  BackgroundChecked1,
  BoldHeading,
  BottomBackCart,
  BottomPos,
  Box,
  BoxText,
  ButtonsPosition,
  ButtonsWidth,
  ColorContainer,
  Columnpos,
  Columnpos1,
  Container,
  Content,
  GroupHeading,
  GroupPosition,
  GroupRight,
  Head,
  Image1,
  Image2,
  Image2Box,
  ImagePosition,
  ImagePosition1,
  LeftImage,
  LeftWidth,
  Leftbtmtext,
  MobImg,
  Name,
  Profession,
  RightImage,
  Rightbtmtext,
  Rightimgpo,
  StarImage,
  SubHead,
  SubTitle1,
  SubTitle2,
  SubTitle3,
  TextChecked1,
  Title1,
  TopBack,
  UserImage,
  WriterName,
} from "./AboutStyles";
import ButtonComp from "../../components/Button";
import LinkText from "../../components/LinkText";
import Example from "../../Assets/Images/BackLeft.png";
import Mask1 from "../../Assets/Images/Mask1.png";
import Mask2 from "../../Assets/Images/Mask2.png";

import {
  BackgroundChecked,
  InputHolder,
  TextChecked,
} from "../../components/UserForm/UserFormStyles";
import { ContentHome, Mentors } from "../../Data/Data";
import Group1 from "../../Assets/Images/group-1.png";
import Group2 from "../../Assets/Images/group-2.png";
import Star from "../../Assets/Images/star-0.png";
import Footer from "../../components/Footer";
import HorizontalScroll from "react-scroll-horizontal";
import { useNavigate } from "react-router-dom";
import OurMentors from "../../components/OurMentors/OurMentors";
import useMediaQuery from "../../hooks/MediaQuery";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import { Column, Row, RowAbout } from "../Home/HomeStyles";

const AccordionStyle = styled.div`
  background-color: #f2f5f9;
  width: 98%;
  border-radius: 20px;

  @media (max-width: 750px) {
    width: 100%;
    margin: auto;
  }
`;
const AccordionHead = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  /* identical to box height, or 300% */
  text-align: center;
  align-self: center;
  color: #000000;
  margin: 0;
`;
const AccordionSubHead = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  /* or 186% */
  text-align: left;

  margin: 0;
  color: #222222;
`;

const Group = [
  {
    id: 0,
    image: Group2,
    heading: "Our Vision",
    subheading:
      "Vitae platea fermentum, in pellentesque lectus vitae. Iaculis sit viverra vulputate proin malesuada mollis. Morbi quis a, sapien, in pellentesque.",
  },
  {
    id: 1,
    image: Group1,
    heading: "Our Mission",
    subheading:
      "Vitae platea fermentum, in pellentesque lectus vitae. Iaculis sit viverra vulputate proin malesuada mollis. Morbi quis a, sapien, in pellentesque.",
  },
];

const About = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(min-width: 950px)");

  return (
    <Container>
      <Header />
      <>
        <TopBack>
          <Head>Our Journey of Personal Growth and Development</Head>
          <SubHead>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum."
          </SubHead>
          <ButtonsWidth>
            <ButtonsPosition>
              <ButtonComp
                fontSize={"14px"}
                width={isMobile ? "50%" : "50%"}
                style={{ padding: "2%", alignSelf: "center" }}
                title="Find a Mentor"
                onClick={() => ""}
              />
              <LinkText
                style={{ marginTop: "4%" }}
                title="Become a Mentor"
                onClick={() => navigate("/mentor/signup")}
              />
            </ButtonsPosition>
          </ButtonsWidth>
        </TopBack>
        <BottomPos>
          <ImagePosition>
            <Image2 src={Mask1} />

            <Image2 src={Mask2} />
            <Image2 src={Example} />
          </ImagePosition>
        </BottomPos>
        <InputHolder>
          <Content>
            “A mentor is someone who sees more talent and ability within you,
            than you see in yourself, and helps bring it out of you.”
          </Content>
          <WriterName>Bob Proctor</WriterName>
        </InputHolder>
        <InputHolder>
          <BottomPos>
            <ImagePosition>
              <div>
                <Image2Box src={Mask1} />
              </div>
              <Columnpos style={{ alignSelf: "center" }}>
                <Title1>
                  Building A Brighter Future Through Holistic Mentoring
                </Title1>
                <SubTitle1>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo veritatis et quasi architecto beatae vitae
                  dicta sunt
                </SubTitle1>
                <AccordionStyle>
                  {ContentHome.map((data) => {
                    return (
                      <Accordion
                        sx={{
                          "&:before": {
                            display: "none",
                          },
                        }}
                        style={{
                          backgroundColor: "#F2F5F9",
                          borderRadius: 10,
                          marginBottom: 10,
                        }}
                      >
                        <AccordionSummary
                          expandIcon={
                            <ExpandMoreIcon style={{ color: "#7476D1" }} />
                          }
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <AccordionHead>{data.label}</AccordionHead>
                        </AccordionSummary>
                        <AccordionDetails>
                          <AccordionSubHead>{data.content}</AccordionSubHead>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </AccordionStyle>
              </Columnpos>
            </ImagePosition>
          </BottomPos>
        </InputHolder>
        <InputHolder>
          <ColorContainer style={{ marginBottom: "3%" }}>
            <RowAbout>
              <LeftWidth style={{ alignSelf: "center" }}>
                <Columnpos1
                  style={
                    isMobile
                      ? { alignSelf: "center", marginLeft: "17%" }
                      : { alignSelf: "center", margin: "auto", width: "90%" }
                  }
                >
                  <Title1>
                    Holistic Approach to Mentoring Ensures That You Achieve
                    Balance in All Areas of Life
                  </Title1>
                  <SubTitle1>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo veritatis et quasi
                    architecto beatae vitae dicta sunt
                  </SubTitle1>
                  <hr
                    style={{
                      background: "#D6D6D6",
                      color: "#D6D6D6",
                      borderColor: "#D6D6D6",
                      height: "2px",
                    }}
                  />
                  {Group.map((data) => {
                    return (
                      <GroupPosition>
                        <LeftImage src={data.image} />
                        <GroupRight>
                          <GroupHeading>{data.heading}</GroupHeading>
                          <SubTitle2>{data.subheading}</SubTitle2>
                        </GroupRight>
                      </GroupPosition>
                    );
                  })}
                </Columnpos1>
              </LeftWidth>
              <Rightimgpo>
                <RightImage src={Mask1} />
              </Rightimgpo>
            </RowAbout>
          </ColorContainer>
        </InputHolder>
        <InputHolder>
          <OurMentors />
        </InputHolder>
      </>
      <Footer />
    </Container>
  );
};
export default About;
