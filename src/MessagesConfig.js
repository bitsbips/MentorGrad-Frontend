import React, { useEffect } from "react";
import { useStateContext } from "./Context/state";
import { useApolloClient, useQuery } from "@apollo/client";
import { useBodyStyles } from "./styles/muiStyles";
import { Paper, useMediaQuery, useTheme } from "@material-ui/core/";
import {
  NEW_MESSAGE_NOTIFICATION,
  USER_ONLINE_STATUS_CHANGE,
  NEW_MESSAGE,
} from "./graphql/subscriptions";
import {
  GET_PRIVATE_MSGS,
  GET_ALL_USERS,
  GET_GROUP_MSGS,
  GET_GLOBAL_GROUP,
  GET_GROUPS,
  GET_GLOBAL_MSGS,
} from "./graphql/queries";
import { useLazyQuery, useSubscription, useMutation } from "@apollo/client";
import addNotification from "react-push-notification";
import { getErrorMsg, jwtDecode } from "./helper-functions";
import { CHANGE_STATUS, SET_MESSAGE_SEEN } from "./graphql/mutations";
import { notifyError } from "./components/Toastifycom";

const MessagesConfig = () => {
  const user = jwtDecode(localStorage.getItem("@storage_Key"));
  const { selectedChat } = useStateContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [changeOnlineStatus] = useMutation(CHANGE_STATUS, {
    onError: (err) => {
      notifyError(getErrorMsg(err));
    },
  });
  const { data: userData, loading: loadingUsers , refetch } = useQuery(GET_ALL_USERS, {
    onError: (err) => {
      notifyError(getErrorMsg(err));
    },
  });
  const client = useApolloClient();
  const classes = useBodyStyles();

  const [changeMsgSeenStatus, { loading: loadingChangingStatus }] = useMutation(
    SET_MESSAGE_SEEN,
    {
      onError: (err) => {
        notifyError(getErrorMsg(err));
      },
    }
  );

  const { error: subscriptionErrorNotification } = useSubscription(
    NEW_MESSAGE_NOTIFICATION,
    {
      onSubscriptionData: ({ client, subscriptionData }) => {
        let selectedConversation =
          selectedChat?.chatData?.latestMessage?.conversationId || null;
        const { message, receiverId, conversationId, senderName } =
          subscriptionData?.data?.newMessageNotification;

        if (receiverId == user.userId) {
          if (conversationId !== selectedConversation) {
            addNotification({
              title: senderName,
              message: message,
              duration: 3000,
              native: true,
              icon: "https://i.ibb.co/k409jfP/logo.png",
              vibrate: 4,
              silent: false,
              // onClick: () => window.open('localhost:3001')
            });
          } else {
            changeMsgSeenStatus({
              variables: { conversationId: selectedConversation },
              update: (proxy, { data }) => {
                let getMsgQuery,
                  getMsgVariables,
                  getMsgQueryName,
                  getLastMsgQuery,
                  getLastMsgQueryName,
                  lastMsgTargetId;

                let lastMessage = data?.changeMsgSeenStatus;
                //for Updating Last Message
                if (selectedChat.chatType === "private") {
                  const otherUserId = selectedChat.chatData.id;

                  getMsgQuery = GET_PRIVATE_MSGS;
                  getMsgVariables = { userId: otherUserId };
                  getMsgQueryName = "getPrivateMessages";
                  getLastMsgQuery = GET_ALL_USERS;
                  getLastMsgQueryName = "getAllUsers";
                  lastMsgTargetId = otherUserId;
                }

                const conversationCache = proxy.readQuery({
                  query: getMsgQuery,
                  variables: getMsgVariables,
                });

                if (conversationCache) {
                  let newData = [...conversationCache[getMsgQueryName]];
                  newData[newData.length - 1] = lastMessage;
                  let updatedConvoCache = newData;
                  proxy.writeQuery({
                    query: getMsgQuery,
                    variables: getMsgVariables,
                    data: {
                      [getMsgQueryName]: updatedConvoCache,
                    },
                  });
                  const lastMsgCache = proxy.readQuery({
                    query: getLastMsgQuery,
                  });

                  if (lastMsgCache) {
                    const updatedLastMsgCache = lastMsgCache[
                      getLastMsgQueryName
                    ].map((l) =>
                      l.id === lastMsgTargetId
                        ? { ...l, latestMessage: lastMessage }
                        : l
                    );
                    proxy.writeQuery({
                      query: getLastMsgQuery,
                      data: {
                        [getLastMsgQueryName]: updatedLastMsgCache,
                      },
                    });
                  }
                }
              },
            });
          }
        }
      },
    }
  );

  const { error: subscriptionError } = useSubscription(NEW_MESSAGE, {
    onSubscriptionData: ({ client, subscriptionData }) => {
      console.log(subscriptionData);
      if (selectedChat == null && isMobile) {
        const newMessage = subscriptionData.data.newMessage;
        let getMsgQuery,
          getMsgVariables,
          getMsgQueryName,
          getLastMsgQuery,
          getLastMsgQueryName,
          lastMsgTargetId;

        if (newMessage.type === "private") {
          const otherUserId = newMessage.participants.filter(
            (p) => p !== user.userId
          )[0];

          getMsgQuery = GET_PRIVATE_MSGS;
          getMsgVariables = { userId: otherUserId };
          getMsgQueryName = "getPrivateMessages";
          getLastMsgQuery = GET_ALL_USERS;
          getLastMsgQueryName = "getAllUsers";
          lastMsgTargetId = otherUserId;
        } else if (newMessage.type === "group") {
          const groupConversationId = newMessage.message.conversationId;

          getMsgQuery = GET_GROUP_MSGS;
          getMsgVariables = { conversationId: groupConversationId };
          getMsgQueryName = "getGroupMessages";
          getLastMsgQuery = GET_GROUPS;
          getLastMsgQueryName = "getGroups";
          lastMsgTargetId = groupConversationId;
        } else if (newMessage.type === "public") {
          getMsgQuery = GET_GLOBAL_MSGS;
          getMsgVariables = null;
          getMsgQueryName = "getGlobalMessages";
          getLastMsgQuery = GET_GLOBAL_GROUP;
          getLastMsgQueryName = "getGlobalGroup";
        }

        const conversationCache = client.readQuery({
          query: getMsgQuery,
          variables: getMsgVariables,
        });

        if (conversationCache) {
          const updatedConvoCache = [
            ...conversationCache[getMsgQueryName],
            newMessage.message,
          ];

          client.writeQuery({
            query: getMsgQuery,
            variables: getMsgVariables,
            data: {
              [getMsgQueryName]: updatedConvoCache,
            },
          });
        }

        const lastMsgCache = client.readQuery({
          query: getLastMsgQuery,
        });

        if (lastMsgCache) {
          const updatedLastMsgCache =
            newMessage.type === "public"
              ? {
                  ...lastMsgCache[getLastMsgQueryName],
                  latestMessage: newMessage.message,
                }
              : lastMsgCache[getLastMsgQueryName].map((l) =>
                  l.id === lastMsgTargetId
                    ? { ...l, latestMessage: newMessage.message }
                    : l
                );

          client.writeQuery({
            query: getLastMsgQuery,
            data: {
              [getLastMsgQueryName]: updatedLastMsgCache,
            },
          });
        }
      }
    },
    onError: (err) => {
      notifyError(getErrorMsg(err));
    },
  });

  const { error: subscriptionErrorOne } = useSubscription(
    USER_ONLINE_STATUS_CHANGE,
    {
      onSubscriptionData: ({ client, subscriptionData }) => {
        const { status, userId, username } =
          subscriptionData?.data?.userOnlineStatusChange;
        if (user.id !== userId && status == true) {
          addNotification({
            title: `${username} is online`,
            duration: 3000,
            native: true,
            icon: "https://i.ibb.co/k409jfP/logo.png",
            vibrate: 4,
            silent: false,
            // onClick: () => window.open('localhost:3001')
          });
        }

        let getUsersQuery = GET_ALL_USERS;
        let getUsersQueryName = "getAllUsers";

        let usersCache = client.readQuery({
          query: getUsersQuery,
        });
        if (usersCache) {
          let users = usersCache[getUsersQueryName];
          let userIndex = users.findIndex((us) => us.id === userId);
          let user = users.find((us) => us.id === userId);
          let newData = [...users];
          newData[userIndex] = { ...user, isLogin: status };
          client.writeQuery({
            query: getUsersQuery,
            data: {
              [getUsersQueryName]: newData,
            },
          });
        }
      },
    }
  );

    useEffect(() => {
      changeOnlineStatus({ variables: { status: true } });
    }, []);

  return(
    <>
    </>
  )
};

export default MessagesConfig;
