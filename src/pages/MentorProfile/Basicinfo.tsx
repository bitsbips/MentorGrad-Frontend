import React, { FC, useContext, useEffect, useRef, useState } from "react";
import {
  ColumnStudentForm,
  ContainerForm,
  ImageContainerpo,
  LabelProfile,
  LabelProfileb,
  PositionProfile,
  PositionProfileForm,
  RightBorder,
  RightContainer,
  TopText,
} from "../../components/StudentProfileDetails/StudentProfileStyles";
import {
  Autocomplete,
  Avatar,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Radio,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import User from "../../Assets/Images/Mask1.png";
import { Link } from "react-router-dom";
import { TopRightText1 } from "../../pages/AuthFlow/AuthStyles";
import { Country, Level, Qualification, TestCountry } from "../../Data/Data";
import {
  GetUserData,
  IMGURL,
  PersonalDetails,
  fetchImagesBLOB,
  updateProfileDetails,
  uploadprofilepic,
} from "../../api";
import { add } from "lodash";
import { Context } from "../../Context/ContextStates";
import useMediaQuery from "../../hooks/MediaQuery";
import { notifyError, notifySuccess } from "../../components/Toastifycom";
import SkeletonProfile from "../../components/SkeletonLoader/SkeletonProfile";
import ButtonComp from "../../components/Button";
import TextInput from "../../components/StudentProfileDetails/InputProfile";
import PhoneInputComp from "../../components/PhoneInput/PhoneNumberInput";
import { InputHolder } from "../../components/UserForm/UserFormStyles";
import DropdownCompo from "../../components/Dropdown";
import profile from "../../Assets/Images/person.jpeg";
import { FiEdit } from "react-icons/fi";
import ChangePassword from "./ChangePassword";
import PasswordInput from "../../components/PasswordInput";
import { faGalacticSenate } from "@fortawesome/free-brands-svg-icons";

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

const Basicinfo = ({
  profileData,
  profileImg,
}: {
  profileData: profileData;
  profileImg: any;
}) => {
  const isMobile = useMediaQuery("(min-width: 950px)");
  const [loading, setLoading] = useState(false);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isActive, setIsActive] = useState("Activated");
  const [attachment, setAttachment] = useState<
    {
      name: string;
      base64: string;
      type: string;
      attachmentPath: string;
      file: File;
    }[]
  >([]);

  useEffect(() => {
    setLoading(true);
    if (profileData) {
      console.log(profileData);
      setFirstname(profileData?.first_name);
      setLastname(profileData?.last_name);
      setEmail(profileData?.email);
      setHourlyRate(profileData?.hourlyRate);
      setIsActive(profileData?.isDeactivated ? "DeActivated" : "Activated");
      console.log("IMAGEEE", profileImg);
      setImage(profileImg);
    }
    setLoading(false);
  }, [profileData]);
  // Handle changes to input fields

  // UploadImage
  const [image, setImage] = useState<string | null>(); // Initialize with null or a default image URL
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileInputClick = () => {
    // Trigger the hidden file input
    fileInputRef.current!.click(); // Use the non-null assertion operator (!)
  };
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Use optional chaining to access files array
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const result = e.target?.result;

        if (result && typeof result === "string") {
          const fileData = [
            {
              name: file.name,
              base64: result,
              type: file.type,
              attachmentPath: "",
              file: file,
            },
          ];
          setImage(result);
          setAttachment(fileData);
        } else {
          alert("Error reading the image file.");
        }
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setLoad(true);
    let payload = {
      id: profileData._id,
      email: email,
      userName: firstname,
      firstName: firstname,
      lastName: lastname,
      hourlyRate: hourlyRate,
      isActive: isActive === "Activated" ? true : false,
      attachments: attachment,
    };
    await updateProfileDetails(payload).then((e) => {
      console.log(e);
      if (e.success === true) {
        setLoad(false);
        notifySuccess(e.message);
      } else {
        setLoad(false);
        notifyError(e.message);
      }
      setLoading(false);
    });
  };

  return (
    <>
      <div>
        <Stack flexDirection={"row"} sx={{ padding: "20px" }}>
          <Stack flexDirection={"row"} alignItems={"flex-end"}>
            <Avatar
              src={image || profile}
              alt="profile-pic"
              sx={{ width: 85, height: 85 }}
            />
            {/* <img
                src={image || profile}
                alt="profile-pic"
                style={{ width: 85, height: 85, borderRadius: 50 }}
              /> */}
            <Button
              size="small"
              variant="contained"
              startIcon={<FiEdit size={15} color="black" />}
              sx={{
                height: "18px",
                position: "absolute",
                marginLeft: "30px",
                background: "#fff",
                color: "black",
                "&:hover": {
                  background: "#5f61be",
                },
              }}
              onClick={handleFileInputClick}
            >
              Edit
            </Button>
          </Stack>
          <Stack
            flexDirection={"column"}
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            paddingLeft={"20px"}
          >
            <Typography fontWeight={600} fontSize={20}>
              {firstname + " " + lastname}
            </Typography>
            <Typography sx={{ color: "#A7A7A7" }}>{email}</Typography>
          </Stack>
        </Stack>
        <input
          accept="image/*"
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        <TopText>Basic Information</TopText>
        <ContainerForm>
          <PositionProfileForm style={{ marginTop: "10px" }}>
            <ColumnStudentForm>
              <TextInput
                width={"100%"}
                value={email}
                editable
                label="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                sx={{ backgroundColor: "white", borderRadius: "15px" }}
              />
            </ColumnStudentForm>
            <ColumnStudentForm>
              <TextInput
                width={"100%"}
                editable
                value={firstname}
                label="Username"
                onChange={(e) => setFirstname(e.target.value)}
                sx={{ backgroundColor: "white", borderRadius: "15px" }}
              />
            </ColumnStudentForm>
          </PositionProfileForm>
          <br />
          <PositionProfileForm>
            <ColumnStudentForm>
              <TextInput
                width={"100%"}
                value={firstname}
                label="First Name"
                onChange={(e) => setFirstname(e.target.value)}
                backgroundColor={"#fff"}
                sx={{ backgroundColor: "white", borderRadius: "15px" }}
              />
            </ColumnStudentForm>
            <ColumnStudentForm>
              <TextInput
                width={"100%"}
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                label="Last Name"
                sx={{ backgroundColor: "white", borderRadius: "15px" }}
              />
            </ColumnStudentForm>
          </PositionProfileForm>
        </ContainerForm>
        <br />
        <TopText>Change Password</TopText>
        <ContainerForm>
          <PositionProfileForm>
            <ColumnStudentForm>
              <PasswordInput
                id={"oldpassword"}
                onChange={() => console.log("kek")}
                placeholder={"Old Password"}
                style={{
                  marginTop: 2,
                  backgroundColor: "white",
                  borderRadius: "15px",
                }}
              />
            </ColumnStudentForm>
          </PositionProfileForm>
          <br />
          <PositionProfileForm>
            <ColumnStudentForm>
              <PasswordInput
                id={"newpassword"}
                onChange={() => console.log("kek")}
                placeholder={"New Password"}
                style={{
                  marginTop: 2,
                  backgroundColor: "white",
                  borderRadius: "15px",
                }}
              />
            </ColumnStudentForm>
          </PositionProfileForm>
          <br />
          <PositionProfileForm>
            <ColumnStudentForm>
              <PasswordInput
                id={"confirmpassword"}
                onChange={() => console.log("kek")}
                placeholder={"Confirm New Password"}
                style={{
                  marginTop: 2,
                  backgroundColor: "white",
                  borderRadius: "15px",
                }}
              />
            </ColumnStudentForm>
          </PositionProfileForm>
          <br />
          <PositionProfileForm>
            <ColumnStudentForm>
              <Grid container justifyContent={"flex-end"}>
                <Grid item xs={5}>
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: "4%",
                      padding: { sx: "10px", lg: "20px" },
                      marginBottom: "5%",
                      float: "right",
                      background: "#5f61be",
                      borderRadius: "8px",
                      height: "40px",
                      "&:hover": {
                        background: "#5f61be",
                      },
                      textTransform: "capitalize",
                    }}
                    onClick={() => true}
                    disabled={false}
                  >
                    {!false ? (
                      "Change Password"
                    ) : (
                      <>
                        <CircularProgress
                          sx={{ borderColor: "#fff", color: "#fff" }}
                        />
                      </>
                    )}
                  </Button>
                </Grid>
                <Grid item xs={5}>
                  <Button
                    sx={{
                      marginTop: "4%",
                      padding: { sx: "10px", lg: "20px" },
                      marginBottom: "5%",
                      float: "right",
                      borderRadius: "8px",
                      border: "1px solid #5f61be",
                      height: "40px",
                      "&:hover": {
                        background: "#5f61be",
                      },
                      textTransform: "capitalize",
                    }}
                    onClick={() => true}
                    disabled={false}
                  >
                    {!false ? (
                      "Change Password"
                    ) : (
                      <>
                        <CircularProgress
                          sx={{ borderColor: "#fff", color: "#fff" }}
                        />
                      </>
                    )}
                  </Button>
                </Grid>
              </Grid>
            </ColumnStudentForm>
          </PositionProfileForm>
        </ContainerForm>
        <TopText>Account</TopText>
        <ContainerForm>
          <PositionProfileForm>
            <ColumnStudentForm>
              <Stack flexDirection={"row"}>
                <Stack flexDirection={"row"} alignItems={"center"}>
                  <IconButton>
                    <Radio
                      checked={isActive === "Activated"}
                      onChange={(event) =>
                        setIsActive(
                          event.target.checked ? "Activated" : "DeActivated"
                        )
                      }
                    />
                  </IconButton>
                  <LabelProfileb>Active</LabelProfileb>
                </Stack>
                <Stack flexDirection={"row"} alignItems={"center"}>
                  <IconButton>
                    <Radio
                      checked={isActive === "DeActivated"}
                      onChange={(event) =>
                        setIsActive(
                          event.target.checked ? "DeActivated" : "Activated"
                        )
                      }
                    />
                  </IconButton>
                  <LabelProfileb>In-Active</LabelProfileb>
                </Stack>
              </Stack>
            </ColumnStudentForm>
          </PositionProfileForm>
        </ContainerForm>
        <Button
          sx={{
            marginTop: "4%",
            padding: { sx: "10px", lg: "20px" },
            marginBottom: "5%",
            float: "right",
            width: "160px",
            border: "2px solid #5f61be",
            borderRadius: "8px",
            height: "40px",
            "&:hover": {
              background: "#5f61be",
              color: "white",
            },
            mx: 1,
          }}
          onClick={() => handleSubmit()}
          disabled={loading}
        >
          {!false ? (
            "Cancel"
          ) : (
            <CircularProgress sx={{ borderColor: "#fff", color: "#fff" }} />
          )}
        </Button>

        <Button
          sx={{
            marginTop: "4%",
            padding: { sx: "10px", lg: "20px" },
            marginBottom: "5%",
            float: "right",
            width: "160px",
            color: "#fff",
            background: "#5f61be",
            borderRadius: "8px",
            height: "40px",
            "&:hover": {
              background: "#5f61be",
            },
          }}
          onClick={() => handleSubmit()}
          disabled={loading}
        >
          {!loading ? (
            "Save Changes"
          ) : (
            <CircularProgress sx={{ borderColor: "#fff", color: "#fff" }} />
          )}
        </Button>
      </div>
    </>
  );
};
export default Basicinfo;
