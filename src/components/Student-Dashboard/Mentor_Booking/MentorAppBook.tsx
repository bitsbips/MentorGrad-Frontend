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
import { GetCountryList, findMentors, getMentorForBooking } from "../../../api";
import { notifyError } from "../../Toastifycom";
import picture from "../../../Assets/Images/user.jpeg";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoneyIcon from "@mui/icons-material/Money";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Spinner from "../../Spinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container } from "../../../pages/AuthFlow/AuthStyles";
import HeaderDashboard from "../../Header/HeaderDashboard";
import { ContainerDa } from "../../StudentProfileDetails/StudentProfileStyles";
import Footer from "../../Footer";
import { format } from "date-fns";

type Mentor = {
  application: {
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
  next30Days: Array<{
    date: string;
    mentorAvailability: any;
    weekDay: string;
  }>;
};

type day = {
  list: {
    date: string;
    mentorAvailability: any;
    weekDay: string;
  };
  index: number;
};

type slot = {
  slotHours: string;
  isBooked: boolean;
  _id: string;
  index: number;
};

const MentorAppointmentBooking = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(false);
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [selectedDay, setselectedDay] = useState<day | null>(null);
  const [selectedSlot, setselectedSlot] = useState<slot | null>(null);

  let [searchParams] = useSearchParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      getMentorForBooking({
        mentorId: searchParams.get("id"),
      }).then((e) => {
        setMentor(e);
        setselectedDay({ list: e?.next30Days[0], index: 0 });
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      notifyError(error);
    }
  };

  function getDateString(dateString: string, component: string) {
    const date = new Date(dateString);

    switch (component) {
      case "day":
        return format(date, "d"); // Day of the month.
      case "month":
        return format(date, "MMM");
      case "year":
        return format(date, "y"); // Year.
      case "dayName":
        return format(date, "E"); // Abbreviated day name (e.g., "Mon").
      default:
        return null;
    }
  }

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
                  <Grid item xs={12} sm={12} lg={12}>
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
                            mentor?.application?.attachments[0]
                              ?.attachmentPath || picture
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
                            {mentor?.application?.userName}
                          </Typography>

                          <Stack flexDirection={"row"} alignItems={"center"}>
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
                            {mentor?.application?.countryOfResidence}
                          </Typography>
                        </Stack>
                      </Stack>
                    </RightBorderDashboard>
                  </Grid>

                  <Grid item xs={12} sm={12} lg={6}>
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
                          {mentor?.next30Days.map((list, index) => (
                            <Stack
                              gap={1}
                              flexDirection={"column"}
                              alignItems={"center"}
                              sx={
                                selectedDay?.index !== index
                                  ? {
                                      border: "1px solid #D6D6D6",
                                      borderRadius: "10px",
                                      p: 2,
                                      cursor: "pointer",
                                    }
                                  : {
                                      border: "1px solid #D6D6D6",
                                      borderRadius: "10px",
                                      p: 2,
                                      cursor: "pointer",
                                      background: "#C9F6EF",
                                    }
                              }
                              onClick={() => {
                                setselectedDay({ list, index });
                                setselectedSlot(null);
                              }}
                            >
                              <Typography
                                textAlign={"left"}
                                fontWeight={600}
                                fontSize={"large"}
                                noWrap
                              >
                                {getDateString(list?.date, "dayName")}
                              </Typography>
                              <Typography
                                textAlign={"left"}
                                fontSize={"small"}
                                noWrap
                              >
                                {getDateString(list?.date, "day")}{" "}
                                {getDateString(list?.date, "month")}
                              </Typography>
                              <Typography
                                textAlign={"left"}
                                fontWeight={600}
                                fontSize={"small"}
                                noWrap
                              >
                                {list?.mentorAvailability?.length} slots
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>

                        <Stack
                          flexDirection={"row"}
                          gap={2}
                          sx={
                            selectedDay?.list?.mentorAvailability?.length > 4
                              ? { overflowX: "scroll" }
                              : isMobile
                              ? { overflowX: "scroll" }
                              : {}
                          }
                        >
                          {selectedDay?.list?.mentorAvailability?.map(
                            (slot: any, index: number) => (
                              <Stack
                                sx={
                                  selectedSlot?.index !== index
                                    ? {
                                        background: "#C9F6EF",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                      }
                                    : {
                                        background: "#5F61BE",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        color: "#fff",
                                      }
                                }
                                p={1}
                                width={"fit-content"}
                                onClick={() =>
                                  setselectedSlot({ ...slot, index })
                                }
                              >
                                <Typography noWrap fontSize={"small"}>
                                  {slot?.slotHours}
                                </Typography>
                              </Stack>
                            )
                          )}
                        </Stack>
                      </Stack>
                    </RightBorderDashboard>
                  </Grid>

                  <Grid item xs={12} sm={12} lg={6}>
                    <RightBorderDashboard>
                      <Stack
                        gap={2}
                        flexDirection={"column"}
                        sx={!isMobile ? { height: 305 } : { width: "100%" }}
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

                        <Stack
                          flexDirection={"column"}
                          gap={2}
                          mt={3}
                          width={"100%"}
                        >
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
                              ${mentor?.application.hourlyRate}
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
                              ${mentor?.application.hourlyRate}
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
