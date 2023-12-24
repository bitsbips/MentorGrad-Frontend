import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackCard,
  BackIconinfo,
  CardIcon,
  CardPosition,
  CardSubTitle,
  CardTitle,
  InsideCardWidth,
  PositionCards,
  PositionHeader,
  PositionTextCol,
} from "./StudentDashboardStyles";
import Users from "../../Assets/Images/usersgroup.svg";
import Appointment from "../../Assets/Images/appointment.svg";
import Wallet from "../../Assets/Images/wallet-fill.svg";
const data = [
  {
    id: 1,
    num: "23",
    title: "Total Sessions",
    background: "#F8BDEB4D",
    backicon: "#F8BDEB4D",
    icon: Users,
    route: "/dashboard?tab=1",
  },
  {
    id: 1,
    num: "33",
    title: "Completed",
    background: "#BEADFA4D",
    backicon: "#BEADFA4D",
    icon: Wallet,
    route: "/dashboard?tab=1",
  },
  {
    id: 1,
    num: "90",
    title: "Upcoming",
    background: "#3876BF4D",
    backicon: "#3876BF4D",
    icon: Appointment,
    route: "/dashboard?tab=1",
  },
];
const Cardsinfo = () => {
  const navigate = useNavigate();
  const [updateSidebar, setUpdateSidebar] = useState(false);


  const handleCardClick = (route: string) => {
    navigate(route);
    setUpdateSidebar((prev) => !prev); // Toggle the state to trigger re-render
  };
  return (
    <PositionCards>
      {data.map((data) => {
        return (
          <BackCard
            style={{ backgroundColor: data.background, borderRadius: "16px" }}
            onClick={() => handleCardClick(data.route)}

          >
            <InsideCardWidth>
              <CardPosition>
                <BackIconinfo style={{ backgroundColor: data.backicon }}>
                  <CardIcon src={data.icon} />
                </BackIconinfo>
                <PositionTextCol style={{ marginLeft: "4%" }}>
                  <CardTitle>{data.title}</CardTitle>
                  <CardSubTitle>{data.num}</CardSubTitle>
                </PositionTextCol>
              </CardPosition>
            </InsideCardWidth>
          </BackCard>
        );
      })}
    </PositionCards>
  );
};
export default Cardsinfo;
