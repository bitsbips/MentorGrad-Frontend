import React, { useState } from "react";
import {
  BackgroundChecked1,
  BackgroundChecked2,
  Container,
  Head,
  SubHead,
  TextChecked1,
  TopBack,
} from "../About/AboutStyles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import "./Home.css";
import {
  BackgroundCheckedSearch,
  BoldHeading,
  BottomNewsHome,
  BottomPosHome,
  ButtonsWidth,
  ColDirection,
  Column,
  HeaderImage,
  HeaderImageContentBack,
  HeaderImageContentBackTexta,
  HeaderImageContentBackTextb,
  HomeHeading,
  HomeSubHeading,
  HomeSubHeading1,
  LightTextPurple,
  NewsHead,
  NewsSubHeading,
  Row,
  RowDirection,
  RowDirectionBetween,
  RowWorks,
  Scrolls,
  SearchBack,
  SearchBar,
  SearchIcon,
  SlideHolder,
  SlideImage,
  SocialHeading,
  WorksBack,
  WorksBack1,
  WorksHeading,
  WorksImage,
  WorksSubHeading,
} from "./HomeStyles";
import { Works } from "../../Data/Data";
import WorksImaage from "../../Assets/Images/backworks.svg";
import BottomLink from "../../components/BottomLink";
import LinkText from "../../components/LinkText";
import MembersReview from "../../components/MembersReview";
import SimpleAccordion from "../../components/Faqs";
import ButtonComp from "../../components/Button";
import OurMentors from "../../components/OurMentors/OurMentors";
import ScrollSocial from "../../components/ScrollSocial";
import Profile from "../../Assets/Images/user.svg";
import RightImage from "../../components/RightImage";
import IconSearch from "../../Assets/Images/icon_search.svg";
import { InputAdornment, TextField } from "@mui/material";
import useMediaQuery from "../../hooks/MediaQuery";
import { InputHolder } from "../../components/UserForm/UserFormStyles";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const isMobile = useMediaQuery("(min-width: 950px)");

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  return (
    <Container>
      <Header />
      <>
        <TopBack>
          <BottomPosHome>
            <RowDirection>
              <ColDirection style={{ alignSelf: "center" }}>
                <LightTextPurple>Learn from the Best</LightTextPurple>
                <HomeHeading>
                  Connect With International Student Mentors Globally.
                </HomeHeading>
                <HomeSubHeading>
                  Mentorgrad platform allows you to receive guidance and support
                  from current international students for your international
                  university applications.
                </HomeSubHeading>
                <SearchBack>
                  <div
                    style={
                      isMobile
                        ? {
                            marginTop: "0%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            width: "95%",
                          }
                        : { display: "flex", flexDirection: "column" }
                    }
                  >
                    <div style={{ width: "70%" }}>
                      <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback">
                          <img
                            src={IconSearch}
                            style={{
                              width: "20px",
                              marginTop: "6px",
                              marginLeft: "-15px",
                            }}
                          />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Where do you want to study?"
                          style={{ borderWidth: 0, backgroundColor: "#F2F5F9" }}
                        />
                      </div>
                    </div>
                    <BackgroundCheckedSearch>
                      <TextChecked1>Browse Mentors</TextChecked1>
                    </BackgroundCheckedSearch>
                  </div>
                </SearchBack>
              </ColDirection>
              {isMobile ? <RightImage /> : <></>}
            </RowDirection>
          </BottomPosHome>
        </TopBack>
        <BottomPosHome>
          <ColDirection>
            <SocialHeading>
              Obtain Guidance from Current and Past{" "}
              <SocialHeading style={{ color: "#7476D1" }}>
                International Students!{" "}
              </SocialHeading>
            </SocialHeading>
            <ScrollSocial />
          </ColDirection>
        </BottomPosHome>
        <BottomPosHome>
          <RowDirection style={{ marginTop: "4%" }}>
            <ColDirection>
              <BoldHeading>
                How Does It{" "}
                <BoldHeading style={{ color: "#7476D1" }}>Work? </BoldHeading>
              </BoldHeading>
              <HomeSubHeading1>
                Our mentors who are current international students assist in
                helping aspiring students understand the complexities of the
                admission process, including the paperwork, language proficiency
                tests, and scholarship opportunities available. They provide
                guidance on which universities to apply to, which courses to
                pursue based on personal academic goals, and even offer insights
                into the culture and lifestyle of the host country.{" "}
                <Link to={""}>Learn More.</Link>
              </HomeSubHeading1>
              {isMobile ? <WorksImage src={WorksImaage} /> : <></>}
              {isMobile ? (
                <ButtonsWidth>
                  <BackgroundChecked2>
                    <TextChecked1>Find my Mentor</TextChecked1>
                  </BackgroundChecked2>
                  <div style={{ alignSelf: "center", marginLeft: "4%" }}>
                    <LinkText title="Become a Mentor" onClick={() => ""} />
                  </div>
                </ButtonsWidth>
              ) : (
                <></>
              )}
            </ColDirection>
            <ColDirection>
              {Works.map((data, insdex) => {
                return (
                  <>
                    {data.id === 1 ? (
                      <WorksBack1>
                        <RowWorks>
                          <img
                            src={data.image}
                            style={{ alignSelf: "center", marginLeft: "1%" }}
                          />
                          <ColDirection style={{ marginLeft: "4%" }}>
                            <WorksHeading>{data.label}</WorksHeading>
                            <WorksSubHeading>{data.sublabel}</WorksSubHeading>
                          </ColDirection>
                        </RowWorks>
                      </WorksBack1>
                    ) : (
                      <WorksBack>
                        <RowWorks>
                          <img
                            src={data.image}
                            style={{ alignSelf: "center", marginLeft: "1%" }}
                          />

                          <ColDirection
                            style={{ marginLeft: "4%", alignSelf: "center" }}
                          >
                            <WorksHeading>{data.label}</WorksHeading>
                            <WorksSubHeading>{data.sublabel}</WorksSubHeading>
                          </ColDirection>
                        </RowWorks>
                      </WorksBack>
                    )}
                  </>
                );
              })}
            </ColDirection>
            {isMobile ? (
              <></>
            ) : (
              <ButtonsWidth>
                <BackgroundChecked2>
                  <TextChecked1>Find my Mentor</TextChecked1>
                </BackgroundChecked2>
                <div style={{ alignSelf: "center", marginLeft: "4%" }}>
                  <LinkText
                    title="Become a Mentor"
                    onClick={() => navigate("/mentor/signup")}
                  />
                </div>
              </ButtonsWidth>
            )}
          </RowDirection>
        </BottomPosHome>
        <hr
          style={{
            background: "#C7D4E4",
            color: "#C7D4E4",
            borderColor: "#C7D4E4",
            height: "2px",
          }}
        />
        <OurMentors />
        <hr
          style={{
            background: "#C7D4E4",
            color: "#C7D4E4",
            borderColor: "#C7D4E4",
            height: "2px",
          }}
        />
        <MembersReview />
        <hr
          style={{
            background: "#C7D4E4",
            color: "#C7D4E4",
            borderColor: "#C7D4E4",
            height: "2px",
            marginTop: "3%",
          }}
        />
        <InputHolder>
          <SimpleAccordion />
        </InputHolder>
        <InputHolder>
          <BottomNewsHome>
            <RowDirectionBetween>
              <ColDirection>
                <NewsHead>Our Newsletter</NewsHead>
                <NewsSubHeading>
                  Ready to take your skills to the next level? Subscribe to our
                  newsletter today and receive exclusive insights, tips, and
                  opportunities from our expert mentors. Join our community of
                  learners and start your journey towards success now!
                </NewsSubHeading>
              </ColDirection>
              <ButtonComp
                fontSize={"14px"}
                width={isMobile ? "30%" : "50%"}
                style={{
                  padding: "0.5%",
                  alignSelf: "center",
                  marginTop: "-3.5%",
                }}
                title="Subscribe Now"
                onClick={() => ""}
              />
            </RowDirectionBetween>
          </BottomNewsHome>
        </InputHolder>
      </>
      <Footer />
    </Container>
  );
};

export default Home;
