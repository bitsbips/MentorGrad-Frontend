import { useState } from "react";
import LatestMessages from "./LatestMessages";
import Conversation from "./Conversation";

import {
  Container,
  Divider,
  Grid,
  ListSubheader,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { useBodyStyles, useMainPageStyles } from "../../styles/muiStyles";
import Users from "./Users";
import { useMediaQuery, useTheme } from "@mui/material";
import MobileMain from "./MobileMain";

const Main = () => {
  const classes = useMainPageStyles();
  const bodyClasses = useBodyStyles();
  const theme = useTheme();
  const [value, onChange] = useState(new Date());
  const [tab, setTab] = useState("chat");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isSmallScreen ? (
        <Paper className={bodyClasses.root} elevation={0}>
          <MobileMain />
        </Paper>
      ) : (
        <Grid container>
          <Grid item xs={12} md={12}>
            <Container style={{ padding: 0 }}>
              <div className={classes.root}>
                <div className={classes.leftPanel}>
                  <div className={classes.leftPanelContent}>
                    <Users />
                  </div>
                </div>
                <Conversation />
              </div>
            </Container>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Main;
