import React, { useEffect, useState } from "react";
import { Container, ExperticeText } from "./MentorStyles";
import useMediaQuery from "../../hooks/MediaQuery";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import personImg from "../../Assets/Images/person.jpeg";
import { makeStyles } from "@material-ui/core";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { getDayTimeSlot, getReviews, saveTimeSlot } from "../../api";
import { formatDate, jwtDecode } from "../../helper-functions";
import { notifyError } from "../../components/Toastifycom";
import Cancel from "@mui/icons-material/Cancel";

const useStyles = makeStyles({
  container: {
    border: "1px solid #D6D6D6",
    padding: "20px",
  },
  container2: {
    border: "1px solid #D6D6D6",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "20px",
  },
  pageTitle: {
    color: "#000",
    leadingTrim: "both",
    textEdge: "cap",
    fontWeight: 800,
    lineHeight: "48px",
    textAlign: "left",
    paddingBottom: "20px",
  },
  personImg: {
    width: "54px",
    height: "54px",
    flexShrink: 0,
    borderRadius: "54px",
  },
  heading: {
    fontWeight: 600,
  },
  date: {
    color: "#858585",
    leadingTrim: "both",
    textEdge: "cap",
    fontSize: "0.8rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "48px" /* 342.857% */,
  },
  description: {
    textAlign: "left",
    padding: "10px",
    color: "#505050",
  },
});

// Define a type for the slot object
type timeSlots = {
  slotHours?: string;
};

const MentorSchedule = (): JSX.Element => {
  const isMobile = useMediaQuery("(min-width: 950px)");
  const navigate = useNavigate();
  const classes = useStyles();

  // Get the user from your authentication system or local storage
  const userId: String = jwtDecode(
    localStorage.getItem("@storage_Key")
  )?.userId;

  const [selectedDay, setselectedDay] = useState("Monday");
  const [timeSlots, setTimeSlots] = useState<timeSlots[]>([]);

  useEffect(() => {
    getSlotsByDay();
  }, [selectedDay]);

  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function generateHourRange() {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      const startHour = i % 12 || 12;
      const endHour = (i + 1) % 12 || 12;
      const amOrPmStart = i < 12 ? "AM" : "PM";
      const amOrPmEnd = i + 1 < 12 ? "AM" : "PM";

      const timeRange = `${startHour
        .toString()
        .padStart(2, "0")}:00 ${amOrPmStart} - ${endHour
        .toString()
        .padStart(2, "0")}:00 ${amOrPmEnd}`;
      hours.push(timeRange);
    }
    return hours;
  }

  const handleAddTimeSlot = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;

    let slot = {
      slotHours: target.value,
      isBooked: false,
    };

    let payload = {
      userId: userId,
      day: selectedDay,
      timeSlot: [...timeSlots, slot],
    };
    saveTimeSlot(payload)
      .then((res) => {
        getSlotsByDay();
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };

  const getSlotsByDay = () => {
    getDayTimeSlot(selectedDay)
      .then((res) => {
        setTimeSlots(res?.timeSlot);
      })
      .catch((err) => {
        notifyError(
          typeof (err?.response?.data === "string")
            ? err?.response?.data
            : err?.response?.data?.error || "Server Error!"
        );
        setTimeSlots([]);
      });
  };

  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={12} lg={12}>
          <Typography variant="h5" className={classes.pageTitle}>
            Scheduled Timings
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
          <Stack flexDirection={"column"}>
            <Typography noWrap textAlign={"left"} fontSize={"18px"}>
              Timing Slot Duration
            </Typography>
            <TextField
              name="timingDuration"
              select
              sx={{ pt: 1.5 }}
              size="small"
              onChange={handleAddTimeSlot}
            >
              {generateHourRange().map((time) => (
                <MenuItem value={time}>{time}</MenuItem>
              ))}
            </TextField>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={12} lg={12}>
          <Grid container className={classes.container2}>
            <Box
              display="grid"
              gridTemplateColumns={
                isMobile ? "repeat(12, 1fr)" : "repeat(2, 1fr)"
              }
              gap={2}
            >
              {week.map((day) => (
                <Stack
                  key={day}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={
                    selectedDay === day
                      ? {
                          border: "1px solid #D6D6D6",
                          padding: "13px",
                          borderRadius: "5px",
                          width: "100px",
                          height: "30px",
                          cursor: "pointer",
                          background: "#5F61BE",
                          color: "white",
                        }
                      : {
                          border: "1px solid #D6D6D6",
                          padding: "13px",
                          borderRadius: "5px",
                          width: "100px",
                          height: "30px",
                          cursor: "pointer",
                        }
                  }
                  onClick={() => setselectedDay(day)}
                >
                  <Typography>{day}</Typography>
                </Stack>
              ))}
            </Box>

            <Grid item xs={12} sm={12} lg={12}>
              <Divider sx={{ background: "#5F61BE", mt: 2 }} />
            </Grid>

            <Grid item xs={12} sm={12} lg={12}>
              {" "}
              <Typography
                noWrap
                textAlign={"left"}
                fontSize={"23px"}
                fontWeight={800}
                mt={2}
              >
                Time Slots
              </Typography>
            </Grid>

            <Box
              display="grid"
              gridTemplateColumns={
                isMobile ? "repeat(5, 1fr)" : "repeat(1 , 2fr)"
              }
              gap={2}
              mt={2}
            >
              {timeSlots.map((slot) => (
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={1}
                  sx={{
                    p: 1.1,
                    borderRadius: "5px",
                    cursor: "pointer",
                    background: "#C9F6EF",
                  }}
                >
                  <Typography noWrap fontSize={"small"}>
                    {slot?.slotHours}
                  </Typography>
                  <Cancel sx={{ width: "15px" }} />
                </Stack>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default MentorSchedule;
