import React, { useState } from "react";
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
import { StatusStudentBooking } from "./StatusStudentBookings";
import { changesBookingStatus } from "../../api";
import { notifyError, notifySuccess } from "../../components/Toastifycom";

export const ViewStudentBooking = ({
  open,
  setShowDetails,
  data,
  getAllBookings,
}: {
  open: boolean;
  setShowDetails: Function;
  data: any;
  getAllBookings: Function;
}): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [reason, setReason] = useState("");
  const [statusModal, setStatusModal] = useState(false);

  const handleStatusChange = () => {
    changesBookingStatus({
      bookingId: data?._id,
      newBookingStatus: "COMPLETED",
      message: reason,
    })
      .then((res) => {
        notifySuccess("Booking Accepted Successfully!");
        getAllBookings("ALL");
        setStatusModal(false);
        setShowDetails(false);
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };
  return (
    <>
      <Dialog open={open} maxWidth={"xl"}>
        <DialogContent>
          <Grid container>
            <Grid item sm={12} lg={12}>
              <Grid container justifyContent={"space-between"} spacing={1}>
                <Grid
                  item
                  sm={6}
                  lg={6}
                  sx={{
                    color: "black",
                    borderBottom: "3px solid #5F61BE",
                    width: "fit-content",
                  }}
                  direction={"row"}
                >
                  <Typography fontWeight={700} noWrap>
                    {data?.bookingSubject}
                  </Typography>
                </Grid>

                <Grid item sm={6} lg={6}>
                  <Typography fontWeight={600} textAlign={"right"}>
                    $ {data?.amount}
                  </Typography>
                </Grid>

                <Grid item sm={12} lg={12}>
                  <Typography
                    textAlign={"left"}
                    color={"#7A7A7A"}
                    fontSize={"small"}
                  >
                    {data?.description}
                  </Typography>
                </Grid>
                <Grid item sm={12} lg={6}>
                  <Stack flexDirection={"column"}>
                    <Stack
                      sx={{
                        color: "black",
                        borderBottom: "3px solid #5F61BE",

                        mt: 2,
                        mb: 2,
                        width: "fit-content",
                      }}
                    >
                      <Typography fontWeight={700}>Date & Time</Typography>
                    </Stack>
                    <Typography
                      textAlign={"left"}
                      fontSize={"small"}
                      color={"#7A7A7A"}
                    >
                      {formatDate(data?.bookingDate, "")}
                    </Typography>
                    <Typography
                      textAlign={"left"}
                      fontSize={"small"}
                      color={"#7A7A7A"}
                    >
                      {data?.time}
                    </Typography>
                    <Typography
                      textAlign={"left"}
                      fontSize={"small"}
                      color={"#7A7A7A"}
                    >
                      {data?.duration} Minutes
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item sm={12} lg={6}>
                  <Stack flexDirection={"column"}>
                    <Stack
                      sx={{
                        color: "black",
                        borderBottom: "3px solid #5F61BE",

                        mt: 2,
                        mb: 2,
                        width: "fit-content",
                      }}
                    >
                      <Typography fontWeight={700}>
                        Student Information
                      </Typography>
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
                          {data?.student[0]?.first_name +
                            data?.student[0]?.last_name}
                        </Typography>
                        <Typography noWrap color={"#7A7A7A"}>
                          {data?.student[0]?.email}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            sx={{
              borderRadius: '8px',
              height: '40px',
              padding: '20px 40px',
              color: '#5f61be',
              borderColor: ' #5f61be',
              '&:hover': {
                color: '#5f61be',
                background: 'rgba(95, 97, 190, 0.05)',
              },
            }}
            onClick={() => setShowDetails(false)}
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {statusModal && (
        <StatusStudentBooking
          open={statusModal}
          setShowDetails={setStatusModal}
          setReason={setReason}
          reason={reason}
          handleStatusChange={handleStatusChange}
        />
      )}
    </>
  );
};
