import React from "react";
import {
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

export const ViewMentorBooking = ({
  open,
  setShowDetails,
}: {
  open: boolean;
  setShowDetails: Function;
}): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog open={open}>
      <DialogTitle>hello</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <Card>test</Card>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => setShowDetails(false)} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
