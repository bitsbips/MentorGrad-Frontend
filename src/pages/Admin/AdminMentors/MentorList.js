import React, { useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Button,
  Chip,
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";

// project imports

import { getUsersListStyle1 } from "../store/slices/user";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// assets
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChatBubbleTwoToneIcon from "@mui/icons-material/ChatBubbleTwoTone";
import BlockTwoToneIcon from "@mui/icons-material/BlockTwoTone";
import Avatar from "../ui-component/extended/Avatar";
import { useDispatch, useSelector } from "../store";
import { adminDeleteUser, adminGetAllUsers } from "../../../api";
import AdminMentorModal from "./AdminMentorModal";

const avatarImage = require.context("../assets/images/users", true);

// ==============================|| USER LIST 1 ||============================== //

const UserList = ({ page, setMaxPages }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const [idToUpdate, setIdToUpdate] = useState("");

  // React.useEffect(() => {
  //     setData(usersS1);
  // }, [usersS1]);

  // React.useEffect(() => {
  //     dispatch(getUsersListStyle1());
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  React.useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    adminGetAllUsers({
      page: page,
      limit: 10,
      userType: "Mentor",
    }).then((response) => {
      setMaxPages(response.data.totalPages);
      setData(response.data.users);
    });
  };

  const handleDelete = (id) => {
    console.log(`Delete ${id}`);
    adminDeleteUser(id)
      .then(() => getAllUsers())
      .catch((e) => console.log("ERROR DELETING", e));
  };

  return (
    <TableContainer>
      <Table>
        {/* <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Fullname</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="center" sx={{ pr: 3 }}>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead> */}
        <TableBody>
          <AdminMentorModal id={idToUpdate} open={open} setOpen={setOpen} />
          {data &&
            data.map((row, index) => (
              <TableRow hover key={index}>
                <TableCell>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Avatar alt="User 1" src={row.profilePic} />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography
                        align="left"
                        variant="subtitle1"
                        component="div"
                      >
                        {`${row.username ? row.username : "No username"}`}
                        {!row.isDeactivated && (
                          <CheckCircleIcon
                            sx={{
                              color: "success.dark",
                              width: 14,
                              height: 14,
                            }}
                          />
                        )}
                      </Typography>
                      <Typography align="left" variant="subtitle2" noWrap>
                        {row.email}
                      </Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell sx={{ pl: 3 }}>
                  {row.first_name + " " + row.last_name}
                </TableCell>
                <TableCell>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs zeroMinWidth>
                      <Typography
                        align="left"
                        variant="subtitle1"
                        component="div"
                      >
                        {row.createdAt.split("T")[0]}
                      </Typography>
                      <Typography align="left" variant="subtitle2" noWrap>
                        {"Creation Date"}
                      </Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs zeroMinWidth>
                      <Typography
                        align="left"
                        variant="subtitle1"
                        component="div"
                      >
                        {row.updatedAt.split("T")[0]}
                      </Typography>
                      <Typography align="left" variant="subtitle2" noWrap>
                        {"Last Updated"}
                      </Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    sx={{ m: 0.2 }}
                    onClick={() => {
                      setOpen(true);
                      setIdToUpdate(row._id);
                    }}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ m: 0.2 }}
                    color="error"
                    onClick={() => handleDelete(row._id)}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
                {/* <TableCell>{row.location}</TableCell>
                                <TableCell>{row.friends}</TableCell>
                                <TableCell>{row.followers}</TableCell>
                                <TableCell>
                                    {row.status === 'Active' && (
                                        <Chip
                                            label="Active"
                                            size="small"
                                            sx={{
                                                background:
                                                    theme.palette.mode === 'dark'
                                                        ? theme.palette.dark.main
                                                        : theme.palette.success.light + 60,
                                                color: theme.palette.success.dark
                                            }}
                                        />
                                    )}
                                    {row.status === 'Rejected' && (
                                        <Chip
                                            label="Rejected"
                                            size="small"
                                            sx={{
                                                background:
                                                    theme.palette.mode === 'dark'
                                                        ? theme.palette.dark.main
                                                        : theme.palette.orange.light + 80,
                                                color: theme.palette.orange.dark
                                            }}
                                        />
                                    )}
                                    {row.status === 'Pending' && (
                                        <Chip
                                            label="Pending"
                                            size="small"
                                            sx={{
                                                background:
                                                    theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.warning.light,
                                                color: theme.palette.warning.dark
                                            }}
                                        />
                                    )}
                                </TableCell>
                                <TableCell align="center" sx={{ pr: 3 }}>
                                    <Stack direction="row" justifyContent="center" alignItems="center">
                                        <Tooltip placement="top" title="Message">
                                            <IconButton color="primary" aria-label="delete" size="large">
                                                <ChatBubbleTwoToneIcon sx={{ fontSize: '1.1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip placement="top" title="Block">
                                            <IconButton
                                                color="primary"
                                                sx={{
                                                    color: theme.palette.orange.dark,
                                                    borderColor: theme.palette.orange.main,
                                                    '&:hover ': { background: theme.palette.orange.light }
                                                }}
                                                size="large"
                                            >
                                                <BlockTwoToneIcon sx={{ fontSize: '1.1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </TableCell> */}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
