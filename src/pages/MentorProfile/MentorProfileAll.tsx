import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../Context/ContextStates";
import Basicinfo from "./Basicinfo";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import useMediaQuery from "../../hooks/MediaQuery";
import { Container } from "@material-ui/core";
import ChangePassword from "./ChangePassword";
import { Card } from "@mui/material";
import { getProfileDetails } from "../../api";
import { jwtDecode } from "../../helper-functions";
import { notifyError } from "../../components/Toastifycom";

const style = {
  width: "30%",
  bgcolor: "#F2F5F9",
  cursor: "pointer",
  marginTop: "0px",
};
const stylemobile = {
  width: "100%",
  bgcolor: "#F2F5F9",
  cursor: "pointer",
  marginTop: "0px",
};
const style1 = {
  border: "1.4px solid #D6D6D6", // Change the width and color as needed
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

type profileData = {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  nationality: string;
  isDeactivated: boolean;
  profilePic: object;
};

const MentorProfileAll: FC = () => {
  const isMobile = useMediaQuery("(min-width: 950px)");

  // Get the user from your authentication system or local storage
  const userId: String = jwtDecode(
    localStorage.getItem("@storage_Key")
  )?.userId;

  const initialProfile: profileData = {
    _id: "",
    first_name: "",
    last_name: "",
    email: "",
    nationality: "",
    isDeactivated:false,
    profilePic: {
      path: "",
    },
  };

  const [profile, setProfile] = useState<profileData>(initialProfile);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    getProfileDetails(userId)
      .then((res) => {
        setProfile(res);
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };

  return (
    <Card sx={{ background: "#F6FAFF" }}>
      <Container>
        <Basicinfo profileData={profile} />
        <br />
        <br />
        <ChangePassword />
      </Container>
    </Card>
  );
};
export default MentorProfileAll;
