import React, { useEffect, useState } from "react";
import { ContainerDashboard } from "../StudentDahboardStyles";
import {
  PositionHeader,
  PositionImage,
  RightBorderDashboard,
  RightContainerDash,
} from "../../StudentDashboard/StudentDashboardStyles";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GetCountryList, findMentors } from "../../../api";
import { notifyError } from "../../Toastifycom";
import picture from "../../../Assets/Images/user.jpeg";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoneyIcon from "@mui/icons-material/Money";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Spinner from "../../Spinner";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../pages/AuthFlow/AuthStyles";
import HeaderDashboard from "../../Header/HeaderDashboard";
import { ContainerDa } from "../../StudentProfileDetails/StudentProfileStyles";
import Footer from "../../Footer";

type Mentor = {
  _id: string;
  userName: string;
  firstName: string;
  lastName: string;
  countryOfResidence: string;
  hourlyRate: number;
  attachments: Array<{
    attachmentPath: string;
    attachmentURL: string;
    name: string;
  }>;
};

type MentorList = Mentor[];

const MentorAppointmentBooking = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isMobile2 = useMediaQuery("(max-width: 1200px)");
  const [showFilter, setshowFilter] = useState(false);
  const [filters, setFilters] = useState({
    country: "",
    gender: "",
    course: "",
    location: "",
  });
  const [countries, setCountries] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [mentorList, setMentorList] = useState<MentorList>([]);

  // Create an array to hold the icons
  const starIcons = new Array(4).fill(<StarIcon />);
  // Create a single StarBorderIcon
  const starBorderIcon = <StarBorderIcon />;

  useEffect(() => {
    getAllCountries();
    getMentors();
  }, []);

  const getAllCountries = async () => {
    try {
      GetCountryList().then((e) => {
        setCountries(e?.map((list: any) => list.name));
      });
    } catch (error) {
      notifyError(error);
    }
  };

  const getMentors = () => {
    setshowFilter(false);
    setLoading(true);
    let payload = {
      countryOfResidence: filters.country,
      gender: filters.gender,
      mentoringarea: selectedOptions,
    };
    try {
      findMentors(payload)
        .then((e) => {
          setMentorList(e);
          setLoading(false);
        })
        .catch((err) => {
          notifyError(err);
        });
    } catch (error) {
      setLoading(false);
      notifyError(error);
    }
  };

  const weeks = [
    {
      day: "mon",
      date: "Oct 9",
      slots: "2 slots",
    },
    {
      day: "tue",
      date: "Oct 10",
      slots: "3 slots",
    },
    {
      day: "wed",
      date: "Oct 11",
      slots: "4 slots",
    },
    {
      day: "thu",
      date: "Oct 12",
      slots: "1 slot",
    },
    {
      day: "fri",
      date: "Oct 13",
      slots: "5 slots",
    },
    {
      day: "sat",
      date: "Oct 14",
      slots: "2 slots",
    },
    {
      day: "sun",
      date: "Oct 15",
      slots: "3 slots",
    },
    {
      day: "sun",
      date: "Oct 15",
      slots: "3 slots",
    },
    {
      day: "sun",
      date: "Oct 15",
      slots: "3 slots",
    },
  ];

  return (
    <>
      <Container>
        <HeaderDashboard />
        <ContainerDa>
          {loading && <Spinner />}
          <ContainerDashboard>
            <Stack flexDirection={"row"}>
              <Typography
                sx={{ mt: 1, mb: 2.5 }}
                textAlign={"left"}
                fontWeight={700}
                fontSize={"large"}
                noWrap
              >
                Session Booking
              </Typography>
            </Stack>
            <RightContainerDash>
              <Grid item sm={12} lg={12}>
                <Grid container spacing={3}>
                  <Grid item sm={12} lg={12}>
                    {mentorList?.slice(0, 1).map((mentor, index) => (
                      <>
                        <RightBorderDashboard>
                          <Stack
                            flexDirection={"row"}
                            gap={2}
                            width={isMobile ? "100%" : "70%"}
                          >
                            <img
                              style={
                                isMobile
                                  ? { width: "15%", borderRadius: "10px" }
                                  : { width: "10%", borderRadius: "10px" }
                              }
                              src={
                                mentor?.attachments[0]?.attachmentPath ||
                                picture
                              }
                            />
                            <Stack flexDirection={"column"}>
                              <Typography
                                textAlign={"left"}
                                noWrap
                                sx={{ color: "#5F61BE" }}
                                fontSize={"medium"}
                                fontWeight={600}
                              >
                                {mentor?.userName}
                              </Typography>

                              <Stack
                                flexDirection={"row"}
                                alignItems={"center"}
                              >
                                {new Array(4).fill(
                                  <StarIcon
                                    sx={{ color: "#FFD707" }}
                                    fontSize="small"
                                  />
                                )}
                                {new Array(1).fill(
                                  <StarBorderIcon fontSize="small" />
                                )}
                                <small>(17)</small>
                              </Stack>
                              <Typography
                                mt={2}
                                textAlign={"left"}
                                sx={{ color: "#757575" }}
                                fontSize={"small"}
                              >
                                {mentor.countryOfResidence}
                              </Typography>
                            </Stack>
                          </Stack>
                        </RightBorderDashboard>
                      </>
                    ))}
                  </Grid>

                  <Grid item sm={12} lg={6}>
                    <RightBorderDashboard>
                      <Stack gap={2} flexDirection={"column"}>
                        <Typography
                          textAlign={"left"}
                          fontSize={"large"}
                          fontWeight={600}
                        >
                          Meeting information
                        </Typography>
                        <Typography textAlign={"left"} fontSize={"small"}>
                          You will be able to pick and confirm a time after the
                          booking is confirmed.
                        </Typography>
                        <Typography
                          textAlign={"left"}
                          fontSize={"large"}
                          fontWeight={700}
                        >
                          Potential availabilities (in your local time)
                        </Typography>

                        <Stack
                          flexDirection={"row"}
                          gap={2}
                          width={isMobile ? 350 : "100%"}
                          sx={{ overflowX: "scroll" }}
                        >
                          {weeks.map((list) => (
                            <Stack
                              gap={1}
                              flexDirection={"column"}
                              alignItems={"center"}
                              sx={{
                                border: "1px solid #D6D6D6",
                                borderRadius: "10px",
                                p: 2,
                              }}
                            >
                              <Typography
                                textAlign={"left"}
                                fontWeight={600}
                                fontSize={"large"}
                                noWrap
                              >
                                {list.day}
                              </Typography>
                              <Typography
                                textAlign={"left"}
                                fontSize={"small"}
                                noWrap
                              >
                                {list.date}
                              </Typography>
                              <Typography
                                textAlign={"left"}
                                fontWeight={600}
                                fontSize={"small"}
                                noWrap
                              >
                                {list.slots}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>

                        <Stack flexDirection={"row"} gap={2}>
                          <Stack
                            sx={{ background: "#C9F6EF", borderRadius: "5px" }}
                            p={2}
                            width={"fit-content"}
                          >
                            <Typography noWrap fontSize={"small"}>
                              10:00
                            </Typography>
                          </Stack>

                          <Stack
                            sx={{ background: "#C9F6EF", borderRadius: "5px" }}
                            p={2}
                            width={"fit-content"}
                          >
                            <Typography noWrap fontSize={"small"}>
                              10:00
                            </Typography>
                          </Stack>

                          <Stack
                            sx={{ background: "#C9F6EF", borderRadius: "5px" }}
                            p={2}
                            width={"fit-content"}
                          >
                            <Typography noWrap fontSize={"small"}>
                              10:00
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </RightBorderDashboard>
                  </Grid>

                  <Grid item xs={12} sm={12} lg={6}>
                    <RightBorderDashboard>
                      <Stack
                        gap={2}
                        flexDirection={"column"}
                        sx={!isMobile ? { height: 320 } : {width:"100%"}}
                      >
                        <Typography
                          textAlign={"left"}
                          fontSize={"large"}
                          fontWeight={600}
                        >
                          Your Session
                        </Typography>
                        <Typography textAlign={"left"} fontSize={"small"}>
                          Introductory call carried out by Isaac Reynolds.
                        </Typography>

                        <Stack flexDirection={"column"} gap={2} mt={3} width={"100%"}>
                          <Stack
                            gap={1}
                            flexDirection={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            width={"100%"}
                          >
                            <Typography
                              textAlign={"left"}
                              fontSize={"small"}
                              noWrap
                            >
                              Price per session
                            </Typography>
                            <Typography
                              textAlign={"left"}
                              fontSize={"small"}
                              noWrap
                            >
                              $350
                            </Typography>
                          </Stack>

                          <Stack
                            gap={1}
                            flexDirection={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            width={"100%"}
                          >
                            <Typography
                              textAlign={"left"}
                              fontSize={"small"}
                              noWrap
                            >
                              Duration
                            </Typography>

                            <Typography
                              textAlign={"left"}
                              fontSize={"small"}
                              noWrap
                            >
                              30 Minutes
                            </Typography>
                          </Stack>

                          <Stack
                            gap={1}
                            flexDirection={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            width={"100%"}
                          >
                            <Typography
                              textAlign={"left"}
                              fontSize={"small"}
                              noWrap
                            >
                              Promo Code
                            </Typography>

                            <Typography
                              textAlign={"left"}
                              fontSize={"small"}
                              noWrap
                            >
                              -
                            </Typography>
                          </Stack>

                          <Stack
                            gap={1}
                            flexDirection={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            width={"100%"}
                            mt={2}
                          >
                            <Typography
                              textAlign={"left"}
                              fontSize={"small"}
                              fontWeight={700}
                              noWrap
                            >
                              Total
                            </Typography>

                            <Typography
                              textAlign={"left"}
                              fontSize={"small"}
                              fontWeight={700}
                              noWrap
                            >
                              $300
                            </Typography>
                          </Stack>

                          <Button
                            size="small"
                            variant="contained"
                            // onClick={() =>
                            //   navigate(`/bookAppointment?id=${mentor?._id}`)
                            // }
                          >
                            Proceed to Pay
                          </Button>
                        </Stack>
                      </Stack>
                    </RightBorderDashboard>
                  </Grid>

                </Grid>
              </Grid>
            </RightContainerDash>
          </ContainerDashboard>
        </ContainerDa>
        <Footer />
      </Container>
    </>
  );
};

export default MentorAppointmentBooking;
