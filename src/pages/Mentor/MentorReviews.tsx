import React from "react";
import { Container, ExperticeText } from "./MentorStyles";
import useMediaQuery from "../../hooks/MediaQuery";
import { useNavigate } from "react-router-dom";
import { Grid, Stack, Typography } from "@mui/material";
import personImg from "../../Assets/Images/person.jpeg";
import { makeStyles } from "@material-ui/core";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

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
    paddingBottom:"20px"
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

const MentorReviews = (): JSX.Element => {
  const isMobile = useMediaQuery("(min-width: 950px)");
  const navigate = useNavigate();
  const classes = useStyles();

  // Create an array to hold the icons
  const starIcons = new Array(4).fill(<StarIcon />);
  // Create a single StarBorderIcon
  const starBorderIcon = <StarBorderIcon />;

  return (
    <>
      <Grid item xs={12} sm={12} lg={12}>
        <Typography variant="h5" className={classes.pageTitle}>Reviews</Typography>
      </Grid>
      <Grid container className={classes.container}>
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
                Harvey Gray
              </Typography>
              <Typography className={classes.date}>02 Oct, 2023</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Stack flexDirection={"row"} sx={{ justifyContent: "flex-end" }}>
            {starIcons.map((icon, index) => (
              <div key={index}>{icon}</div>
            ))}
            <div>{starBorderIcon}</div>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <Typography className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo para sed
            do in consequat.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default MentorReviews;
