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

type profileData = {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  nationality: string;
  isDeactivated: boolean;
};

const Basicinfo = ({ profileData }: { profileData: profileData }) => {
  const isMobile = useMediaQuery("(min-width: 950px)");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentCountry, setCurrentCountry] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [qualification, setQualification] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selectedNationality, setSelectedNationality] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleCountryChange = (_: any, newValue: any) => {
    setSelectedCountry(newValue);
  };

  const [json, setJson] = useState({
    current_country: "",
    address: "",
    phone_no: "",
    current_qualification: "",
    nationality: "",
  });

  useEffect(() => {
    setLoading(true);
    if (profileData) {
      setFirstname(profileData.first_name);
      setLastname(profileData.last_name);
      setEmail(profileData.email);
      setIsActive(profileData?.isDeactivated);
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
        setImage(e.target?.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file.");
    }
    const form = new FormData();
    if (file) {
      form.append("profile", file);
      console.log(form.getAll("profile"));

      uploadprofilepic(form).then((e) => {
        console.log(e, "33");
        if (e.status === true) {
          setLoad(false);
          notifySuccess(e.message);
          setTimeout(() => {
            setRefresh(!refresh);
          }, 2000);
        } else {
          setLoad(false);
          notifyError(e.message);
        }
      });
    }
  };
  const handleSubmit = () => {
    json.address = address;
    json.current_country = selectedCountry;
    json.current_qualification = qualification;
    json.phone_no = phone;
    json.nationality = selectedNationality;

    console.log(json);
    setLoad(true);
    PersonalDetails(json).then((e) => {
      console.log(e);
      if (e.success === true) {
        setLoad(false);
        notifySuccess(e.message);
        setTimeout(() => {
          setRefresh(!refresh);
        }, 2000);
      } else {
        setLoad(false);
        notifyError(e.message);
      }
    });
  };

  return (
    <>
      {loading === true ? (
        <SkeletonProfile />
      ) : (
        <div>
          <Stack flexDirection={"row"} sx={{ padding: "20px" }}>
            <Stack flexDirection={"row"} alignItems={"flex-end"}>
              <img
                src={image || profile}
                alt="profile-pic"
                style={{ width: 85, height: 85, borderRadius: 50 }}
              />
              <Button
                size="small"
                variant="contained"
                startIcon={<FiEdit size={15} color="black" />}
                sx={{
                  height: "20px",
                  position: "absolute",
                  marginLeft: "10px",
                  background: "#fff",
                  color: "black",
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
                {firstname + lastname}
              </Typography>
              <Typography>{email}</Typography>
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
                <LabelProfileb>Email Address</LabelProfileb>
                <TextInput
                  width={"100%"}
                  value={email}
                  editable
                  onChange={(e) => setEmail(e.target.value)}
                />
              </ColumnStudentForm>
              <ColumnStudentForm>
                <LabelProfileb>User Name</LabelProfileb>
                <TextInput
                  width={"100%"}
                  editable
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </ColumnStudentForm>
            </PositionProfileForm>
            <br />
            <PositionProfileForm>
              <ColumnStudentForm>
                <LabelProfileb>First Name</LabelProfileb>
                <TextInput
                  width={"100%"}
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </ColumnStudentForm>
              <ColumnStudentForm>
                <LabelProfileb>Last Name</LabelProfileb>
                <TextInput
                  width={"100%"}
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </ColumnStudentForm>
            </PositionProfileForm>
            <br />
            <PositionProfileForm>
              <ColumnStudentForm>
                <LabelProfileb>Hourly Rate</LabelProfileb>
                <TextInput
                  type={"number"}
                  width={"100%"}
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </ColumnStudentForm>
            </PositionProfileForm>
            <br />
            <PositionProfileForm>
              <ColumnStudentForm>
                <LabelProfileb>Account</LabelProfileb>
                <Stack flexDirection={"row"}>
                  <Stack flexDirection={"row"} alignItems={"center"}>
                    <IconButton>
                      <Radio checked={profileData.isDeactivated} />
                    </IconButton>
                    <LabelProfileb>Active</LabelProfileb>
                  </Stack>
                  <Stack flexDirection={"row"} alignItems={"center"}>
                    <IconButton>
                      <Radio checked={!profileData.isDeactivated} />
                    </IconButton>
                    <LabelProfileb>In-Active</LabelProfileb>
                  </Stack>
                </Stack>
              </ColumnStudentForm>
            </PositionProfileForm>
            <ButtonComp
              style={{
                padding: "8px",
                float: "right",
              }}
              fontSize={"12px"}
              width={isMobile ? "20%" : "60%"}
              title="Save Changes"
              onClick={() => handleSubmit()}
            />
          </ContainerForm>
        </div>
      )}
    </>
  );
};
export default Basicinfo;
