import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../graphql/queries';
import { useStateContext } from '../../Context/state';
import FilterBar from '../../components/ChatComponents/FilterBar';
import LoadingSpinner from '../../components/ChatComponents/LoadingSpinner';
import { getErrorMsg } from '../../helper-functions';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Typography,
} from '@material-ui/core';
import { useChatListStyles } from '../../styles/muiStyles';

const Users = () => {
  const classes = useChatListStyles();
  const [filterValue, setFilterValue] = useState('');
  const { selectedChat, selectChat, notify } = useStateContext();
  const { data: userData, loading: loadingUsers } = useQuery(GET_ALL_USERS, {
    onError: (err) => {
      notify(getErrorMsg(err), 'error');
    },
  });

  if (loadingUsers || !userData) {
    return <LoadingSpinner />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.list}>
        <div className={classes.searchWrapper}>
          <FilterBar
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            placeholder="Search users"
          />
        </div>
        {userData && userData.getAllUsers.length === 0 && (
          <Typography
            variant="subtitle1"
            color="secondary"
            className={classes.infoText}
          >
            No other users found. :(
          </Typography>
        )}
        <Divider />
        {userData &&
          userData.getAllUsers
            .filter((user) =>
              user.username.toLowerCase().includes(filterValue.toLowerCase())
            )
            .map((user) => (
              <div key={user.id}>
                <ListItem
                  className={classes.listItem}
                  button
                  onClick={() => selectChat(user, 'private')}
                  selected={
                    selectedChat?.chatType === 'private' &&
                    user.id === selectedChat.chatData.id
                  }
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={user.username}
                      style={user.isLogin ? { border: "3px green solid" } : { border: "3px red solid" }}
                      src={`https://secure.gravatar.com/avatar/${user.id}?s=150&d=retro`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="subtitle2" className={classes.greyText}>
                          {user.username}
                        </Typography>
                        <Typography>
                          {user?.isLogin ? <FiberManualRecordIcon fontSize='small' style={{ color: "green" }} /> : ""}
                        </Typography>
                      </div>

                    }
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Users;
