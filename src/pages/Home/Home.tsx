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
  SocialHeading2,
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
//import Profile from '../../Assets/Images/user.svg';
import RightImage from "../../components/RightImage";
import IconSearch from "../../Assets/Images/icon_search.svg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import useMediaQuery from "../../hooks/MediaQuery";
import { InputHolder } from "../../components/UserForm/UserFormStyles";
import { Link, useNavigate } from "react-router-dom";
import BirminghamUniversity from "../../Assets/Images/birminghamuniversity.png";

import Woman from "../../Assets/Images/beautiful-woman-staying-connected-with-internet.png";

import HowItWorksWoman from "../../Assets/Images/howitworkswoman.png";

import JohnDoe from "../../Assets/Images/JohnDoeHome.png";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Home = () => {
  const isNotMobile = useMediaQuery("(min-width: 950px)");

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  return (
    <Container>
      <Header />
      <>
        <Box
          sx={{
            backgroundColor: "#D1D2F4",
            pt: 4,
            "@media (max-width:950px)": {
              pb: 4, // Padding for screens from medium (md) and up
            },
          }}
        >
          <Box sx={{ width: "max(90%, 500px)", m: "0 auto" }}>
            <Box>
              <Grid container sx={{ width: "80%", m: "0 auto" }}>
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    <p style={{ color: "#7476D1", fontSize: "20px" }}>
                      Embrace the power of connections!
                    </p>
                    <h1 style={{ fontWeight: 700 }}>
                      Connect With International{" "}
                      <span style={{ color: "#7476D1" }}>Student Mentors</span>{" "}
                      and Universities
                    </h1>
                    <p>
                      We don't match you with study programs! We match you with
                      mentors and universities. We ensure that you enrol in a
                      university and study program that is best suited to you.
                    </p>
                    <input
                      style={{
                        fontSize: "16px",
                        padding: "10px 10px 10px 20px",
                        width: "70%",
                        borderRadius: "15px",
                        border: "1px solid #FFE9D4",
                      }}
                      placeholder="Where do you want to study?"
                    />
                  </Box>
                </Grid>
                {isNotMobile && (
                  <Grid item xs={12} md={4}>
                    <img src={Woman} alt="Woman" style={{ width: "400px" }} />
                  </Grid>
                )}
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            background:
              "linear-gradient(180deg, rgba(186,187,228,1) 0%, rgba(201,246,239,1) 100%)",
            py: 20,
          }}
        >
          <Box sx={{ width: "max(90%, 500px)", m: "0 auto" }}>
            <Box sx={{ width: "80%", m: "0 auto" }}>
              <h1 style={{ fontWeight: 700 }}>
                Our mentors are from the worlds leading universities
              </h1>
              <Grid
                container
                columnGap={2}
                justifyContent={"center"}
                sx={{ mt: 10 }}
              >
                <Grid item xl={2.5} md={5} xs={12}>
                  <img src={BirminghamUniversity} alt="university" />
                </Grid>
                <Grid item xl={2.5} md={5} xs={12}>
                  <img src={BirminghamUniversity} alt="university" />
                </Grid>
                <Grid item xl={2.5} md={5} xs={12}>
                  <img src={BirminghamUniversity} alt="university" />
                </Grid>
                <Grid item xl={2.5} md={5} xs={12}>
                  <img src={BirminghamUniversity} alt="university" />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            py: 10,
          }}
        >
          <Box sx={{ width: "max(90%, 500px)", m: "0 auto" }}>
            <Box sx={{ width: "90%", m: "0 auto" }}>
              <Grid container>
                <Grid item xl={6}>
                  <img
                    src={HowItWorksWoman}
                    alt="How it works"
                    style={{ width: "75%" }}
                  />
                </Grid>
                <Grid item xl={6} sx={{ textAlign: "left" }}>
                  <h1 style={{ fontWeight: 700 }}>How does it works?</h1>
                  <p
                    style={{
                      width: "80%",
                      fontSize: "20px",
                      marginBottom: "80px",
                    }}
                  >
                    Our mentors who are current international students assist in
                    helping aspiring students understand the complexities of the
                    admission process, including the paperwork, language
                    proficiency tests, and scholarship opportunities available.
                  </p>
                  <Box
                    sx={{
                      backgroundColor: "#C9F6EF",
                      px: 2,
                      py: 3,
                      mb: 1.6,
                      borderRadius: "15px",
                    }}
                  >
                    <h6>Browse Mentors</h6>
                    <p>
                      Use the search option to search for mentors. You may
                      filter the results based on your country or other
                      preferences.
                    </p>
                  </Box>
                  <Grid container columnGap={1.6} rowGap={1.6}>
                    <Grid item xs={12} xl={5.9} lg={12}>
                      <Box
                        sx={{
                          backgroundColor: "#7476D1",
                          px: 2,
                          py: 3,
                          borderRadius: "15px",
                          color: "white",
                        }}
                      >
                        <h6>Send Session Request</h6>
                        <p>
                          Have you narrowed your search for potential mentors?
                          It’s time to connect!
                        </p>
                      </Box>
                    </Grid>
                    <Grid item xs={12} xl={5.9} lg={12}>
                      <Box
                        sx={{
                          backgroundColor: "#7476D1",
                          px: 2,
                          py: 3,
                          borderRadius: "15px",
                          color: "white",
                        }}
                      >
                        <h6>Connect 1:1</h6>
                        <p>
                          Set up calls and chat with your mentor! Make the best
                          of your connection!
                        </p>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            py: 10,
          }}
        >
          <Box sx={{ width: "max(90%, 500px)", m: "0 auto" }}>
            <Box sx={{ width: "80%", m: "0 auto" }}>
              <Grid container>
                <Grid item xl={9} xs={12} sx={{ textAlign: "left" }}>
                  <p style={{ color: "#7476D1" }}>Mentors</p>
                  <h2 style={{ fontWeight: 700 }}>
                    Meet our international student Mentors
                  </h2>
                  <p>
                    Discover exceptional mentors and services curated just for
                    you. No hidden fees or commitments - just accelerated career
                    development.
                  </p>
                </Grid>
                <Grid
                  item
                  xs={12}
                  xl={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#C9F6EF",
                      color: "#000",
                      width: "50%",
                    }}
                  >
                    View All
                  </Button>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  mt: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  overflowX: "auto",
                }}
              >
                <Box sx={{ textAlign: "left", mr: 4 }}>
                  <img
                    style={{ width: "200px", marginBottom: "10px" }}
                    src={JohnDoe}
                    alt="user"
                  />
                  <p style={{ fontSize: "28px" }}>John Doe</p>
                  <p style={{ marginTop: "-20px" }}>Startup Mentor</p>
                </Box>

                <Box sx={{ textAlign: "left", mr: 4 }}>
                  <img
                    style={{ width: "200px", marginBottom: "10px" }}
                    src={JohnDoe}
                    alt="user"
                  />
                  <p style={{ fontSize: "28px" }}>John Doe</p>
                  <p style={{ marginTop: "-20px" }}>Startup Mentor</p>
                </Box>
                <Box sx={{ textAlign: "left", mr: 4 }}>
                  <img
                    style={{ width: "200px", marginBottom: "10px" }}
                    src={JohnDoe}
                    alt="user"
                  />
                  <p style={{ fontSize: "28px" }}>John Doe</p>
                  <p style={{ marginTop: "-20px" }}>Startup Mentor</p>
                </Box>
                <Box sx={{ textAlign: "left", mr: 4 }}>
                  <img
                    style={{ width: "200px", marginBottom: "10px" }}
                    src={JohnDoe}
                    alt="user"
                  />
                  <p style={{ fontSize: "28px" }}>John Doe</p>
                  <p style={{ marginTop: "-20px" }}>Startup Mentor</p>
                </Box>
                <Box sx={{ textAlign: "left", mr: 4 }}>
                  <img
                    style={{ width: "200px", marginBottom: "10px" }}
                    src={JohnDoe}
                    alt="user"
                  />
                  <p style={{ fontSize: "28px" }}>John Doe</p>
                  <p style={{ marginTop: "-20px" }}>Startup Mentor</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            py: 10,
            backgroundColor: "#7476D1",
          }}
        >
          <Box sx={{ width: "max(90%, 500px)", m: "0 auto" }}>
            <Box sx={{ width: "80%", m: "0 auto" }}>
              <Grid container>
                <Grid item xl={9} xs={12} sx={{ textAlign: "left" }}>
                  <p style={{ color: "#C9F6EF" }}>Testimonials</p>
                  <h2 style={{ fontWeight: 700, color: "white" }}>
                    What do members say about us!
                  </h2>
                </Grid>
                <Grid
                  item
                  xs={12}
                  xl={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#C9F6EF",
                      color: "#000",
                      width: "50%",
                    }}
                  >
                    Find Mentors
                  </Button>
                </Grid>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    mt: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  gap={2}
                >
                  <Grid
                    item
                    sx={{
                      backgroundColor: "white",
                      textAlign: "left",
                      borderRadius: "15px",
                      p: 3,
                      mx: 2,
                    }}
                    lg={3}
                    md={6}
                    xs={12}
                  >
                    <h2>Always up to date</h2>
                    <p>
                      Thanks to my mentor, I was able to land my dream job!
                      Their guidance and support throughout the application
                      process were invaluable. I highly recommend this
                      mentorship program.
                    </p>
                    <Grid container>
                      <Grid item xs={3}>
                        <img
                          src={JohnDoe}
                          alt="user"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      </Grid>
                      <Grid item xs={9}>
                        <h6>John Doe</h6>
                        <p>Graphic Designer</p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      backgroundColor: "white",
                      textAlign: "left",
                      borderRadius: "15px",
                      p: 3,
                      mx: 2,
                    }}
                    lg={3}
                    md={6}
                    xs={12}
                  >
                    <h2>Always up to date</h2>
                    <p>
                      Thanks to my mentor, I was able to land my dream job!
                      Their guidance and support throughout the application
                      process were invaluable. I highly recommend this
                      mentorship program.
                    </p>
                    <Grid container>
                      <Grid item xs={3}>
                        <img
                          src={JohnDoe}
                          alt="user"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      </Grid>
                      <Grid item xs={9}>
                        <h6>John Doe</h6>
                        <p>Graphic Designer</p>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      backgroundColor: "white",
                      textAlign: "left",
                      borderRadius: "15px",
                      p: 3,
                      mx: 2,
                    }}
                    lg={3}
                    md={6}
                    xs={12}
                  >
                    <h2>Always up to date</h2>
                    <p>
                      Thanks to my mentor, I was able to land my dream job!
                      Their guidance and support throughout the application
                      process were invaluable. I highly recommend this
                      mentorship program.
                    </p>
                    <Grid container>
                      <Grid item xs={3}>
                        <img
                          src={JohnDoe}
                          alt="user"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      </Grid>
                      <Grid item xs={9}>
                        <h6>John Doe</h6>
                        <p>Graphic Designer</p>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box sx={{ py: 20, backgroundColor: "white" }}>
          <Box sx={{ width: "max(90%, 500px)", m: "0 auto" }}>
            <Box sx={{ width: "80%", m: "0 auto" }}>
              <Grid container>
                <Grid item xs={12} lg={5} sx={{ textAlign: "left" }}>
                  <p style={{ color: "#7476D1", fontWeight: "bold" }}>
                    General FAQs
                  </p>
                  <h1 style={{ fontWeight: "bold" }}>
                    Frequently Asked
                    <br />
                    Questions
                  </h1>
                </Grid>
                <Grid item xs={12} lg={7}>
                  <div>
                    <Accordion elevation={0} sx={{ border: "none" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography sx={{ fontWeight: "bold" }}>
                          What is mentorship and how can it benefit me?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Thanks to my mentor, I was able to land my dream job!
                          Their guidance and support throughout the application
                          process were invaluable. I highly recommend this
                          mentorship program.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={0} sx={{ border: "none" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography sx={{ fontWeight: "bold" }}>
                          What is mentorship and how can it benefit me?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Thanks to my mentor, I was able to land my dream job!
                          Their guidance and support throughout the application
                          process were invaluable. I highly recommend this
                          mentorship program.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={0} sx={{ border: "none" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography sx={{ fontWeight: "bold" }}>
                          What is mentorship and how can it benefit me?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Thanks to my mentor, I was able to land my dream job!
                          Their guidance and support throughout the application
                          process were invaluable. I highly recommend this
                          mentorship program.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={0} sx={{ border: "none" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography sx={{ fontWeight: "bold" }}>
                          What is mentorship and how can it benefit me?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Thanks to my mentor, I was able to land my dream job!
                          Their guidance and support throughout the application
                          process were invaluable. I highly recommend this
                          mentorship program.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        {/* <TopBack>
          <BottomPosHome>
            <RowDirection>
              <ColDirection style={{ alignSelf: 'center' }}>
                <LightTextPurple>Learn from the Best</LightTextPurple>
                <HomeHeading>
                  Connect With Experienced Mentors In Your Field.
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
                            marginTop: '0%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '95%',
                          }
                        : { display: 'flex', flexDirection: 'column' }
                    }
                  >
                    <div style={{ width: '70%' }}>
                      <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback">
                          <img
                            src={IconSearch}
                            style={{
                              width: '20px',
                              marginTop: '6px',
                              marginLeft: '-15px',
                            }}
                          />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Where do you want to study?"
                          style={{ borderWidth: 0, backgroundColor: '#F2F5F9' }}
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
              Obtain Guidance from Current and Past{' '}
              <SocialHeading2 style={{ color: '#7476D1' }}>
                International Students!{' '}
              </SocialHeading2>
            </SocialHeading>
            <ScrollSocial />
          </ColDirection>
        </BottomPosHome>
        <BottomPosHome>
          <RowDirection style={{ marginTop: '4%' }}>
            <ColDirection>
              <BoldHeading>
                How Does It{' '}
                <BoldHeading style={{ color: '#7476D1' }}>Work? </BoldHeading>
              </BoldHeading>
              <HomeSubHeading1>
                Our mentors who are current international students assist in
                helping aspiring students understand the complexities of the
                admission process, including the paperwork, language proficiency
                tests, and scholarship opportunities available. They provide
                guidance on which universities to apply to, which courses to
                pursue based on personal academic goals, and even offer insights
                into the culture and lifestyle of the host country.{' '}
                <Link to={''}>Learn More.</Link>
              </HomeSubHeading1>
              {isMobile ? <WorksImage src={WorksImaage} /> : <></>}
              {isMobile ? (
                <ButtonsWidth>
                  <BackgroundChecked2>
                    <TextChecked1>Find my Mentor</TextChecked1>
                  </BackgroundChecked2>
                  <div style={{ alignSelf: 'center', marginLeft: '4%' }}>
                    <LinkText
                      title="Become a Mentor"
                      onClick={() => navigate('/mentor/signup')}
                    />
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
                            style={{ alignSelf: 'center', marginLeft: '1%' }}
                          />
                          <ColDirection style={{ marginLeft: '4%' }}>
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
                            style={{ alignSelf: 'center', marginLeft: '1%' }}
                          />

                          <ColDirection
                            style={{ marginLeft: '4%', alignSelf: 'center' }}
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
                <div style={{ alignSelf: 'center', marginLeft: '4%' }}>
                  <LinkText
                    title="Become a Mentor"
                    onClick={() => navigate('/mentor/signup')}
                  />
                </div>
              </ButtonsWidth>
            )}
          </RowDirection>
        </BottomPosHome>
        <hr
          style={{
            background: '#C7D4E4',
            color: '#C7D4E4',
            borderColor: '#C7D4E4',
            height: '2px',
          }}
        />
        <OurMentors />
        <hr
          style={{
            background: '#C7D4E4',
            color: '#C7D4E4',
            borderColor: '#C7D4E4',
            height: '2px',
          }}
        />
        <MembersReview />
        <hr
          style={{
            background: '#C7D4E4',
            color: '#C7D4E4',
            borderColor: '#C7D4E4',
            height: '2px',
            marginTop: '3%',
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
                fontSize={'14px'}
                width={isMobile ? '20%' : '100%'}
                style={{
                  padding: '0.5%',
                  alignSelf: 'center',
                  marginTop: '-3.5%',
                }}
                title="Subscribe Now"
                onClick={() => ''}
              />
            </RowDirectionBetween>
          </BottomNewsHome>
        </InputHolder> */}
      </>
      <Footer />
    </Container>
  );
};

export default Home;
