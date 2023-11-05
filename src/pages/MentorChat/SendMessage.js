import { useEffect, useRef, useState } from 'react';
import { useMutation, readQuery, writeQuery } from '@apollo/client';
import {
  SEND_PRIVATE_MSG,
  SEND_GROUP_MSG,
  SEND_GLOBAL_MSG,
} from '../../graphql/mutations';
import { useStateContext } from '../../Context/state';
import { useAuthContext } from '../../Context/auth';

import EmojiPicker from '../../components/ChatComponents/EmojiPicker';
import useRecorder from '../../components/ChatComponents/VoiceRecorder';
import { getErrorMsg, jwtDecode } from '../../helper-functions';
import {
  GET_PRIVATE_MSGS,
  GET_GROUP_MSGS,
  GET_GLOBAL_MSGS,
  GET_ALL_USERS,
  GET_GROUPS,
  GET_GLOBAL_GROUP,
} from '../../graphql/queries';
import { IconButton, TextField, InputAdornment, Badge, LinearProgress, CircularProgress, useMediaQuery, useTheme } from '@material-ui/core';
import { useConversationPageStyles } from '../../styles/muiStyles';
import SendIcon from '@material-ui/icons/Send';
import StopIcon from '@material-ui/icons/Stop';
import MicIcon from '@material-ui/icons/Mic';
import CropFreeIcon from '@material-ui/icons/CropFree';
import AttachmentIcon from '@material-ui/icons/Attachment';
import Calculator from '../../components/ChatComponents/Calculator';
import { notifyError } from '../../components/Toastifycom';

const SendMessage = ({ capture, selectedShots }) => {
  const classes = useConversationPageStyles();
  // const { user } = useAuthContext();
  const user = jwtDecode(localStorage.getItem("@storage_Key"));
  const { selectedChat, notify,
      // setMessageBody,
      // messageBody
     } = useStateContext();
  const [messageBody, setMessageBody] = useState('');
  let imageInput = useRef();
  let [audioBlob, audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));



  const [submitPrivateMsg, { loading: loadingPrivate }] = useMutation(
    SEND_PRIVATE_MSG,
    {
      onError: (err) => {
        notifyError(getErrorMsg(err), 'error');
      },
    }
  );
  const [submitGroupMsg, { loading: loadingGroup }] = useMutation(
    SEND_GROUP_MSG,
    {
      onError: (err) => {
        notify(getErrorMsg(err), 'error');
      },
    }
  );
  const [submitGlobalMsg, { loading: loadingGlobal }] = useMutation(
    SEND_GLOBAL_MSG,
    {
      onError: (err) => {
        notify(getErrorMsg(err), 'error');
      },
    }
  );


  useEffect(() => {
    if (audioBlob.includes("data:audio")) {
      sendMessage("Audio", audioBlob);
    }
  }, [audioBlob]);


  const handleImageManage = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();


    reader.onloadend = () => {
      sendMessage(file.type == "application/pdf" ? "Attachment" : "Image", reader.result);
    };
    reader.readAsDataURL(file);
  }


  const clearInput = () => {
    setMessageBody('');
  };

  const handleEmojiAdd = (emoji) => {
    // setMessageBody((prevString) => prevString.concat(emoji));
    setMessageBody(messageBody.concat(emoji));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageBody.trim() === '' || !selectedChat) return;
    sendMessage("Text", messageBody);

    // if (selectedChat.chatType === 'private') {
    //   submitPrivateMsg({
    //     variables: { receiverId: selectedChat.chatData.id, body: messageBody, type:"Text"      },
    //     update: () => {
    //       clearInput();
    //     },
    //   });
    // } else if (selectedChat.chatType === 'group') {
    //   submitGroupMsg({
    //     variables: {
    //       conversationId: selectedChat.chatData.id,
    //       body: messageBody,
    //     },
    //     update: () => {
    //       clearInput();
    //     },
    //   });
    // } else {
    //   submitGlobalMsg({
    //     variables: { body: messageBody },
    //     update: () => {
    //       clearInput();
    //     },
    //   });
    // }
  };



  //Test
  const updateCacheMessages = () => {
    const newMessage = {
      message: {
        id: "61f7cde8ce931c018285bb95",
        body: "Hello",
        conversationId: "61f0dd7eea5e50a1c7724730",
        senderId: "61e17c753b96a249b03d2cf8",
        createdAt: "2022-01-31T11:54:16.055Z",
        type: "Text",
        seenBy: [
          {
            participant: "61e17c753b96a249b03d2cf8",
            seen: true,
            timestamps: "1643630056053",
            username: "zabi",
            __typename: "seenBy",
          },
        ],
        user: {
          id: "61e17c753b96a249b03d2cf8",
          username: "zabi",
          isLogin: null,
          __typename: "MsgGroupUser",
        },
        __typename: "Message",
      },
      type: "private",
      participants: [
        "61e17c753b96a249b03d2cf8",
        "61e17c8a3b96a249b03d2cfc",
      ],
      __typename: "SubbedMessage",
    }
    let getMsgQuery,
      getMsgVariables,
      getMsgQueryName,
      getLastMsgQuery,
      getLastMsgQueryName,
      lastMsgTargetId;

    if (newMessage.type === 'private') {
      const otherUserId = newMessage.participants.filter(
        (p) => p !== user.id
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

    const conversationCache = readQuery({
      query: getMsgQuery,
      variables: getMsgVariables,
    });

    if (conversationCache) {
      const updatedConvoCache = [
        ...conversationCache[getMsgQueryName],
        newMessage.message,
      ];

      writeQuery({
        query: getMsgQuery,
        variables: getMsgVariables,
        data: {
          [getMsgQueryName]: updatedConvoCache,
        },
      });
    }

    const lastMsgCache = readQuery({
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

      writeQuery({
        query: getLastMsgQuery,
        data: {
          [getLastMsgQueryName]: updatedLastMsgCache,
        },
      });
    }
  }




  const sendMessage = (type, message) => {
    if (selectedChat.chatType === 'private') {
      submitPrivateMsg({
        variables: { receiverId: selectedChat.chatData.id, body: message, type: type },
        update: () => {
          clearInput();
        },
      });
    } else if (selectedChat.chatType === 'group') {
      submitGroupMsg({
        variables: {
          conversationId: selectedChat.chatData.id,
          body: message,
          type: type
        },
        update: () => {
          clearInput();
        },
      });
    } else {
      submitGlobalMsg({
        variables: { body: message, type: type },
        update: () => {
          clearInput();
        },
      });
    }
  }



  return (
    <>
      <form className={classes.sendMsgForm} onSubmit={handleSendMessage}>
        <TextField
          value={messageBody}
          fullWidth
          type="text"
          // multiline
          placeholder="Type a message..."
          variant="outlined"
          onChange={(e) => setMessageBody(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <div >
                  {(loadingPrivate || loadingGlobal || loadingGroup) ?
                    <IconButton
                      size="small"
                      color="primary"
                      disabled={true}
                    >
                      <CircularProgress disableShrink size={30} />
                    </IconButton>
                    : ""
                  }
                  <IconButton
                    size="small"
                    // color="primary"
                    onClick={() => imageInput.current.click()}
                  // disabled={loadingPrivate || loadingGroup || loadingGlobal}
                  >
                    <AttachmentIcon fontSize="small" />
                  </IconButton>
                  {!isRecording ?
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={startRecording}
                    // disabled={loadingPrivate || loadingGroup || loadingGlobal}
                    >
                      <MicIcon fontSize="small" />
                    </IconButton> :
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={stopRecording}
                    // disabled={loadingPrivate || loadingGroup || loadingGlobal}
                    >
                      <StopIcon fontSize="small" />
                    </IconButton>}

                  {messageBody.trim() !== '' && (
                    <IconButton
                      size="small"
                      color="primary"
                      type="submit"
                    // disabled={loadingPrivate || loadingGroup || loadingGlobal}
                    >
                      <SendIcon fontSize="large" />
                    </IconButton>
                  )}
                  {/* <> */}
                  {/* <div className="App"> */}
                  {/* <audio src={audioURL} controls /> */}
                  {/* <button onClick={startRecording} disabled={isRecording}>
                    start recording
                  </button>
                  <button onClick={stopRecording} disabled={!isRecording}>
                    stop recording
                  </button> */}
                  {/* </div> */}
                  {/* </> */}
                </div>
              </InputAdornment>
            ),
            startAdornment: (
              <InputAdornment position="start">
                <div style={{ flexDirection: "row", display: "flex" }}>
                  <EmojiPicker handleEmojiAdd={handleEmojiAdd} />
                  <Calculator />

                  {!isMobile ? <IconButton
                    size="small"
                    color="primary"
                    onClick={capture}
                    disabled={loadingPrivate || loadingGroup || loadingGlobal}
                  >
                    {/* <Badge color='primary' badgeContent={selectedShots.length}> */}

                    <CropFreeIcon fontSize="small" />

                    {/* </Badge> */}
                  </IconButton>
                    : ""}

                </div>
              </InputAdornment>
            ),
          }}
        />
      </form>
      <input
        type="file"
        accept="image/png, image/jpeg, application/pdf"
        onChange={handleImageManage}
        style={{ display: "none" }}
        ref={imageInput}
      />
    </>
  );
};

export default SendMessage;
