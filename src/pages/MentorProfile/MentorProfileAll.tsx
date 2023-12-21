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
import Spinner from "../../components/Spinner";

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
  userType: string;
  first_name: string;
  last_name: string;
  email: string;
  nationality: string;
  isDeactivated: boolean;
  profilePic: string;
  hourlyRate: number;
  updatedAt: string;
  password: string;
  mentor: boolean;
  isDeleted: boolean;
  isverified: boolean;
  createdAt: string;
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
    isDeactivated: false,
    hourlyRate: 0,
    userType: "",
    profilePic: "",
    updatedAt: "",
    password: "",
    mentor: true,
    isDeleted: false,
    isverified: false,
    createdAt: "",
  };

  const [profile, setProfile] = useState<profileData>(initialProfile);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    setIsLoading(true);
    getProfileDetails(userId)
      .then((res) => {
        setProfile(res);
        console.log(res.profilePic);
        setIsLoading(false);
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };

  return (
    <Card sx={{ background: "#F6FAFF" }}>
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Basicinfo
              profileData={profile}
              profileImg={profile.profilePic}
            />
            <br />
            <br />
          </>
        )}
      </Container>
    </Card>
  );
};
export default MentorProfileAll;
