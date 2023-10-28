import { useEffect, useState, useRef, createRef } from 'react';
import { useLazyQuery, useSubscription, useMutation, writeQuery, readQuery } from '@apollo/client';
import {
  GET_PRIVATE_MSGS,
  GET_GROUP_MSGS,
  GET_GLOBAL_MSGS,
  GET_ALL_USERS,
  GET_GROUPS,
  GET_GLOBAL_GROUP,
} from '../../graphql/queries';
import { SET_MESSAGE_SEEN } from '../../graphql/mutations';
import { NEW_MESSAGE } from '../../graphql/subscriptions';
import { useStateContext } from '../../Context/state';
import { useAuthContext } from '../../Context/auth';
import MessageBubble from './MessageBubble';
import ConversationHeader from './ConversationHeader';
import SendMessage from './SendMessage';
import LoadingSpinner from '../../components/ChatComponents/LoadingSpinner';
import {
  sameDay,
  formatToYesterDay,
  getErrorMsg,
  jwtDecode,
} from '../../helper-functions';

import { Typography, useMediaQuery, Badge, Tooltip, Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { useTheme } from '@material-ui/core/styles';
import { useConversationPageStyles } from '../../styles/muiStyles';
// import ScreenCapture from "../../components/Screenshot";
// import { useScreenshot } from 'use-react-screenshot'

import html2canvas from "html2canvas";


// import  "./index.css";
const Conversation = () => {
  const classes = useConversationPageStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const messagesEndRef = useRef(null);
  // const { image, takeScreenshot } = useScreenshot();


  const { selectedChat, selectChat, notify } = useStateContext();
  const  user = jwtDecode(localStorage.getItem("@storage_Key")) 
  const [messages, setMessages] = useState(null);
  const [state, setState] = useState({
    screenCapture: "",
    selectedShots: []
  });



  const ref = createRef(null)

  let handleClickTakeScreenShot = () => {
    const { offsetTop } = ref.current;
    const { cropPositionTop, cropPositionLeft, cropWidth, cropHeigth } = {
      cropPositionTop: offsetTop,
      cropPositionLeft: 0,
      cropWidth: window.screen.width,
      cropHeigth: window.screen.height + 450
    };

    html2canvas(ref.current).then(canvas => {
      let croppedCanvas = document.createElement("canvas");
      let croppedCanvasContext = croppedCanvas.getContext("2d");

      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeigth;

      croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);

      let base64 = croppedCanvas.toDataURL();


      let screenShot = {
        base64: base64,
        timestamp: new Date()
      }


      setState({
        ...state,
        selectedShots: [...state.selectedShots, screenShot]
      })

      notify("Snapshot Captured")
      // const a = document.createElement("a");
      // a.href = croppedCanvas.toDataURL();
      // a.download = "receipt.png";
      // a.click();
    });
  };




  const [
    fetchPrivateMsgs,
    { data: privateData, loading: loadingPrivate },
  ] = useLazyQuery(GET_PRIVATE_MSGS, {
    onError: (err) => {
      notify(getErrorMsg(err), 'error');
    },
  });
  const [
    fetchGroupMsgs,
    { data: groupData, loading: loadingGroup },
  ] = useLazyQuery(GET_GROUP_MSGS, {
    onError: (err) => {
      notify(getErrorMsg(err), 'error');
    },
  });
  const [
    fetchGlobalMsgs,
    { data: globalData, loading: loadingGlobal },
  ] = useLazyQuery(GET_GLOBAL_MSGS, {
    onError: (err) => {
      notify(getErrorMsg(err), 'error');
    },
  });

  const [changeMsgSeenStatus, { loading: loadingChangingStatus }] = useMutation(
    SET_MESSAGE_SEEN,
    {
      onError: (err) => {
        notify(getErrorMsg(err), 'error');
      },
    }
  );

  const { error: subscriptionError } = useSubscription(NEW_MESSAGE, {
    onSubscriptionData: ({ client, subscriptionData }) => {
        const newMessage = subscriptionData.data.newMessage;
        let getMsgQuery,
          getMsgVariables,
          getMsgQueryName,
          getLastMsgQuery,
          getLastMsgQueryName,
          lastMsgTargetId;

        if (newMessage.type === 'private') {
          const otherUserId = newMessage.participants.filter(
            (p) => p !== user.userId
          )[0];

          getMsgQuery = GET_PRIVATE_MSGS;
          getMsgVariables = { userId: otherUserId };
          getMsgQueryName = 'getPrivateMessages';
          getLastMsgQuery = GET_ALL_USERS;
          getLastMsgQueryName = 'getAllUsers';
          lastMsgTargetId = otherUserId;
        } else if (newMessage.type === 'group') {
          const groupConversationId = newMessage.message.conversationId;

          getMsgQuery = GET_GROUP_MSGS;
          getMsgVariables = { conversationId: groupConversationId };
          getMsgQueryName = 'getGroupMessages';
          getLastMsgQuery = GET_GROUPS;
          getLastMsgQueryName = 'getGroups';
          lastMsgTargetId = groupConversationId;
        } else if (newMessage.type === 'public') {
          getMsgQuery = GET_GLOBAL_MSGS;
          getMsgVariables = null;
          getMsgQueryName = 'getGlobalMessages';
          getLastMsgQuery = GET_GLOBAL_GROUP;
          getLastMsgQueryName = 'getGlobalGroup';
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
            newMessage.type === 'public'
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
    },
    onError: (err) => {
      notify(getErrorMsg(err), 'error');
    },
  });

  useEffect(() => {
    if (subscriptionError) {
      notify(getErrorMsg(subscriptionError), 'error');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscriptionError]);

  useEffect(() => {
    if (!selectedChat) return;
    if (selectedChat.chatType === 'private') {
      fetchPrivateMsgs({
        variables: { userId: selectedChat.chatData.id },
      });
    } else if (selectedChat.chatType === 'group') {
      fetchGroupMsgs({
        variables: { conversationId: selectedChat.chatData.id },
      });
    } else {
      fetchGlobalMsgs();
    }
    if (selectedChat.chatData.latestMessage && selectedChat.chatType == "private") {
      changeMsgSeenStatus({
        variables: { conversationId: selectedChat.chatData.latestMessage.conversationId },
        update: (proxy, { data }) => {

          let getMsgQuery,
            getMsgVariables,
            getMsgQueryName,
            getLastMsgQuery,
            getLastMsgQueryName,
            lastMsgTargetId;

          let lastMessage = data?.changeMsgSeenStatus;
          //for Updating Last Message
          if (selectedChat.chatType === 'private') {
            const otherUserId = selectedChat.chatData.id;

            getMsgQuery = GET_PRIVATE_MSGS;
            getMsgVariables = { userId: otherUserId };
            getMsgQueryName = 'getPrivateMessages';
            getLastMsgQuery = GET_ALL_USERS;
            getLastMsgQueryName = 'getAllUsers';
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
              const updatedLastMsgCache = lastMsgCache[getLastMsgQueryName].map((l) =>
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChat]);

  useEffect(() => {
    if (!selectedChat) return;
    if (privateData && selectedChat.chatType === 'private') {
      setMessages(privateData.getPrivateMessages);
    } else if (groupData && selectedChat.chatType === 'group') {
      setMessages(groupData.getGroupMessages);
    } else if (globalData && selectedChat.chatType === 'public') {
      setMessages(globalData.getGlobalMessages);
    }
  }, [privateData, groupData, globalData, selectedChat]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);


  // const handleScreenCapture = (screenCapture) => {
  //   setState({
  //     screenCapture
  //   })
  // }
  // let testShot = () => {
  //   const screenshotTarget = document.body;
  //   html2canvas(screenshotTarget).then((canvas) => {
  //     const base64image = canvas.toDataURL("image/png");
  //     // setImage(base64image)
  //     // window.location.href = base64image;
  //   });
  // }

  if (!selectedChat && !isMobile)
    return (
      <div className={classes.root}>
        <div className={classes.noMessages}>
          <div className={classes.selectChatText}>
            <Typography>Select a chat to start messaging</Typography>
          </div>
        </div>
      </div>
    );

  const isGroupGlobalChat = selectedChat.chatType === 'public' || selectedChat.chatType === 'group';


  const dataToDisplay = () => {
    if (loadingPrivate || loadingGroup || loadingGlobal || !messages) {
      return (
        <div className={classes.conversationWrapper}>
          <LoadingSpinner size={80} marginTop={200} />
        </div>
      );
    } else if (messages.length === 0) {
      return (
        <div className={classes.noMessages}>
          <div className={classes.infoText}>
            <Typography>
              {selectedChat.chatType === 'private'
                ? `You're connected with ${selectedChat.chatData.username}. Start chatting now!`
                : 'Be the first one to message in the group.'}
            </Typography>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.conversationWrapper}>
          {messages.map((message, index) => {
            const isSameDay =
              index !== 0
                ? sameDay(messages[index - 1].createdAt, message.createdAt)
                : false;

            const isSameUser =
              index !== 0 &&
              isSameDay &&
              messages[index - 1].senderId === message.senderId;

            //Message Seen By 
            const messageSeenBy = message.seenBy.filter((seen) => seen.participant != user.userId);
            // const sentMessages = messages.filter((msg) => msg.senderId == user.id);
            // const lastSentMessageId = sentMessages[sentMessages.length - 1]?.id || null;
            const lastSentMessageId = messages[messages.length - 1]?.id || null;

            return (
              <div key={message.id}>
                {!isSameDay && (
                  <div className={classes.dateInfoWrapper}>
                    <Typography variant="body2" className={classes.infoText}>
                      {formatToYesterDay(message.createdAt)}
                    </Typography>
                  </div>
                )}
                <div
                  className={
                    isSameUser
                      ? classes.msgMarginSameUser
                      : classes.msgMarginDiffUser
                  }
                >
                  {isGroupGlobalChat &&
                    !isSameUser &&
                    user.userId !== message.senderId && (
                      <Typography variant="caption" style={{ cursor: "pointer" }} color="secondary" onClick={() => selectChat(message.user, 'private')}>
                        {message.user?.username || ""}
                      </Typography>
                    )}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <MessageBubble message={message} />
                    {/* <Typography style={{ float: "right" }} variant="caption" className={classes.msgTime}>
                      <AvatarGroup style={{ float: "right" }} max={4}>
                        {lastSentMessageId == message.id && message.senderId == user.id ?
                          messageSeenBy.map((seen) => (
                            <>
                              <Tooltip title={seen.username} >
                                <Avatar style={{ width: 18, height: 18 }} >{seen.username?.charAt(0) || ""}</Avatar>
                              </Tooltip>
                            </>
                          ))
                          : ""}
                      </AvatarGroup>
                    </Typography> */}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      );
    }
  };

  const setSceenshots = (selectedShots) => {
    setState({
      ...state,
      selectedShots: selectedShots
    })
  }


  return (
    <div className={classes.root} ref={ref}
    >

      {/* <ScreenCapture onEndCapture={handleScreenCapture}>
        {({ onStartCapture }) =>
          <div> */}
      <ConversationHeader setSceenshot={setSceenshots} selectedShots={state.selectedShots} />
      {dataToDisplay()}
      {/* {state.selectedShots.map((image)=> <img src={image} width={200} />)} */}
      {/* {state.screenCapture && <img src={state.screenCapture} width={400}  />} */}
      {/* <button onClick={handleClickTakeScreenShot}>Download</button> */}
      <SendMessage capture={handleClickTakeScreenShot} selectedShots={state.selectedShots} />

      {/* </div> */}
      {/* } */}

      {/* </ScreenCapture> */}
    </div>
  );
};

export default Conversation;
