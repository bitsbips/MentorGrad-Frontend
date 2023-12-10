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
import { Avatar } from "@mui/material";
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
          <PositionHeader>
            <PositionImage>
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src={imageUrl}
                  sx={{ width: 70, height: 70, alignSelf: "center" }}
                />
              </div>
              <PositionTextCol>
                <HeaderName style={{ fontSize: "28px" }}>
                  Welcome Back
                </HeaderName>
                <HeaderName>Jonathan Doe</HeaderName>
                <HeaderPassion>English Literature (M.A)</HeaderPassion>
              </PositionTextCol>
            </PositionImage>
            <ProgressBarWithPercentage percentage={percentage} />
          </PositionHeader>
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
