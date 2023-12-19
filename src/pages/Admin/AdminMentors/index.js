import React, { useState } from "react";

import { useTheme } from "@mui/material/styles";
import {
  Button,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  OutlinedInput,
  Pagination,
  Typography,
} from "@mui/material";

import MentorList from "./MentorList";

import { IconSearch } from "@tabler/icons";
import MainCard from "../ui-component/cards/MainCard";

const AdminMentors = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MainCard
      title={
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography variant="h3">Mentors</Typography>
          </Grid>
          <Grid item>
            <OutlinedInput
              id="input-search-list-style1"
              placeholder="Search"
              startAdornment={
                <InputAdornment position="start">
                  <IconSearch stroke={1.5} size="16px" />
                </InputAdornment>
              }
              size="small"
            />
          </Grid>
        </Grid>
      }
      content={false}
    >
      <MentorList page={page} setMaxPages={setMaxPages} />
      <Grid item xs={12} sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item>
            <Pagination count={maxPages} color="primary" page={page} />
          </Grid>
          {/* <Grid item>
                        <Button
                            size="large"
                            sx={{ color: theme.palette.grey[900] }}
                            color="secondary"
                            endIcon={<ExpandMoreRoundedIcon />}
                            onClick={handleClick}
                        >
                            10 Rows
                        </Button>
                        {anchorEl && (
                            <Menu
                                id="menu-user-list-style1"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                variant="selectedMenu"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right'
                                }}
                            >
                                <MenuItem onClick={handleClose}> 10 Rows</MenuItem>
                                <MenuItem onClick={handleClose}> 20 Rows</MenuItem>
                                <MenuItem onClick={handleClose}> 30 Rows </MenuItem>
                            </Menu>
                        )}
                    </Grid> */}
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default AdminMentors;
