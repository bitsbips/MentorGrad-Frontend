import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoneyIcon from "@mui/icons-material/Money";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useNavigate } from "react-router-dom";
import {
  RightContainerDash,
  RightBorderDashboard,
  ContainerDashboard,
} from "../../components/StudentDashboard/StudentDashboardStyles";
import Spinner from "../../components/Spinner";
import { Container } from "../AuthFlow/AuthStyles";
import { ContainerDa } from "../../components/StudentProfileDetails/StudentProfileStyles";
import {
  findMentors,
  getMentorBySuggessionCountry,
  getMentorBySuggessionLanguage,
  getMentorBySuggessionUniversity,
} from "../../api";

type Mentor = {
  _id: string;
  userId: string;
  userName: string;
  firstName: string;
  lastName: string;
  countryOfResidence: string;
  hourlyRate: number;
  attachments: Array<{
    attachmentPath: string;
    attachmentURL: string;
    name: string;
  }>;
};

type MentorList = Mentor[];

const MentorSearch = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isMobile2 = useMediaQuery("(max-width: 1200px)");
  const [showFilter, setshowFilter] = useState(false);
  const [filters, setFilters] = useState({
    country: "",
    gender: "",
    course: "",
    location: "",
  });
  const [countries, setCountries] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const [mentorList, setMentorList] = useState<MentorList>([]);
  const [mentorListCountry, setMentorListCountry] = useState<MentorList>([]);
  const [mentorListLanguage, setMentorListLanguage] = useState<MentorList>([]);
  const [mentorListUniversity, setMentorListUniversity] = useState<MentorList>(
    []
  );

  useEffect(() => {
    getCountryMentors();
    getLanguageMentors();
    getUniversityMentors();
  }, []);

  const getCountryMentors = async () => {
    await getMentorBySuggessionCountry()
      .then((res) => {
        setMentorListCountry(res);
      })
      .catch((err) => {});
  };

  const getLanguageMentors = async () => {
    await getMentorBySuggessionLanguage()
      .then((res) => {
        setMentorListLanguage(res);
      })
      .catch((err) => {});
  };

  const getUniversityMentors = async () => {
    await getMentorBySuggessionUniversity()
      .then((res) => {
        setMentorListUniversity(res);
      })
      .catch((err) => {});
  };

  return (
    <>
      <Container>
        <ContainerDa>
          <ContainerDashboard>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography
                sx={{ mt: 1, mb: 2.5 }}
                textAlign={"left"}
                fontWeight={700}
                fontSize={isMobile ? "small" : "large"}
                noWrap
              >
                Smart Matches
              </Typography>
              {isMobile2 && (
                <IconButton
                  onClick={() => setshowFilter(true)}
                  sx={{ p: 0, m: 0, mb: 1 }}
                >
                  <FilterAltIcon fontSize="small" sx={{ color: "#5F61BE" }} />
                </IconButton>
              )}
            </Stack>
            <RightContainerDash>
              <Grid
                item
                sm={12}
                lg={12}
                sx={{
                  backgroundColor: "#fff",
                  padding: 4,
                  border: "1px solid #D6D6D6",
                  borderRadius: "15px",
                }}
              >
                <Grid container gap={2}>
                  <h5 style={{ color: "#7A7A7A", fontWeight: 400 }}>
                    Mentor you may know from same country
                  </h5>
                  <Grid item sm={12} lg={12}>
                    {loading ? (
                      <Spinner />
                    ) : (
                      mentorListCountry?.map((mentor, index) => (
                        <Box
                          sx={{
                            margin: isMobile ? "0px 15px" : "",
                          }}
                          key={index}
                        >
                          <RightBorderDashboard
                            style={{
                              border: "1px solid #D6D6D6",
                              backgroundColor: "#FFF",
                            }}
                          >
                            <Stack
                              justifyContent={"space-between"}
                              flexDirection={isMobile ? "column" : "row"}
                              gap={isMobile ? 3 : 0}
                              p={isMobile ? 2.5 : 0}
                            >
                              <Stack
                                flexDirection={"row"}
                                gap={2}
                                width={isMobile ? "100%" : "70%"}
                              >
                                <img
                                  style={
                                    isMobile
                                      ? { width: "35%", borderRadius: "10px" }
                                      : { width: "20%", borderRadius: "10px" }
                                  }
                                  src={
                                    mentor?.attachments?.length > 0
                                      ? mentor?.attachments[0]?.attachmentPath
                                      : "https://mentorgrad.s3.us-west-2.amazonaws.com/dummy2.jpg"
                                  }
                                />
                                <Stack flexDirection={"column"}>
                                  <Typography
                                    textAlign={"left"}
                                    noWrap
                                    sx={{ color: "#5F61BE" }}
                                    fontSize={"medium"}
                                    fontWeight={600}
                                  >
                                    {mentor?.userName}
                                  </Typography>
                                  <Typography
                                    textAlign={"left"}
                                    noWrap
                                    fontSize={"small"}
                                    sx={{ color: "#8E8E8E" }}
                                  >
                                    Data Scientist
                                  </Typography>
                                  <Stack
                                    flexDirection={"row"}
                                    sx={{ mt: 2 }}
                                    alignItems={"center"}
                                  >
                                    {new Array(4).fill(
                                      <StarIcon
                                        sx={{ color: "#FFD707" }}
                                        fontSize="small"
                                      />
                                    )}
                                    {new Array(1).fill(
                                      <StarBorderIcon fontSize="small" />
                                    )}
                                    <small>(17)</small>
                                  </Stack>
                                  <Typography
                                    textAlign={"left"}
                                    sx={{ color: "#757575" }}
                                    fontSize={"small"}
                                  >
                                    {mentor?.countryOfResidence}
                                  </Typography>
                                </Stack>
                              </Stack>

                              <Stack flexDirection={"column"} gap={1}>
                                <Stack
                                  flexDirection={"row"}
                                  alignItems={"flex-end"}
                                  gap={1}
                                >
                                  <ReviewsIcon fontSize="small" />
                                  <Typography noWrap fontSize="small">
                                    17 Reviews
                                  </Typography>
                                </Stack>

                                <Stack
                                  flexDirection={"row"}
                                  alignItems={"flex-end"}
                                  gap={1}
                                >
                                  <LocationOnIcon fontSize="small" />
                                  <Typography noWrap fontSize="small">
                                    {mentor?.countryOfResidence}
                                  </Typography>
                                </Stack>

                                <Stack
                                  flexDirection={"row"}
                                  alignItems={"flex-end"}
                                  gap={1}
                                >
                                  <MoneyIcon fontSize="small" />
                                  <Typography noWrap fontSize="small">
                                    {mentor?.hourlyRate}
                                  </Typography>
                                </Stack>

                                <Button
                                  size="small"
                                  variant="contained"
                                  onClick={() =>
                                    navigate(
                                      `/bookAppointment?id=${mentor?._id}`
                                    )
                                  }
                                  sx={
                                    isMobile
                                      ? {
                                          background: "#5F61BE",
                                          width: "fit-content",
                                          mt: "10px",
                                          ml: "15vw",
                                          px: "10px",
                                        }
                                      : {
                                          background: "#5F61BE",
                                          width: "fit-content",
                                          mt: "10px",
                                        }
                                  }
                                >
                                  BOOK APPOINTMENT
                                </Button>
                              </Stack>
                            </Stack>
                          </RightBorderDashboard>
                          <br />
                        </Box>
                      ))
                    )}
                  </Grid>
                </Grid>
                <Grid container gap={2} sx={{ mt: 4 }}>
                  <h5 style={{ color: "#7A7A7A", fontWeight: 400 }}>
                    Mentor you may know from same university
                  </h5>
                  <Grid item sm={12} lg={12}>
                    {loading ? (
                      <Spinner />
                    ) : (
                      mentorListUniversity?.map((mentor, index) => (
                        <Box
                          sx={{ margin: isMobile ? "0px 15px" : "" }}
                          key={index}
                        >
                          <RightBorderDashboard
                            style={{
                              border: "1px solid #D6D6D6",
                              backgroundColor: "#FFF",
                            }}
                          >
                            <Stack
                              justifyContent={"space-between"}
                              flexDirection={isMobile ? "column" : "row"}
                              gap={isMobile ? 3 : 0}
                              p={isMobile ? 2.5 : 0}
                            >
                              <Stack
                                flexDirection={"row"}
                                gap={2}
                                width={isMobile ? "100%" : "70%"}
                              >
                                <img
                                  style={
                                    isMobile
                                      ? { width: "35%", borderRadius: "10px" }
                                      : { width: "20%", borderRadius: "10px" }
                                  }
                                  src={
                                    mentor?.attachments?.length > 0
                                      ? mentor?.attachments[0]?.attachmentPath
                                      : "https://mentorgrad.s3.us-west-2.amazonaws.com/dummy2.jpg"
                                  }
                                />
                                <Stack flexDirection={"column"}>
                                  <Typography
                                    textAlign={"left"}
                                    noWrap
                                    sx={{ color: "#5F61BE" }}
                                    fontSize={"medium"}
                                    fontWeight={600}
                                  >
                                    {mentor?.userName}
                                  </Typography>
                                  <Typography
                                    textAlign={"left"}
                                    noWrap
                                    fontSize={"small"}
                                    sx={{ color: "#8E8E8E" }}
                                  >
                                    Data Scientist
                                  </Typography>
                                  <Stack
                                    flexDirection={"row"}
                                    sx={{ mt: 2 }}
                                    alignItems={"center"}
                                  >
                                    {new Array(4).fill(
                                      <StarIcon
                                        sx={{ color: "#FFD707" }}
                                        fontSize="small"
                                      />
                                    )}
                                    {new Array(1).fill(
                                      <StarBorderIcon fontSize="small" />
                                    )}
                                    <small>(17)</small>
                                  </Stack>
                                  <Typography
                                    textAlign={"left"}
                                    sx={{ color: "#757575" }}
                                    fontSize={"small"}
                                  >
                                    {mentor?.countryOfResidence}
                                  </Typography>
                                </Stack>
                              </Stack>

                              <Stack flexDirection={"column"} gap={1}>
                                <Stack
                                  flexDirection={"row"}
                                  alignItems={"flex-end"}
                                  gap={1}
                                >
                                  <ReviewsIcon fontSize="small" />
                                  <Typography noWrap fontSize="small">
                                    17 Reviews
                                  </Typography>
                                </Stack>

                                <Stack
                                  flexDirection={"row"}
                                  alignItems={"flex-end"}
                                  gap={1}
                                >
                                  <LocationOnIcon fontSize="small" />
                                  <Typography noWrap fontSize="small">
                                    {mentor?.countryOfResidence}
                                  </Typography>
                                </Stack>

                                <Stack
                                  flexDirection={"row"}
                                  alignItems={"flex-end"}
                                  gap={1}
                                >
                                  <MoneyIcon fontSize="small" />
                                  <Typography noWrap fontSize="small">
                                    {mentor?.hourlyRate}
                                  </Typography>
                                </Stack>

                                <Button
                                  size="small"
                                  variant="contained"
                                  onClick={() =>
                                    navigate(
                                      `/bookAppointment?id=${mentor?._id}`
                                    )
                                  }
                                  sx={
                                    isMobile
                                      ? {
                                          background: "#5F61BE",
                                          width: "fit-content",
                                          mt: "10px",
                                          ml: "15vw",
                                          px: "10px",
                                        }
                                      : {
                                          background: "#5F61BE",
                                          width: "fit-content",
                                          mt: "10px",
                                        }
                                  }
                                >
                                  BOOK APPOINTMENT
                                </Button>
                              </Stack>
                            </Stack>
                          </RightBorderDashboard>
                          <br />
                        </Box>
                      ))
                    )}
                  </Grid>
                </Grid>
                <Grid container gap={2} sx={{ mt: 4 }}>
                  <h5 style={{ color: "#7A7A7A", fontWeight: 400 }}>
                    Mentor you may know with similar language
                  </h5>
                  <Grid item sm={12} lg={12}>
                    {loading ? (
                      <Spinner />
                    ) : (
                      mentorListLanguage?.map((mentor, index) => (
                        <Box
                          sx={{ margin: isMobile ? "0px 15px" : "" }}
                          key={index}
                        >
                          <RightBorderDashboard
                            style={{
                              border: "1px solid #D6D6D6",
                              backgroundColor: "#FFF",
                            }}
                          >
                            <Stack
                              justifyContent={"space-between"}
                              flexDirection={isMobile ? "column" : "row"}
                              gap={isMobile ? 3 : 0}
                              p={isMobile ? 2.5 : 0}
                            >
                              <Stack
                                flexDirection={"row"}
                                gap={2}
                                width={isMobile ? "100%" : "70%"}
                              >
                                <img
                                  style={
                                    isMobile
                                      ? { width: "35%", borderRadius: "10px" }
                                      : { width: "20%", borderRadius: "10px" }
                                  }
                                  src={
                                    mentor?.attachments?.length > 0
                                      ? mentor?.attachments[0]?.attachmentPath
                                      : "https://mentorgrad.s3.us-west-2.amazonaws.com/dummy2.jpg"
                                  }
                                />
                                <Stack flexDirection={"column"}>
                                  <Typography
                                    textAlign={"left"}
                                    noWrap
                                    sx={{ color: "#5F61BE" }}
                                    fontSize={"medium"}
                                    fontWeight={600}
                                  >
                                    {mentor?.userName}
                                  </Typography>
                                  <Typography
                                    textAlign={"left"}
                                    noWrap
                                    fontSize={"small"}
                                    sx={{ color: "#8E8E8E" }}
                                  >
                                    Data Scientist
                                  </Typography>
                                  <Stack
                                    flexDirection={"row"}
                                    sx={{ mt: 2 }}
                                    alignItems={"center"}
                                  >
                                    {new Array(4).fill(
                                      <StarIcon
                                        sx={{ color: "#FFD707" }}
                                        fontSize="small"
                                      />
                                    )}
                                    {new Array(1).fill(
                                      <StarBorderIcon fontSize="small" />
                                    )}
                                    <small>(17)</small>
                                  </Stack>
                                  <Typography
                                    textAlign={"left"}
                                    sx={{ color: "#757575" }}
                                    fontSize={"small"}
                                  >
                                    {mentor?.countryOfResidence}
                                  </Typography>
                                </Stack>
                              </Stack>

                              <Stack flexDirection={"column"} gap={1}>
                                <Stack
                                  flexDirection={"row"}
                                  alignItems={"flex-end"}
                                  gap={1}
                                >
                                  <ReviewsIcon fontSize="small" />
                                  <Typography noWrap fontSize="small">
                                    17 Reviews
                                  </Typography>
                                </Stack>

                                <Stack
                                  flexDirection={"row"}
                                  alignItems={"flex-end"}
                                  gap={1}
                                >
                                  <LocationOnIcon fontSize="small" />
                                  <Typography noWrap fontSize="small">
                                    {mentor?.countryOfResidence}
                                  </Typography>
                                </Stack>

                                <Stack
                                  flexDirection={"row"}
                                  alignItems={"flex-end"}
                                  gap={1}
                                >
                                  <MoneyIcon fontSize="small" />
                                  <Typography noWrap fontSize="small">
                                    {mentor?.hourlyRate}
                                  </Typography>
                                </Stack>

                                <Button
                                  size="small"
                                  variant="contained"
                                  onClick={() =>
                                    navigate(
                                      `/bookAppointment?id=${mentor?._id}`
                                    )
                                  }
                                  sx={
                                    isMobile
                                      ? {
                                          background: "#5F61BE",
                                          width: "fit-content",
                                          mt: "10px",
                                          ml: "15vw",
                                          px: "10px",
                                        }
                                      : {
                                          background: "#5F61BE",
                                          width: "fit-content",
                                          mt: "10px",
                                        }
                                  }
                                >
                                  BOOK APPOINTMENT
                                </Button>
                              </Stack>
                            </Stack>
                          </RightBorderDashboard>
                          <br />
                        </Box>
                      ))
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </RightContainerDash>
            {showFilter && (
              <Dialog
                open={showFilter}
                maxWidth={"xl"}
                sx={{ overflowX: "scroll" }}
              >
                {/* <DialogContent>
                  <SearchFilter
                    setFilters={setFilters}
                    countries={countries}
                    filters={filters}
                    selectedOptions={selectedOptions}
                    handleChange={handleChange}
                    handleCheckboxChange={handleCheckboxChange}
                    getMentors={getMentors}
                  />
                </DialogContent> */}
              </Dialog>
            )}
          </ContainerDashboard>
        </ContainerDa>
      </Container>
    </>
  );
};

export default MentorSearch;
