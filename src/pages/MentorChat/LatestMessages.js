import { useQuery } from '@apollo/client';
import {
  GET_ALL_USERS,
  GET_GROUPS,
  GET_GLOBAL_GROUP,
} from '../../graphql/queries';
import LatestMessage from './LatestMessage';
import { useStateContext } from '../../Context/state';
import LoadingSpinner from '../../components/ChatComponents/LoadingSpinner';
import { getErrorMsg } from '../../helper-functions';

import { ListItem, ListItemAvatar, Avatar, Divider } from '@material-ui/core';
import { useChatListStyles } from '../../styles/muiStyles';
import LanguageIcon from '@material-ui/icons/Language';
import GroupIcon from '@material-ui/icons/Group';

const LatestMessages = () => {
  const classes = useChatListStyles();
  const { selectedChat, selectChat, notify } = useStateContext();
  const { data: userData, loading: loadingUsers } = useQuery(GET_ALL_USERS, {
    onError: (err) => {
      notify(getErrorMsg(err), 'error');
    },
  });
  const { data: groupData, loading: loadingGroups } = useQuery(GET_GROUPS, {
    onError: (err) => {
      notify(getErrorMsg(err), 'error');
    },
  });
  const { data: globalData, loading: loadingGlobal } = useQuery(
    GET_GLOBAL_GROUP,
    {
      onError: (err) => {
        notify(getErrorMsg(err), 'error');
      },
    }
  );

  if (loadingUsers || loadingGroups || loadingGlobal || !userData) {
    return <LoadingSpinner />;
  }



  let group_chats = groupData ? groupData.getGroups.filter((group) => group.latestMessage) : [];
  let user_chats = userData ? userData.getAllUsers.filter((user) => user.latestMessage) : [];
  let conservations = group_chats.concat(user_chats).sort((a, b) =>  new Date(b.latestMessage.createdAt) - new Date(a.latestMessage.createdAt) );
  


  return (
    <div className={classes.root}>
      <div className={classes.list}>
        {globalData && (
          <ListItem
            className={classes.listItem}
            button
            onClick={() => selectChat(globalData.getGlobalGroup, 'public')}
            selected={
              selectedChat?.chatType === 'public' &&
              globalData.getGlobalGroup.id === selectedChat.chatData.id
            }
          >
            <ListItemAvatar>
              <Avatar>
                <LanguageIcon color="primary" />
              </Avatar>
            </ListItemAvatar>
            <LatestMessage body={globalData.getGlobalGroup} />
          </ListItem>
        )}
        <Divider />
        {conservations.map((chat) => (
          chat.type == "group" ?
            <div key={chat.id}>
              <ListItem
                className={classes.listItem}
                button
                onClick={() => selectChat(chat, 'group')}
                selected={
                  selectedChat?.chatType === 'group' &&
                  chat.id === selectedChat.chatData.id
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <GroupIcon color="primary" />
                  </Avatar>
                </ListItemAvatar>
                <LatestMessage body={chat} />
              </ListItem>
              <Divider />
            </div>
            :
            <div key={chat.id}>
              <ListItem
                className={classes.listItem}
                button
                onClick={() => selectChat(chat, 'private')}
                selected={
                  selectedChat?.chatType === 'private' &&
                  chat.id === selectedChat.chatData.id
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt={chat.username}
                    style={chat.isLogin ? {border:"3px green solid"} : {border:"3px red solid"}}
                    src={`https://secure.gravatar.com/avatar/${chat.id}?s=150&d=retro`}
                  />
                </ListItemAvatar>
                <LatestMessage body={chat} type="user" />
              </ListItem>
              <Divider />
            </div>
        ))}





      </div>
    </div>
  );
};

export default LatestMessages;
