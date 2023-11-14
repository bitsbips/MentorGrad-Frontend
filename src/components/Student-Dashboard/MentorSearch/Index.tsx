import React, { useEffect, useState } from "react";
import { ContainerDashboard } from "../StudentDahboardStyles";
import {
  PositionHeader,
  PositionImage,
  RightBorderDashboard,
  RightContainerDash,
} from "../../StudentDashboard/StudentDashboardStyles";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchFilter from "./SearchFilter";
import { GetCountryList, findMentors } from "../../../api";
import { notifyError } from "../../Toastifycom";
import picture from "../../../Assets/Images/user.jpeg";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoneyIcon from "@mui/icons-material/Money";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Spinner from "../../Spinner";

type Mentor = {
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

  // Create an array to hold the icons
  const starIcons = new Array(4).fill(<StarIcon />);
  // Create a single StarBorderIcon
  const starBorderIcon = <StarBorderIcon />;

  useEffect(() => {
    getAllCountries();
    getMentors();
  }, []);

  const getAllCountries = async () => {
    try {
      GetCountryList().then((e) => {
        setCountries(e?.map((list: any) => list.name));
      });
    } catch (error) {
      notifyError(error);
    }
  };

  const getMentors = () => {
    setshowFilter(false);
    setLoading(true);
    let payload = {
      countryOfResidence: filters.country,
      gender: filters.gender,
      mentoringarea: selectedOptions,
    };
    try {
      findMentors(payload)
        .then((e) => {
          setMentorList(e);
          setLoading(false);
        })
        .catch((err) => {
          notifyError(err);
        });
    } catch (error) {
      setLoading(false);
      notifyError(error);
    }
  };

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setFilters((filters) => ({
      ...filters,
      [target.name]: target.checked,
    }));
  };

  const handleCheckboxChange = (value: string) => {
    // Check if the value is already in the selectedOptions array
    if (selectedOptions.includes(value)) {
      // If it is, remove it
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    } else {
      // If it's not, add it
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <>
      {loading && <Spinner />}
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
            {mentorList.length} matches found for: Mentors{" "}
            {filters.country === "" || filters.country === null
              ? "OverAll"
              : ` in 
            ${mentorList[0]?.countryOfResidence}`}
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
          <Grid item sm={12} lg={12}>
            <Grid container gap={2}>
              {!isMobile2 && (
                <Grid item sm={3} lg={3}>
                  <SearchFilter
                    setFilters={setFilters}
                    countries={countries}
                    filters={filters}
                    selectedOptions={selectedOptions}
                    handleChange={handleChange}
                    handleCheckboxChange={handleCheckboxChange}
                    getMentors={getMentors}
                  />
                </Grid>
              )}
              <Grid item sm={12} lg={8}>
                {mentorList?.map((mentor, index) => (
                  <>
                    <RightBorderDashboard>
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
                                ? { width: "25%", borderRadius: "10px" }
                                : { width: "20%", borderRadius: "10px" }
                            }
                            src={
                              mentor?.attachments[0]?.attachmentPath || picture
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
                              {mentor.countryOfResidence}
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
                              {mentor.countryOfResidence}
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
                            sx={
                              isMobile
                                ? {
                                    background: "#5F61BE",
                                    width: "fit-content",
                                    ml: 11,
                                  }
                                : {
                                    background: "#5F61BE",
                                    width: "fit-content",
                                  }
                            }
                          >
                            BOOK APPOINTMENT
                          </Button>
                        </Stack>
                      </Stack>
                    </RightBorderDashboard>
                    <br />
                  </>
                ))}
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
            <DialogContent>
              <SearchFilter
                setFilters={setFilters}
                countries={countries}
                filters={filters}
                selectedOptions={selectedOptions}
                handleChange={handleChange}
                handleCheckboxChange={handleCheckboxChange}
                getMentors={getMentors}
              />
            </DialogContent>
          </Dialog>
        )}
      </ContainerDashboard>
    </>
  );
};

export default MentorSearch;