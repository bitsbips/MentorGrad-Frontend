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
} from "./StudentProfileStyles";
import { Autocomplete, Avatar, Box, Skeleton, TextField } from "@mui/material";
import User from "../../Assets/Images/user.jpeg";
import ButtonComp from "../Button";
import BottomLink from "../BottomLink";
import { Link } from "react-router-dom";
import { TopRightText1 } from "../../pages/AuthFlow/AuthStyles";
import TextInput from "./InputProfile";
import PhoneInputComp from "../PhoneInput/PhoneNumberInput";
import LineInput from "../LineInput";
import DropdownCompo from "../Dropdown";
import { Country, Level, Qualification, TestCountry } from "../../Data/Data";
import SearchDropdown from "../SearchDropdown";
import { InputHolder } from "../UserForm/UserFormStyles";
import {
  GetUserData,
  IMGURL,
  PersonalDetails,
  fetchImagesBLOB,
  uploadprofilepic,
  getUserById,
  adminEditUser,
} from "../../api";
import Loadercom from "../Loadercom";
import SkeletonProfile from "../SkeletonLoader/SkeletonProfile";
import { notifyError, notifySuccess } from "../Toastifycom";
import { add } from "lodash";
import { Context } from "../../Context/ContextStates";
import useMediaQuery from "../../hooks/MediaQuery";
import { jwtDecode } from "../../helper-functions";
import BorderRadius from "../../pages/Admin/layout/Customization/BorderRadius";
const Basicinfo = () => {
  const userData = jwtDecode(localStorage.getItem("@storage_Key"));
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
  const { nationality, setNationality } = useContext(Context);
  const [selectedNationality, setSelectedNationality] = useState<string>("");
  const { countryData, setCountryData } = useContext(Context);
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

    GetUserData()
      .then((e) => {
        console.log(e);
        setSelectedCountry(e.personalDetails.current_country);
        console.log(e.personalDetails.current_country.name, "ccc");
        setAddress(e.personalDetails.address);
        setPhone(e.personalDetails.phone_no);
        setQualification(e.personalDetails.current_qualification);
        setSelectedNationality(e.personalDetails.nationality);
        setImage(e.profileDetails.profilePic);
        // fetchImagesBLOB(e.profileDetails.profilePic.filename).then((e) => {
        //   console.log("IMAGEEEEEEEEEEEEEEEEEEEE", URL.createObjectURL(e));
        //   setImage(URL.createObjectURL(e));
        // });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });

    getUserById(userData.id)
      .then((e) => {
        console.log(e);
        setFirstname(e.data.first_name);
        setLastname(e.data.last_name);
        setEmail(e.data.email);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, [refresh]);
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
    adminEditUser(userData.id, {
      first_name: firstname,
      last_name: lastname,
    })
      .then((e) => {})
      .catch((error) => {
        console.error("Error updating the data", error);
        setLoad(false);
      });
  };

  return (
    <RightBorder>
      <TopText>Basic Information</TopText>
      {loading === true ? (
        <SkeletonProfile />
      ) : (
        <div>
          <ImageContainerpo>
            {
              <div>
                <img
                  src={image || User}
                  alt="profile-pic"
                  style={{ width: 70, height: 70, borderRadius: 15 }}
                />
              </div>
            }

            <ButtonComp
              style={{ alignSelf: "center" }}
              fontSize={"10px"}
              title="Upload Picture"
              onClick={() => handleFileInputClick()}
              width={"40%"}
            />
            <Box
              sx={{
                marginLeft: "0px",
                alignSelf: "center",
                marginTop: "15px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <TopRightText1 style={{ marginLeft: "0px", alignSelf: "center" }}>
                Delete
              </TopRightText1>
            </Box>
          </ImageContainerpo>
          <input
            accept="image/*"
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          <ContainerForm>
            <PositionProfileForm style={{ marginTop: "10px" }}>
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
                <LabelProfileb>Phone Number</LabelProfileb>
                <PhoneInputComp
                  value={phone}
                  onChange={(e: any) => {
                    setPhone(e);
                  }}
                />
              </ColumnStudentForm>
            </PositionProfileForm>
            <InputHolder>
              <LabelProfile>Country of Current Residence</LabelProfile>
              <Autocomplete
                disablePortal
                id="Country"
                options={countryData}
                value={selectedCountry}
                sx={{
                  width: "100%",
                  borderRadius: 5,
                  backgroundColor: "#fffff",
                  "& fieldset": {
                    borderRadius: "15px",
                    borderWidth: "1.5px",
                    borderColor: "#D6D6D6",
                    paddingTop: "18px",
                    paddingBottom: "18px",
                    marginTop: "-7px",
                  },
                }}
                onChange={handleCountryChange}
                getOptionLabel={(country: any) => (country ? country.name : "")}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label=""
                    size="small"
                    placeholder="Select"
                  />
                )}
              />
            </InputHolder>
            <InputHolder>
              <LabelProfile>Nationality</LabelProfile>
              <Autocomplete
                disablePortal
                id="Country"
                options={nationality || []}
                value={selectedNationality}
                sx={{
                  width: "100%",
                  borderRadius: 5,
                  backgroundColor: "#fffff",
                  "& fieldset": {
                    borderRadius: "15px",
                    borderWidth: "1.5px",
                    borderColor: "#D6D6D6",
                    paddingTop: "18px",
                    paddingBottom: "18px",
                    marginTop: "-7px",
                  },
                }}
                onChange={(event, selectedValue: any) =>
                  setSelectedNationality(selectedValue)
                }
                getOptionLabel={(country: any) => (country ? country : "")}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label=""
                    size="small"
                    placeholder="Select"
                  />
                )}
              />
            </InputHolder>
            <InputHolder>
              <LabelProfile>Current Qualification</LabelProfile>
              <DropdownCompo
                padding={isMobile ? "0.2%" : "1%"}
                value={qualification}
                width={"100%"}
                id={"1"}
                onChange={(e) => setQualification(e.target.value)}
                data={Level}
              />
            </InputHolder>
            <InputHolder>
              <LabelProfile>Address</LabelProfile>
              <TextInput
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder=""
                id={"1"}
                width={"100%"}
                type={"text"}
                sx={{ height: "1em" }}
              />
            </InputHolder>
            <ButtonComp
              load={load}
              style={{
                marginTop: "4%",
                padding: "8px",
                marginBottom: "5%",
                borderRadius: "15px",
              }}
              fontSize={"12px"}
              width={isMobile ? "20%" : "60%"}
              title="Save Changes"
              onClick={handleSubmit}
            />
          </ContainerForm>
        </div>
      )}
    </RightBorder>
  );
};
export default Basicinfo;
