import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../Context/ContextStates";
import Basicinfo from "./Basicinfo";
import Passportinfo from "./Passportinfo";
import ProgramPref from "./ProgramPrefinfo";
import DocumentDetail from "./DocumentDetailinfo";
import ChangePassword from "./ChangePassword";
import {
  Border,
  Container,
  PositionProfile,
  RightContainer,
  RightContainerDash1,
} from "./StudentProfileStyles";
import useMediaQuery from "../../hooks/MediaQuery";
import { Box, Tab, Tabs } from "@mui/material";

const style = {
  width: "30%",
  bgcolor: "#fffff",
  cursor: "pointer",
  marginTop: "0px",
};
const stylemobile = {
  width: "100%",
  bgcolor: "#fffff",
  cursor: "pointer",
  marginTop: "0px",
};
const style1 = {
  border: "1.4px solid #D6D6D6",
};

const text = {
  color: "#47464A",
  fontFamily: "Inter",
  fontSize: 18,
  fontWeight: "600",
  letterSpacing: 0,
};
const text1 = {
  color: "#5F61BE",
  fontFamily: "Inter",
  fontSize: 18,
  fontWeight: "600",
};

const activeListItemStyle = {
  borderLeft: "4px solid #5F61BE", // Change the color for the active item
};

const inactiveListItemStyle = {
  borderLeft: "1.2px solid #D6D6D6", // Change the color for inactive items
};

const StudentProfileAll: FC = () => {
  const isMobile = useMediaQuery("(min-width: 950px)");

  const { profilestep, setProfileStep } = useContext(Context);
  const [Status, setStatus] = useState("");

  function SetStatusfunc(ss: any) {
    setStatus(ss);
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setStatus(newValue);
    setProfileStep(Data.find((x) => x.name === newValue)?.id.toString());
  };

  const Data = [
    {
      id: 0,
      name: "Basic Information",
    },
    {
      id: 1,
      name: "Passport Details",
    },
    {
      id: 2,
      name: "Program Preferences",
    },
    {
      id: 3,
      name: "Documents Detail",
    },
    {
      id: 4,

      name: "Change Password",
    },
  ];
  useEffect(() => {
    // Set the initial Status and profile step when the component mounts
    if (profilestep === "0") {
      setStatus("Basic Information");
    }
  }, [profilestep]);
  const Mycomphoolder: any = () => {
    if (profilestep === "0") {
      return (
        <div>
          <Basicinfo />
        </div>
      );
    }
    if (profilestep === "1") {
      return (
        <div>
          <Passportinfo />
        </div>
      );
    }
    if (profilestep === "2") {
      return (
        <div>
          <ProgramPref />
        </div>
      );
    }
    if (profilestep === "3") {
      return (
        <div>
          <DocumentDetail />
        </div>
      );
    }
    if (profilestep === "4") {
      return (
        <div>
          <ChangePassword />
        </div>
      );
    }
  };
  return (
    <Box sx={{ background: "#fffff" }}>
      <Box sx={{ marginBottom: "15px" }}>
        <Tabs
          value={Status}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
        >
          {Data.map((data) => (
            <Tab label={data.name} value={data.name} />
          ))}
        </Tabs>
      </Box>
      <PositionProfile>
        {/* <div style={isMobile ? style :stylemobile}>
                    <Border>

                        {Data.map((data) => {
                            const listItemClass = Status === data.name ? activeListItemStyle : inactiveListItemStyle;

                            return (
                                <>
                                    <ListItem style={listItemClass} onClick={() => [SetStatusfunc(data.name), data.id === 1 ? setProfileStep('0') : data.id === 2 ? setProfileStep('1') : data.id === 3 ? setProfileStep('2') : data.id === 4 ? setProfileStep('3') : setProfileStep('4')]}>
                                        {Status === data.name ?
                                            <ListItemText primary={data.name} style={text1} />
                                            :
                                            <ListItemText primary={data.name} style={text} />

                                        }
                                    </ListItem>
                                    <Divider sx={style1} />
                                </>
                            )
                        })}
                    </Border>


                </div> */}

        <RightContainerDash1>
          <Mycomphoolder />
        </RightContainerDash1>
      </PositionProfile>
    </Box>
  );
};
export default StudentProfileAll;
