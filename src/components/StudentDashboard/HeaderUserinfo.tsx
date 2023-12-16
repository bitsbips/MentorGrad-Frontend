import React, { useEffect, useState } from "react";
import {
  ContainerDashboard,
  HeaderName,
  HeaderPassion,
  PositionHeader,
  PositionImage,
  PositionTextCol,
  RightBorderDashboard,
  RightContainerDash,
} from "./StudentDashboardStyles";
import { Avatar, Box, Grid, Typography } from "@mui/material";
//import User from '../../Assets/Images/user.svg';
import StarRatings from "react-star-ratings";
import TableComponent from "./TableComponent";
import TableComponentDashboard from "./TableComponent";
import Cardsinfo from "./Cardsinfo";
import ProgressBarWithPercentage from "./Progressbar";
import useMediaQuery from "../../hooks/MediaQuery";
import { DashboardRecentBookings } from "./DashboardRecentBookings";
import { GetUserData, calculateEmptyFieldsPercentage } from "../../api";

const HeaderUserinfo = () => {
  const [rating, setRating] = useState(4);
  const isMobile = useMediaQuery("(min-width: 950px)");
  const [percentage, setPercentage] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    calculateEmptyFieldsPercentage().then((response) => {
      setPercentage(parseInt(response.percentageEmpty, 10));
    });

    GetUserData().then((response) =>
      setImageUrl(response.profileDetails.profilePic)
    );
  }, []);

  return (
    <ContainerDashboard>
      <RightContainerDash>
        <RightBorderDashboard>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Grid container sx={{ width: "100%" }}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={imageUrl}
                    style={{ borderRadius: '15px', width: '70px', height: '70px', alignSelf: "center" }}
                  />
                </Grid>
                <Grid item sx={{ ml: 1 }}>
                  <Typography style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                    Welcome Back
                  </Typography>
                  <Typography style={{ fontWeight: 600 }}>
                    Jonathan Doe
                  </Typography>
                  <Typography style={{ color: "#A7A7A7", fontSize: "0.75rem" }}>
                    English Literature (M.A)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProgressBarWithPercentage percentage={percentage} />
            </Grid>
          </Grid>
        </RightBorderDashboard>
      </RightContainerDash>
      <div style={{ marginTop: "2%" }}>
        <Cardsinfo />
      </div>
      <div
        style={{
          marginTop: "2%",
          marginLeft: isMobile ? "" : "-5%",
          marginBottom: isMobile ? "5%" : "4%",
        }}
      >
        {/* <TableComponentDashboard type={'basicInfo'} /> */}
        <DashboardRecentBookings />
      </div>
    </ContainerDashboard>
  );
};
export default HeaderUserinfo;
