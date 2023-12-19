import React, { useState, useEffect } from "react";

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
import { adminGetUsersSearch } from "../../../api";

// ... (imports remain unchanged)

const AdminMentors = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await adminGetUsersSearch({
          page: page,
          limit: 10,
          userType: "Mentor",
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
      {/* Use filteredData when search is present, otherwise use the regular data */}
      <MentorList page={page} setMaxPages={setMaxPages} SearchData={search ? filteredData : null} />
      <Grid item xs={12} sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item>
            <Pagination count={maxPages} color="primary" page={page} onChange={(event, value) => setPage(value)} />
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default AdminMentors;

