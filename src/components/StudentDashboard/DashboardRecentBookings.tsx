import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
  TextField, // Add this import
} from "@mui/material";
import Fuse from "fuse.js";

import clockIcon from "../../Assets/Images/clock.png";
import personImg from "../../Assets/Images/person.jpeg";
import Visibility from "@mui/icons-material/Visibility";
import { getBookingsByStudentIdforDashboard, getStudentBookings } from "../../api";
import { notifyError } from "../../components/Toastifycom";
import { format } from "date-fns";
import Spinner from "../../components/Spinner";
import { ViewStudentBooking } from "../../pages/Student/ViewStudentBookings";

type booking = {
  _id: string;
  bookingDate: string;
  bookingSubject: string;
  description: string;
  time: string;
  duration: string;
  bookingStatus: string;
  student: [
    {
      first_name: string;
      last_name: string;
      location: string;
      email: string;
    }
  ];
};

type Bookings = booking[];

export const DashboardRecentBookings = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [tabs, setTabs] = React.useState("ALL");
  const [bookings, setBookings] = useState<Bookings>([]);
  const [tempBookings, setTempBookings] = useState<Bookings>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getRecentUpcomingBookings("PENDING");
  }, []);

  const handleShowDetails = (booking: object) => {
    setBookingDetails(booking);
    setShowDetails(true);
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

  const getRecentUpcomingBookings = async (type: string) => {
    setIsLoading(true);
    await getBookingsByStudentIdforDashboard(type)
      .then((res) => {
        setTempBookings(res);
        setBookings(res);
        setIsLoading(false);
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };

  return (
    <>
      <br />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {bookings.map((booking, index) => (
            <>
              <Box
                sx={{
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a box shadow
                  borderRadius: "20px", // Add rounded corners
                  background: "#FFFFFF", // Set the background color
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={4.5}>
                    <Stack flexDirection={!isMobile ? "row" : "column"} gap={1}>
                      <Stack
                        flexDirection={!isMobile ? "column" : "row"}
                        justifyContent={"space-around"}
                        alignItems={"center"}
                        sx={
                          isMobile
                            ? {
                                background: "#5F61BE",
                                borderRadius: "20px",
                                color: "#fff",
                                height: "70px",
                              }
                            : {
                                background: "#5F61BE",
                                borderRadius: "20px",
                                color: "#fff",
                                p: 2,
                              }
                        }
                      >
                        <Typography>
                          {getDateString(booking?.bookingDate, "month")}
                        </Typography>
                        <Typography fontWeight={600} sx={{ fontSize: "32px" }}>
                          {getDateString(booking?.bookingDate, "day")}
                        </Typography>
                        <Typography>
                          {" "}
                          {getDateString(booking?.bookingDate, "dayName")}
                        </Typography>
                      </Stack>

                      <Stack flexDirection={"column"} justifyContent={"center"}>
                        <Typography
                          textAlign={!isMobile ? "left" : "center"}
                          variant="h6"
                          fontWeight={600}
                        >
                          {booking?.bookingSubject}
                        </Typography>
                        <Typography
                          textAlign={!isMobile ? "left" : "center"}
                          fontSize={"small"}
                          color={"#7A7A7A"}
                        >
                          {booking?.description}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Divider
                    variant="middle"
                    orientation={isMobile ? "horizontal" : "vertical"}
                    flexItem
                    sx={{
                      border: "1px solid #4C4C4C",
                      width: { xs: "90%", lg: "" },
                      mt: { xs: "20px", lg: "" },
                      mb: { xs: "20px", lg: "" },
                    }}
                  />
                  <Grid
                    item
                    xs={12}
                    md={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box>
                      <Typography fontWeight={600} noWrap>
                        {booking?.duration} Minutes
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "5px 10px 5px 10px",
                          background: "#cccdfc",
                          borderRadius: "10px",
                        }}
                      >
                        <img src={clockIcon} width="12px" height="12px" />
                        <Typography
                          textAlign={"left"}
                          noWrap
                          sx={{ ml: 1, fontSize: "10px" }}
                          fontSize={"small"}
                        >
                          {booking?.time}
                        </Typography>
                      </div>
                    </Box>
                  </Grid>

                  <Divider
                    variant="middle"
                    orientation={isMobile ? "horizontal" : "vertical"}
                    flexItem
                    sx={{
                      border: "1px solid #4C4C4C",
                      width: { xs: "90%", lg: "" },
                      mt: { xs: "20px", lg: "" },
                      mb: { xs: "20px", lg: "" },
                    }}
                  />
                  <Grid item xs={12} md={3}>
                    <Stack
                      flexDirection={"column"}
                      alignItems={"center"}
                      sx={!isMobile ? { pt: 1, pb: 1 } : {}}
                    >
                      <img
                        src={personImg}
                        style={{ width: "50px", borderRadius: "10px" }}
                      />
                      <Typography
                        noWrap
                        variant="h6"
                        fontSize={"medium"}
                        fontWeight={600}
                      >
                        {booking?.student[0]?.first_name +
                          booking?.student[0]?.last_name}
                      </Typography>
                      <Typography noWrap color={"#7A7A7A"} fontSize={"small"}>
                        {booking?.student[0]?.email}
                      </Typography>
                      <Typography noWrap color={"#7A7A7A"} fontSize={"small"}>
                        {booking?.student[0]?.location}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={1}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        mt: { xs: "20px", lg: "" },
                        mb: { xs: "20px", lg: "" },
                        display: "flex",
                        flexDirection: { xs: "row", md: "column" },
                        gap: "10px",
                      }}
                    >
                      <Button
                        onClick={() => handleShowDetails(booking)}
                        size="small"
                        sx={{
                          background: "#ECECEC",
                          color: "black",
                          width: { xs: "120px", lg: "90px" },
                          p: 0,
                          "&:hover": {
                            background: "#5f61be",
                          },
                        }}
                        variant="contained"
                        startIcon={<Visibility fontSize="small" />}
                      >
                        View
                      </Button>
                    </Box>
                    {/* </Stack> */}
                  </Grid>
                </Grid>
              </Box>
              <br />
              <br />
            </>
          ))}
          {showDetails && (
            <ViewStudentBooking
              open={showDetails}
              setShowDetails={setShowDetails}
              data={bookingDetails}
              getAllBookings={getRecentUpcomingBookings}
            />
          )}
        </>
      )}
    </>
  );
};
