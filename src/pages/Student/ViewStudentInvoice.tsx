import React, { useEffect, useState } from "react";
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
import { formatDate } from "../../helper-functions";
import { StatusStudentBooking } from "./StatusStudentBookings";
import { changesBookingStatus } from "../../api";
import { notifyError, notifySuccess } from "../../components/Toastifycom";
import { StatusStudentInvoice } from "./StatusStudentInvoice";

export const ViewStudentInvoice = ({
  open,
  setShowDetails,
  data,
  getAllInvoices,
}: {
  open: boolean;
  setShowDetails: Function;
  data: any;
  getAllInvoices: Function;
}): JSX.Element => {
  const theme = useTheme();
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
        getAllInvoices();
        setStatusModal(false);
        setShowDetails(false);
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

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
                    {data?.invoiceId}
                  </Typography>
                </Grid>

                <Grid item sm={6} lg={6}>
                  <Typography fontWeight={600} textAlign={"right"}>
                    $ {data?.netAmt}
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
                <Grid item sm={12}>
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
                      {/* "{formatDate(data?.bookingDate, "")}" */}
                    </Typography>
                    <Typography
                      textAlign={"left"}
                      fontSize={"small"}
                      color={"#7A7A7A"}
                    >
                      {data?.createdAt?.split("T")[1]}
                    </Typography>
                    <Typography
                      textAlign={"left"}
                      fontSize={"small"}
                      color={"#7A7A7A"}
                    >
                      {data?.createdAt?.split("T")[0]}
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
                        Sender Information
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
                          {data?.sender?.first_name +
                            " " +
                            data?.sender?.last_name}
                        </Typography>
                        <Typography noWrap color={"#7A7A7A"}>
                          {data?.sender?.email}
                        </Typography>
                      </Stack>
                    </Stack>
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
                        Receiver Information
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
                          {data?.receiver?.first_name +
                            " " +
                            data?.receiver?.last_name}
                        </Typography>
                        <Typography noWrap color={"#7A7A7A"}>
                          {data?.receiver?.email}
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
              borderRadius: "8px",
              height: "40px",
              padding: "20px 40px",
              color: "#5f61be",
              borderColor: " #5f61be",
              "&:hover": {
                color: "#5f61be",
                background: "rgba(95, 97, 190, 0.05)",
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
        <StatusStudentInvoice
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
