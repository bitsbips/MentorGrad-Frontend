import React, { useEffect } from "react";
import { Container, ExperticeText } from "./MentorStyles";
import useMediaQuery from "../../hooks/MediaQuery";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Rectangle from "../../Assets/Images/Rectangle.png";
import { makeStyles } from "@material-ui/core";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { _deleteBlog, getBlogs, updateBlog } from "../../api";
import { formatDate, jwtDecode } from "../../helper-functions";
import { notifyError, notifySuccess } from "../../components/Toastifycom";
import EditNoteIcon from "@mui/icons-material/EditNote";

const useStyles = makeStyles({
  container: {
    border: "1px solid #D6D6D6",
    minWidth: "280px",
  },
  subContainer: {
    padding: "15px",
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
    fontSize: "0.5rem",
    lineHeight: "38px" /* 342.857% */,
    textAlign: "left",
  },
  description: {
    textAlign: "left",
    padding: "10px",
    color: "#505050",
  },
});

type Blog = {
  _id: string;
  updatedAt: string;
  title: string;
  description: string;
  shortDescription: string;
  Image: string;
  coverImage: string;
};

type Blogs = Blog[];

const MentorBlogs = (): JSX.Element => {
  const isMobile = useMediaQuery("(min-width: 950px)");
  const navigate = useNavigate();
  const classes = useStyles();

  // Get the user from your authentication system or local storage
  const userId: String = jwtDecode(
    localStorage.getItem("@storage_Key")
  )?.userId;

  const [tabs, setTabs] = React.useState("Active");
  const [blogs, setBlogs] = React.useState<Blogs>([]);

  useEffect(() => {
    getAllBlogs("Active");
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    getAllBlogs(newValue);
    setTabs(newValue);
  };

  const getAllBlogs = (type: string) => {
    getBlogs(userId, type)
      .then((res) => {
        setBlogs(res);
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };

  const numTimes = 6; // Change this to the number of times you want to render the content
  const contentArray = Array.from({ length: numTimes }, (_, index) => index);

  function TruncateString(text: string, maxLength: number) {
    if (text.length <= maxLength) {
      return <span>{text}</span>;
    } else {
      const truncatedText = text.slice(0, maxLength) + "...";
      return <span>{truncatedText}</span>;
    }
  }

  const deleteBlog = (id: string) => {
    _deleteBlog(id)
      .then((res) => {
        getAllBlogs("Active");
        notifySuccess(res?.message);
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };

  return (
    <>
      <Grid item xs={12} sm={12} lg={12}>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Typography variant="h5" className={classes.pageTitle}>
            Blog
          </Typography>
          <Button
            onClick={() => navigate('/dashboard?tab=10')}
            sx={{
              background: '#7476D1',
              fontSize: '14px',
              height: '40px',
              '&:hover': {
                background: '#5f61be',
              },
            }}
            size="small"
            variant="contained"
            startIcon={<EditNoteIcon fontSize="large" />}
          >
            Craete Blog
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <Tabs
          value={tabs}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Active Blog" value={"Active"} />
          <Tab label="InActive Blog" value={"inActive"} />
        </Tabs>
      </Grid>
      <hr />
      <Grid item lg={12}>
        <Grid container spacing={2}>
          {blogs.map((blog, index) => (
            <Grid item lg={4} key={index}>
              <Stack className={classes.container}>
                <img
                  src={blog?.coverImage || Rectangle}
                  height={"160"}
                  style={{ maxWidth: "340px" }}
                />
                <Stack className={classes.subContainer}>
                  <Typography className={classes.date}>
                    {formatDate(blog?.updatedAt, "dd MMM yyyy")}
                  </Typography>
                  <Typography variant="h6" fontWeight={600} textAlign={"left"}>
                    {blog?.title}
                  </Typography>
                  <Typography textAlign={"left"}>
                    {TruncateString(blog?.shortDescription, 30)}
                  </Typography>
                  <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    sx={{ paddingTop: "10px" }}
                  >
                    <Stack
                      flexDirection={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      width={50}
                      sx={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate(`/dashboard?tab=10&edit=true&id=${blog?._id}`)
                      }
                    >
                      <Stack>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <path
                            d="M14.6534 2.61948L12.3805 0.346581C12.2706 0.236458 12.1401 0.149147 11.9963 0.0896676C11.8526 0.0301886 11.6985 -0.000284109 11.5429 1.9961e-06C11.2389 1.9961e-06 10.9366 0.115265 10.7053 0.346581L7.89474 3.1579H0.789474C0.580092 3.1579 0.379286 3.24107 0.231231 3.38913C0.0831764 3.53718 0 3.73799 0 3.94737V14.2105C0 14.4199 0.0831764 14.6207 0.231231 14.7688C0.379286 14.9168 0.580092 15 0.789474 15H11.0526C11.262 15 11.4628 14.9168 11.6109 14.7688C11.7589 14.6207 11.8421 14.4199 11.8421 14.2105V7.10526L14.6534 4.29395C14.8847 4.06263 15 3.75947 15 3.45632C15 3.15316 14.8847 2.85079 14.6534 2.61948ZM6.71053 10.0042L4.99579 8.28948L9.96395 3.32132L11.6787 5.03605L6.71053 10.0042ZM4.68868 8.94711L6.075 10.3113L4.73684 10.2632L4.68868 8.94711ZM10.2632 13.4211H1.57895V4.73684H6.31579L3.80526 7.24737C3.57395 7.47869 3.42789 7.88842 3.30868 8.265C3.18237 8.65974 3.15789 9.09869 3.15789 9.42553V11.8421H5.57447C5.90132 11.8421 6.44921 11.7632 6.81474 11.6132C7.18105 11.4632 7.52211 11.3392 7.75263 11.1079L10.2632 8.68421V13.4211ZM12.2368 4.4779L10.5221 2.76316L11.5429 1.74237L13.2568 3.45711L12.2368 4.4779Z"
                            fill="#04AE1B"
                          />
                        </svg>
                      </Stack>
                      <Stack sx={{ color: "green" }}>Edit</Stack>
                    </Stack>

                    <Stack
                      flexDirection={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      sx={{ cursor: "pointer" }}
                      onClick={() => deleteBlog(blog?._id)}
                    >
                      <Stack>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M5.25 15.75C4.8375 15.75 4.48425 15.603 4.19025 15.309C3.89625 15.015 3.7495 14.662 3.75 14.25V4.5H3V3H6.75V2.25H11.25V3H15V4.5H14.25V14.25C14.25 14.6625 14.103 15.0157 13.809 15.3097C13.515 15.6038 13.162 15.7505 12.75 15.75H5.25ZM12.75 4.5H5.25V14.25H12.75V4.5ZM6.75 12.75H8.25V6H6.75V12.75ZM9.75 12.75H11.25V6H9.75V12.75Z"
                            fill="#FF0000"
                          />
                        </svg>
                      </Stack>
                      <Stack sx={{ color: "red" }}>Delete</Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default MentorBlogs;
