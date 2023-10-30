import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styled from "styled-components";
import clockIcon from "../../Assets/Images/clock.png";
import personImg from "../../Assets/Images/person.jpeg";
import { BsEye } from "react-icons/bs";
import Cancel from "@mui/icons-material/Cancel";
import Visibility from "@mui/icons-material/Visibility";
import { ViewMentorBooking } from "./ViewMentorBookings";
import { getBookings } from "../../api";
import { notifyError } from "../../components/Toastifycom";
import { format } from "date-fns";

type booking = {
  bookingDate: string;
  bookingSubject: string;
  description: string;
  time: string;
  duration: string;
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

export const MentorBooking = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [bookings, setBookings] = useState<Bookings>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});

  useEffect(() => {
    getAllBookings();
  }, []);

  const handleShowDetails = (booking: object) => {
    setBookingDetails(booking);
    setShowDetails(true);
  };

  const handleModalClose = () => {
    setShowDetails(false);
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

  const getAllBookings = async () => {
    getBookings()
      .then((res) => {
        setBookings(res);
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };
  return (
    <>
      {bookings.map((booking, index) => (
        <Box
          display="grid"
          gridTemplateColumns={!isMobile ? "3fr 2fr 2fr" : "repeat(1, 1fr)"}
          gap={2}
          sx={{
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a box shadow
            borderRadius: "8px", // Add rounded corners
            background: "#FFFFFF", // Set the background color
          }}
        >
          <Stack flexDirection={!isMobile ? "row" : "column"} gap={3}>
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
              <Typography fontWeight={600} fontSize={"large"}>
                {getDateString(booking?.bookingDate, "day")}
              </Typography>
              <Typography>
                {" "}
                {getDateString(booking?.bookingDate, "dayName")}
              </Typography>
            </Stack>

            <Stack flexDirection={"column"} justifyContent={"center"}>
              <Typography
                textAlign={"left"}
                variant="h6"
                fontWeight={600}
                noWrap
              >
                {booking?.bookingSubject}
              </Typography>
              <Typography
                textAlign={"left"}
                fontSize={"small"}
                color={"#7A7A7A"}
              >
                {booking?.description}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            flexDirection={!isMobile ? "row" : "column"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <div
              style={
                !isMobile
                  ? {
                      borderLeft: "1px solid #7A7A7A",
                      padding: "10px",
                      height: "80%",
                    }
                  : {
                      borderTop: "1px solid #7A7A7A",
                      padding: "10px",
                      width: "80%",
                    }
              }
            ></div>

            <Stack flexDirection={"column"} alignItems={"center"}>
              <Typography fontWeight={600} noWrap>
                {booking?.duration} Minutes
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "5px",
                  background: "#cccdfc",
                  borderRadius: "10px",
                }}
              >
                <img src={clockIcon} width="15px" height="15px" />
                <Typography
                  textAlign={"left"}
                  noWrap
                  sx={{ ml: 1 }}
                  fontSize={"small"}
                >
                  {booking?.time}
                </Typography>
              </div>
            </Stack>
          </Stack>

          <Stack
            flexDirection={!isMobile ? "row" : "column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
          >
            <div
              style={
                !isMobile
                  ? {
                      borderLeft: "1px solid #7A7A7A",
                      padding: "10px",
                      height: "80%",
                    }
                  : {
                      borderTop: "1px solid #7A7A7A",
                      padding: "10px",
                      width: "80%",
                    }
              }
            ></div>

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

            <Stack
              flexDirection={!isMobile ? "column" : "row"}
              justifyContent={isMobile ? "flex-end" : ""}
              alignItems={"center"}
              sx={isMobile ? { width: "100%" } : { padding: "0 20px 0 0" }}
              gap={1}
            >
              <Button
                onClick={() => handleShowDetails(booking)}
                size="small"
                sx={{
                  background: "#ECECEC",
                  color: "black",
                  width: "90px",
                  p: 0,
                }}
                variant="contained"
                startIcon={<Visibility fontSize="small" />}
              >
                View
              </Button>
              <Button
                size="small"
                sx={{
                  background: "rgba(255, 0, 0, 0.70)",
                  width: "90px",
                  p: 0,
                }}
                variant="contained"
                startIcon={<Cancel fontSize="small" />}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Box>
      ))}

      {showDetails && (
        <ViewMentorBooking
          open={showDetails}
          setShowDetails={setShowDetails}
          data={bookingDetails}
        />
      )}
    </>
  );
};
