import React, { useState } from "react";
import {
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

export const MentorBooking = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleModalClose = () => {
    setShowDetails(false);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <Card>
            <Grid item xs={12} lg={12}>
              <Grid container gap={2}>
                <Grid item xs={12} lg={1}>
                  <Stack
                    flexDirection={"column"}
                    justifyContent={"space-around"}
                    sx={{
                      background: "#5F61BE",
                      borderRadius: "20px",
                      color: "#fff",
                      height: "160px",
                    }}
                  >
                    <Typography>Jun</Typography>
                    <Typography fontWeight={600}>17</Typography>
                    <Typography>Mon</Typography>
                  </Stack>
                </Grid>

                <Grid
                  item
                  xs={12}
                  lg={4}
                  sx={{ pt: 2, pb: 2, display: "flex" }}
                  flexDirection={!isMobile ? "row" : "column"}
                >
                  <Stack flexDirection={"column"}>
                    <Typography
                      textAlign={"left"}
                      variant="h6"
                      fontWeight={600}
                    >
                      Introduction to Computing
                    </Typography>
                    <Typography textAlign={"left"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus id magna consectetur, sodales lorem convallis,
                      mollis urna.
                    </Typography>
                  </Stack>
                  <div
                    style={
                      !isMobile
                        ? {
                            borderLeft: "1px solid #000",
                            height: "100%",
                          }
                        : {
                            borderTop: "1px solid #000",
                            height: "100%",
                          }
                    }
                  ></div>
                </Grid>

                {/* <Grid item xs={12} lg={1} sx={{ pt: 2, pb: 2 }}> */}

                {/* </Grid> */}

                <Grid item xs={12} lg={2} sx={{ pt: 5.5, pb: 2 }}>
                  <Stack
                    flexDirection={"column"}
                    alignItems={"center"}
                    sx={{ p: 0.5 }}
                  >
                    <Typography fontWeight={600}>30 Minutes</Typography>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "10px",
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
                        01:00 PM - 01:30 PM
                      </Typography>
                    </div>
                  </Stack>
                </Grid>

                <Grid
                  item
                  xs={12}
                  lg={2}
                  sx={{ pt: 2, pb: 2, display: "flex" }}
                  flexDirection={!isMobile ? "row" : "column"}
                >
                  <div
                    style={
                      !isMobile
                        ? {
                            borderLeft: "1px solid #000",
                            height: "100%",
                          }
                        : {
                            borderTop: "1px solid #000",
                            height: "100%",
                          }
                    }
                  ></div>
                  <Stack flex={"column"} alignItems={"center"} sx={{ p: 0.5 }}>
                    <img
                      src={personImg}
                      style={{ width: "50px", borderRadius: "10px" }}
                    />
                    <Typography noWrap variant="h6" fontWeight={600}>
                      Baji Darakshan
                    </Typography>
                    <Typography noWrap>test@test.com</Typography>
                    <Typography noWrap>Tuddiwala, Faisalabad</Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12} lg={2} sx={{ pt: 5.5, pb: 2 }}>
                  <Stack
                    flexDirection={!isMobile ? "column" : "row"}
                    justifyContent={isMobile ? "flex-end" : ""}
                    alignItems={"center"}
                    sx={{ p: 0.5 }}
                    gap={1}
                  >
                    <Button
                      onClick={handleShowDetails}
                      size="small"
                      sx={{ background: "#ECECEC", color: "black" }}
                      variant="contained"
                      startIcon={<Visibility fontSize="small" />}
                    >
                      View
                    </Button>
                    <Button
                      size="small"
                      sx={{ background: "rgba(255, 0, 0, 0.70)" }}
                      variant="contained"
                      startIcon={<Cancel fontSize="small" />}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      {showDetails && (
        <ViewMentorBooking
          open={showDetails}
          setShowDetails={setShowDetails}
        />
      )}
    </>
  );
};
