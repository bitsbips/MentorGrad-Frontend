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
} from "./StudentDahboardStyles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Icon } from "@mui/material";
import HeaderUserinfo from "../StudentDashboard/HeaderUserinfo";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "../../hooks/MediaQuery";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { useSearchParams } from "react-router-dom";
import { notifyError } from "../Toastifycom";
import { getErrorMsg } from "../../helper-functions";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../graphql/queries";
import Main from "../../pages/MentorChat/Main";
import MentorSearch from "./MentorSearch/Index";

const style = {
  width: "25%",
  bgcolor: "#F2F5F9",
  cursor: "pointer",
  marginTop: "0px",
};
const style1 = {
  border: "1.4px solid #D6D6D6", // Change the width and color as needed
};

const TestDashboard: FC = () => {
  const [profilestep, setProfileStep] = useState("0");
  const [Status, setStatus] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(min-width: 950px)");
  let [searchParams, setSearchParams] = useSearchParams();

  const currentTab = searchParams.get("tab") || "0";

  function SetStatusfunc(ss: any) {
    setStatus(ss);
  }
  const Data = [
    {
      id: 0,
      notShow: false,
      name: "Dashboard",
      icon: DashboardIcon,
    },
    {
      id: 1,
      notShow: false,
      name: "Bookings",
      icon: BookOnlineIcon,
    },
    {
      id: 2,
      notShow: false,
      name: "Smart Matches",
      icon: PeopleAltIcon,
    },
    {
      id: 3,
      notShow: false,
      name: "Chats",
      icon: ChatIcon,
    },
    {
      id: 4,

      notShow: false,
      name: "Invoices",
      icon: ReceiptIcon,
    },
    {
      id: 5,

      notShow: false,
      name: "Reporting",
      icon: AssessmentIcon,
    },
    {
      id: 6,

      notShow: false,
      name: "Subscription",
      icon: SubscriptionsIcon,
    },
    {
      id: 7,

      notShow: false,
      name: "Profile",
      icon: ContactPageIcon,
    },
  ];

  const {
    data: userData,
    loading: loadingUsers,
    refetch,
  } = useQuery(GET_ALL_USERS, {
    onError: (err) => {
      notifyError(getErrorMsg(err));
    },
  });

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

  // Actions
  const _handleComActions = (tab: string) => {
    if (searchParams.get("edit") && searchParams.get("id")) {
      searchParams.delete("id");
      searchParams.delete("edit");
      setSearchParams(searchParams);
    }
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  const Mycomphoolder: any = () => {
    let tab = searchParams.get("tab");
    if (tab === "0") {
      return (
        <div>
          <HeaderUserinfo />
        </div>
      );
    }
    if (tab === "1") {
      return (
        <div>
          <p>No Result</p>
        </div>
      );
    }
    if (tab === "2") {
      return (
        <div>
          <p>No Result</p>
        </div>
      );
    }
    if (tab === "3") {
      return <Main />;
    }
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
        {Data.map((data) =>
          data.notShow ? (
            ""
          ) : (
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
          )
        )}
      </List>
    </div>
  );

  return (
    <ContainerDa>
      <PositionProfile>
        {isMobile && parseInt(currentTab) < 8 ? (
          <div style={style}>
            {Data.map((data) => {
              return (
                <>
                  {data.notShow  ? (
                    ""
                  ) : (
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
                  )}
                </>
              );
            })}
          </div>
        ) : (
          <>
            {parseInt(currentTab) < 8 && (
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
                  <MenuOpenIcon
                    style={{ fontSize: "30px", color: "#5F61BE" }}
                  />
                </div>

                {/* Drawer */}
                <Drawer
                  anchor="left"
                  open={isDrawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  {list}
                </Drawer>
              </>
            )}
          </>
        )}
        <RightContainerDash1>{Mycomphoolder()}</RightContainerDash1>
      </PositionProfile>
    </ContainerDa>
  );
};
export default TestDashboard;
