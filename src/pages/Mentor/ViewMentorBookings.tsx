import React from "react";
import {
  Avatar,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styled from "styled-components";
import clockIcon from "../../Assets/Images/clock.png";
import personImg from "../../Assets/Images/person.jpeg";
import { BsEye } from "react-icons/bs";
import Cancel from "@mui/icons-material/Cancel";
import Visibility from "@mui/icons-material/Visibility";
import { Box } from "@mui/system";
import { formatDate } from "../../helper-functions";

export const ViewMentorBooking = ({
  open,
  setShowDetails,
  data,
}: {
  open: boolean;
  setShowDetails: Function;
  data: any;
}): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog open={open} maxWidth={"xl"}>
      <DialogContent>
        <Box
          display="grid"
          gridTemplateColumns={!isMobile ? "repeat(2, 2fr)" : "repeat(2, 2fr)"}
          gap={2}
        >
          <Stack
            sx={{
              background: "#5F61BE",
              color: "white",
              borderRadius: "10px",
              p: 1,
              gridColumn: "span 6",
              width: "fit-content",
            }}
          >
            <Typography fontWeight={600} noWrap>
              {data?.bookingSubject}
            </Typography>
          </Stack>
          <Stack
            alignItems={"flex-end"}
            justifyContent={"center"}
            sx={{ gridColumn: "span 6" }}
          >
            <Typography fontWeight={600}>N/A</Typography>
          </Stack>
          <Stack sx={{ gridColumn: "span 12" }}>
            <Typography textAlign={"left"} color={"#7A7A7A"} fontSize={"small"}>
              {data?.description}
            </Typography>
          </Stack>
          <Stack
            flexDirection={"column"}
            sx={
              !isMobile ? { gridColumn: "span 6" } : { gridColumn: "span 12" }
            }
          >
            <Stack
              sx={{
                background: "#5F61BE",
                color: "white",
                borderRadius: "10px",
                p: 1,
                mt: 2,
                mb: 2,
                width: "fit-content",
              }}
            >
              <Typography>Date & Time</Typography>
            </Stack>
            <Typography textAlign={"left"} fontSize={"small"} color={"#7A7A7A"}>
              {formatDate(data?.bookingDate, "")}
            </Typography>
            <Typography textAlign={"left"} fontSize={"small"} color={"#7A7A7A"}>
              {data?.time}
            </Typography>
            <Typography textAlign={"left"} fontSize={"small"} color={"#7A7A7A"}>
              {data?.duration} Minutes
            </Typography>
          </Stack>

          <Stack flexDirection={"column"}>
            <Stack
              sx={{
                background: "#5F61BE",
                color: "white",
                borderRadius: "10px",
                p: 1,
                mt: 2,
                mb: 2,
                width: "fit-content",
              }}
            >
              <Typography>Student Information</Typography>
            </Stack>
            <Stack flexDirection={"row"}>
              <Avatar />
              <Stack flexDirection={"column"} sx={{ ml: 1 }}>
                <Typography
                  noWrap
                  variant="h6"
                  fontSize={"medium"}
                  fontWeight={600}
                >
                  {data?.student[0]?.first_name + data?.student[0]?.last_name}
                </Typography>
                <Typography noWrap color={"#7A7A7A"}>
                  {data?.student[0]?.email}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          size="large"
          variant="contained"
          sx={{ background: "#7476D1", borderRadius: "20px" }}
          onClick={() => console.log("f")}
        >
          Accept
        </Button>
        <Button variant="outlined" sx={{ borderRadius: "20px" }} onClick={() => setShowDetails(false)} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
