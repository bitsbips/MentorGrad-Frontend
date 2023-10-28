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
} from "@material-ui/core";
import { useMainPageStyles } from "../../styles/muiStyles";


const Main = () => {
  const classes = useMainPageStyles();
  const [value, onChange] = useState(new Date());
  const [tab, setTab] = useState("chat");

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
        >
          <Container style={{ padding: 0 }}>
            <div className={classes.root}>
              <div className={classes.leftPanel}>
                <div className={classes.leftPanelContent}>
                  <LatestMessages />
                </div>
              </div>
              <Conversation />
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
