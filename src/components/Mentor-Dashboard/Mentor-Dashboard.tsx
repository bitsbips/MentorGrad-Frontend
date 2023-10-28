import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../Context/ContextStates";
import {
  Border,
  Container,
  ContainerDa,
  PositionProfile,
  RightContainer,
  RightContainerDash1,
} from "../StudentProfileDetails/StudentProfileStyles";
import {
  ActiveLabel,
  BackActive,
  BackInActive,
  InActiveLabel,
} from "./Mentor-DahboardStyles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Icon, Typography } from "@mui/material";
import HeaderUserinfo from "../StudentDashboard/HeaderUserinfo";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "../../hooks/MediaQuery";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useNavigate, useSearchParams } from "react-router-dom";
import MentorReviews from "../../pages/Mentor/MentorReviews";
import TableComponentDashboard from "../StudentDashboard/TableComponent";
import MentorBlogs from "../../pages/Mentor/MentorBlog";
import MentorProfile from "../../pages/MentorProfile/MentorProfile";
import { MentorBooking } from "../../pages/Mentor/MentorBookings";
import Main from "../../pages/MentorChat/Main";
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ChatIcon from '@mui/icons-material/Chat';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RateReviewIcon from '@mui/icons-material/RateReview';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LogoutIcon from '@mui/icons-material/Logout';
const style = {
  width: "30%",
  bgcolor: "#F2F5F9",
  cursor: "pointer",
  marginTop: "0px",
};
const style1 = {
  border: "1.4px solid #D6D6D6", // Change the width and color as needed
};

const Mentor_Dashboard: FC = () => {
  const navigate = useNavigate();
  const [profilestep, setProfileStep] = useState("0");
  let [searchParams, setSearchParams] = useSearchParams();
  const [Status, setStatus] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(min-width: 950px)");

  function SetStatusfunc(ss: any) {
    setStatus(ss);
  }
  const Data = [
    {
      id: 0,
      name: "Dashboard",
      icon: DashboardIcon,
    },
    {
      id: 2,
      name: "Bookings",
      icon: BookOnlineIcon,
    },
    {
      id: 3,
      name: "Schedule Timings",
      icon: ScheduleIcon,
    },
    {
      id: 4,
      name: "Messages",
      icon: ChatIcon,
    },
    {
      id: 5,
      name: "Invoices",
      icon: ReceiptIcon,
    },
    {
      id: 6,
      name: "Reviews",
      icon: RateReviewIcon,
      url: "/mentor/reviews",
    },
    {
      id: 7,

      name: "Blog",
      icon: TypeSpecimenIcon,
    },
    {
      id: 8,
      name: "Profile",
      icon: ContactPageIcon,
    },
    {
      id: 9,

      name: "Logout",
      icon: LogoutIcon,
    },
  ];
  useEffect(() => {
    // Set the initial Status and profile step when the component mounts
    let tab = searchParams.get("tab");
    if (!tab) {
      _handleComActions("0");
    }
    if (tab === "0") {
      setStatus("Dashboard");
    }
  }, [profilestep]);

  const Mycomphoolder: any = () => {
    let tab = searchParams.get("tab");
    if (tab === "0") {
      return (
        <div>
          <HeaderUserinfo />
        </div>
      );
    }
    if (profilestep === "1") {
      return (
        <div>
          <p>No Result</p>
        </div>
      );
    }
    if (tab === "2") {
      return (
        <>
          <Typography
            variant="h5"
            sx={{ textAlign: "left", paddingBottom: "20px" }}
          >
            Booking Summary
          </Typography>
          <MentorBooking />
        </>
      );
    }
    if (profilestep === "3") {
      return (
        <div>
          <p>No Result</p>
        </div>
      );
    }
    if (tab === "4") {
      return (
        <div>
          <Main />
        </div>
      );
    }
    if (tab === "5") {
      return (
        <>
          <Typography
            variant="h5"
            sx={{ textAlign: "left", paddingBottom: "20px" }}
          >
            Invoices
          </Typography>
          <TableComponentDashboard type="Invoice" />
        </>
      );
    }
    if (tab === "6") {
      return (
        <div>
          <MentorReviews />
        </div>
      );
    }
    if (tab === "7") {
      return (
        <div>
          <MentorBlogs />
        </div>
      );
    }
    if (tab === "8") {
      return (
        <div>
          <Typography
            variant="h5"
            sx={{ textAlign: "left", paddingBottom: "20px" }}
          >
            Mentor Profile
          </Typography>
          <MentorProfile />
        </div>
      );
    }
  };

  // Actions
  const _handleComActions = (tab: string) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };
  const list = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {Data.map((data) => (
          <ListItem
            key={data.id}
            onClick={() => {
              SetStatusfunc(data.name);
              _handleComActions(data.id.toString());
            }}
          >
            {Status === data.name ? (
              <>
                <BackActive>
                  {data.icon && (
                    <data.icon style={{ color: "#fff", fontSize: "20px" }} />
                  )}
                </BackActive>
                <ActiveLabel>{data.name}</ActiveLabel>
              </>
            ) : (
              <>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <BackInActive>
                    {data.icon && <data.icon style={{ fontSize: "20px" }} />}
                  </BackInActive>
                  <InActiveLabel>{data.name}</InActiveLabel>
                </div>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <ContainerDa>
      <PositionProfile>
        {isMobile ? (
          <div style={style}>
            {Data.map((data) => {
              return (
                <>
                  <div
                    onClick={() => {
                      SetStatusfunc(data.name);
                      _handleComActions(data.id.toString());
                    }}
                  >
                    {Status === data.name ? (
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <BackActive>
                          {data.icon && (
                            <data.icon
                              style={{ color: "#fff", fontSize: "20px" }}
                            />
                          )}
                        </BackActive>
                        <ActiveLabel>{data.name}</ActiveLabel>
                      </div>
                    ) : (
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <BackInActive>
                          {data.icon && (
                            <data.icon style={{ fontSize: "20px" }} />
                          )}
                        </BackInActive>
                        <InActiveLabel>{data.name}</InActiveLabel>
                      </div>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <>
            {/* Burger Icon to open the drawer */}
            <div
              onClick={toggleDrawer(true)}
              style={{
                alignSelf: "flex-start",
                marginLeft: "-5%",
                marginBottom: "3%",
              }}
            >
              <MenuOpenIcon style={{ fontSize: "30px", color: "#5F61BE" }} />
            </div>

            {/* Drawer */}
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
            >
              {/* {list} */}
            </Drawer>
          </>
        )}
        <RightContainerDash1>{Mycomphoolder()}</RightContainerDash1>
      </PositionProfile>
    </ContainerDa>
  );
};
export default Mentor_Dashboard;
