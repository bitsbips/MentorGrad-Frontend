import React from "react";
import { Card, Grid, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import clockIcon from "../../Assets/Images/clock.png";

const StyledBox = styled.div`
  width: 100%;
  max-width: 1161px;
  margin: 0 auto;

  & .group {
    position: relative;
    width: 100%;
    max-width: 1261px;
  }

  /* Media query for small screens */
  @media (max-width: 768px) {
    & .group {
      max-width: 100%; /* Adjust the max-width for smaller screens */
    }
  }

  & .overlap {
    position: relative;
    width: 100%;
    max-width: 1281px;
  }

  & .overlap-group-wrapper {
    position: relative;
    width: 100%;
    max-width: 1281px;
  }

  & .overlap-group {
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0px 0px 2px #919eab33, 0px 12px 24px #919eab1f;
    height: 154px;
    position: relative;
    width: 1261px;
  }

  & .text-wrapper {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 24px;
    font-weight: 600;
    left: 153px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    top: 24px;
    width: 389px;
  }

  & .div {
    color: #7a7a7a;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 400;
    left: 153px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    top: 64px;
    width: 389px;
  }

  & .icons-ic-location {
    height: 16px;
    left: 932px;
    position: absolute;
    top: 123px;
    width: 16px;
  }

  & .jun-mon-wrapper {
    background-image: url(https://c.animaapp.com/2kY30kB9/img/rectangle-262.svg);
    background-size: 100% 100%;
    height: 154px;
    left: 0;
    position: absolute;
    top: 0;
    width: 114px;
  }

  & .jun-mon {
    color: #ffffff;
    font-family: "Inter", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 120px;
    left: 24px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 17px;
    width: 65px;

    & .span {
      color: #ffffff;
      font-family: "Inter", Helvetica;
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 22px;
    }

    & .text-wrapper-2 {
      font-size: 32px;
      font-weight: 700;
    }
  }

  & .img-avatar {
    height: 52px;
    left: 981px;
    object-fit: cover;
    position: absolute;
    top: 17px;
    width: 52px;
  }

  & .text-wrapper-3 {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 600;
    left: 929px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 77px;
    white-space: nowrap;
    width: 156px;
  }

  & .overlap-2 {
    height: 43px;
    left: 948px;
    position: absolute;
    top: 100px;
    width: 117px;
  }

  & .text-wrapper-4 {
    color: #7a7a7a;
    font-family: "Inter", Helvetica;
    font-size: 11px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 20px;
    white-space: nowrap;
    width: 117px;
  }

  & .text-wrapper-5 {
    color: #7a7a7a;
    font-family: "Inter", Helvetica;
    font-size: 11px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
    width: 117px;
  }

  & .text-wrapper-6 {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 600;
    left: 664px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 44px;
    white-space: nowrap;
    width: 143px;
  }

  & .overlap-3 {
    background-color: #cccdfc;
    border-radius: 10px;
    height: 27px;
    left: 661px;
    position: absolute;
    top: 70px;
    width: 150px;
  }

  & .p {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 10px;
    font-weight: 500;
    left: 33px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 7px;
    width: 104px;
  }

  & .clock {
    height: 13px;
    left: 13px;
    object-fit: cover;
    position: absolute;
    top: 7px;
    width: 13px;
  }

  & .overlap-4 {
    height: 21px;
    left: 1150px;
    position: absolute;
    top: 52px;
    width: 73px;
  }

  & .rectangle {
    background-color: #ececec;
    border-radius: 5px;
    height: 19px;
    left: 0;
    position: absolute;
    top: 2px;
    width: 73px;
  }

  & .eye {
    height: 12px;
    left: 8px;
    object-fit: cover;
    position: absolute;
    top: 5px;
    width: 16px;
  }

  & .text-wrapper-7 {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 12px;
    font-weight: 400;
    left: 27px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
    width: 36px;
  }

  & .overlap-5 {
    height: 21px;
    left: 1150px;
    position: absolute;
    top: 81px;
    width: 73px;
  }

  & .rectangle-2 {
    background-color: #ff0000b2;
    border-radius: 5px;
    height: 19px;
    left: 0;
    position: absolute;
    top: 2px;
    width: 73px;
  }

  & .text-wrapper-8 {
    color: #ffffff;
    font-family: "Inter", Helvetica;
    font-size: 12px;
    font-weight: 400;
    left: 24px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
    width: 43px;
  }

  & .line {
    height: 88px;
    left: 596px;
    object-fit: cover;
    position: absolute;
    top: 33px;
    width: 1px;
  }

  & .img {
    height: 88px;
    left: 871px;
    object-fit: cover;
    position: absolute;
    top: 33px;
    width: 1px;
  }
`;

export const MentorBooking = (): JSX.Element => {
  return (
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
                lg={5}
                sx={{ pt: 2, pb: 2, display: "flex" }}
                flexDirection={"row"}
              >
                <Stack flexDirection={"column"}>
                  <Typography variant="h6" fontWeight={600}>
                    Introduction to Computing
                  </Typography>
                  <Typography textAlign={"left"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus id magna consectetur, sodales lorem convallis,
                    mollis urna.
                  </Typography>
                </Stack>
                <div
                  style={{
                    borderLeft: "1px solid #000",
                    height: "100%",
                  }}
                ></div>
              </Grid>

              {/* <Grid item xs={12} lg={1} sx={{ pt: 2, pb: 2 }}> */}

              {/* </Grid> */}

              <Grid
                item
                xs={12}
                lg={2}
                sx={{ pt: 5.5, pb: 2 }} 
              >
                <Stack flexDirection={"column"} alignItems={"center"}>
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
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};
