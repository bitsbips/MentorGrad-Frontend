import React, { useState,useEffect } from "react";

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

import StudentList from "./StudentList";

import { IconSearch } from "@tabler/icons";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import MainCard from "../ui-component/cards/MainCard";
import { adminGetUsersSearch } from "../../../api";


const AdminStudents = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await adminGetUsersSearch({
          page: page,
          limit: 10,
          userType: "Student",
          search: search,
        });
        console.log("userData:", userData); // Log the userData

        setMaxPages(userData.data.totalPages);
        setFilteredData(userData.data.users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [search, page]);

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
            <Typography variant="h3">Students</Typography>
          </Grid>
          <Grid item>
            <OutlinedInput
              id="input-search-list-style1"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
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
      <StudentList page={page} setMaxPages={setMaxPages} SearchData={search ? filteredData : null} />
      <Grid item xs={12} sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item>
            <Pagination
              count={maxPages}
              color="primary"
              onChange={handlePageChange}
            />
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
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
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

export default AdminStudents;
