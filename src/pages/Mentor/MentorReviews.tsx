import React, { useEffect } from "react";
import { Container, ExperticeText } from "./MentorStyles";
import useMediaQuery from "../../hooks/MediaQuery";
import { useNavigate } from "react-router-dom";
import { Grid, Stack, Typography } from "@mui/material";
import personImg from "../../Assets/Images/person.jpeg";
import { makeStyles } from "@material-ui/core";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { getReviews } from "../../api";
import { formatDate, jwtDecode } from "../../helper-functions";
import { notifyError } from "../../components/Toastifycom";

const useStyles = makeStyles({
  container: {
    border: "1px solid #D6D6D6",
    padding: "20px",
  },
  pageTitle: {
    color: "#000",
    leadingTrim: "both",
    textEdge: "cap",
    fontStyle: "bold",
    fontWeight: 600,
    lineHeight: "48px",
    textAlign: "left",
    paddingBottom: "20px",
  },
  personImg: {
    width: "54px",
    height: "54px",
    flexShrink: 0,
    borderRadius: "54px",
  },
  heading: {
    fontWeight: 600,
  },
  date: {
    color: "#858585",
    leadingTrim: "both",
    textEdge: "cap",
    fontSize: "0.8rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "48px" /* 342.857% */,
  },
  description: {
    textAlign: "left",
    padding: "10px",
    color: "#505050",
  },
});

// Define a type for the review object
type Review = {
  reviewer?: {
    first_name?: string;
    last_name?: string;
  };
  updatedAt?: string;
  rating?: number | 0;
  // Add other properties as needed
};

const MentorReviews = (): JSX.Element => {
  const isMobile = useMediaQuery("(min-width: 950px)");
  const navigate = useNavigate();
  const classes = useStyles();

  // Create an array to hold the icons
  const starIcons = new Array(4).fill(<StarIcon />);
  // Create a single StarBorderIcon
  const starBorderIcon = <StarBorderIcon />;

  // Get the user from your authentication system or local storage
  const userId: String = jwtDecode(
    localStorage.getItem("@storage_Key")
  )?.userId;

  const [reviews, setReviews] = React.useState<Review[]>([]);

  useEffect(() => {
    getAllReviews();
  }, []);

  const getAllReviews = () => {
    getReviews(userId)
      .then((res) => {
        setReviews(res);
        console.log(res);
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };

  return (
    <>
      <Grid item xs={12} sm={12} lg={12}>
        <Typography variant="h5" className={classes.pageTitle}>
          Reviews
        </Typography>
      </Grid>
      {reviews?.map((review, index) => (
        <>
        <Grid container className={classes.container} key={index}>
          <Grid item xs={12} sm={12} lg={6}>
            <Stack flexDirection={"row"}>
              <Stack flexDirection={"row"}>
                <img src={personImg} className={classes.personImg} />
              </Stack>
              <Stack
                flexDirection={"column"}
                alignItems={"flex-start"}
                sx={{ marginLeft: "15px" }}
              >
                <Typography variant="h6" className={classes.heading}>
                  {`${review?.reviewer?.first_name} ${review?.reviewer?.last_name}` ||
                    ""}
                </Typography>
                <Typography className={classes.date}>
                  {formatDate(review?.updatedAt, "")}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            {review?.rating !== undefined && (
              <>
                <Stack
                  flexDirection={"row"}
                  sx={{ justifyContent: "flex-end" }}
                >
                  {new Array(review?.rating).fill(<StarIcon sx={{color:"#f2e644"}}/>)}
                  {new Array(5 - review?.rating).fill(<StarBorderIcon />)}
                </Stack>
              </>
            )}
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Typography className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo para sed do in consequat.
            </Typography>
          </Grid>
        </Grid>
        <br/>
        </>
      ))}
    </>
  );
};
export default MentorReviews;
