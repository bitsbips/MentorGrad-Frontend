import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Hidden from "@mui/material/Hidden";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withStyles } from "@mui/styles";
import HeaderUserinfo from "../StudentDashboard/HeaderUserinfo";

const styles = {
  drawer: {
    width: 250, // Set your desired width for big screens
    margin: "auto",
    position: "fixed", // Add this property
  },
};

const Sidebarcompo = ({ classes }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");
  const isMobile = useMediaQuery("(max-width: 950px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (text) => {
    setSelectedItem(text);
    setMobileOpen(false); // Close the sidebar after clicking an item on mobile
  };

  return (
    <div>
      <Drawer
        anchor="left"
        open={isMobile ? mobileOpen : true}
        variant={isMobile ? "temporary" : "permanent"}
        onClose={isMobile ? handleDrawerToggle : undefined}
        classes={{
          paper: classes.drawer, // Apply custom width to the sidebar
        }}
        PaperProps={{
          sx: {
            height: isMobile ? "" : 500,
            top: isMobile ? "" : 64,
          },
        }}
      >
        <List>
          <ListItem
            onClick={() => handleListItemClick("Home")}
            className={selectedItem === "Home" ? "active" : ""}
          >
            <HomeIcon
              className={selectedItem === "Home" ? "active-icon" : ""}
            />
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            onClick={() => handleListItemClick("About")}
            className={selectedItem === "About" ? "active" : ""}
          >
            <InfoIcon
              className={selectedItem === "About" ? "active-icon" : ""}
            />
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            onClick={() => handleListItemClick("Services")}
            className={selectedItem === "Services" ? "active" : ""}
          >
            <AssignmentIcon
              className={selectedItem === "Services" ? "active-icon" : ""}
            />
            <ListItemText primary="Services" />
          </ListItem>
          {/* Add more list items as needed */}
        </List>
      </Drawer>
      <div style={{ flex: 1, padding: "16px" }}>
        {selectedItem === "Home" && <HeaderUserinfo />}
      </div>
      {isMobile && (
        <Hidden lgUp implementation="css">
          <p onClick={handleDrawerToggle}>toggle</p>
        </Hidden>
      )}
    </div>
  );
};

export default withStyles(styles)(Sidebarcompo);
