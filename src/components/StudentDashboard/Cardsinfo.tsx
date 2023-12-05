import React from "react";
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
  },
  {
    id: 1,
    num: "33",
    title: "Completed",
    background: "#BEADFA4D",
    backicon: "#BEADFA4D",
    icon: Wallet,
  },
  {
    id: 1,
    num: "90",
    title: "Upcoming",
    background: "#3876BF4D",
    backicon: "#3876BF4D",
    icon: Appointment,
  },
];
const Cardsinfo = () => {
  return (
    <PositionCards>
      {data.map((data) => {
        return (
          <BackCard
            style={{ backgroundColor: data.background, borderRadius: "16px" }}
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
