import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_USERS } from '../../graphql/queries';
import DialogBox from '../../components/ChatComponents/DialogBox';
import GroupInfo from './GroupInfo';
import AddGroupMembers from './AddGroupMembers';
import { useAuthContext } from '../../Context/auth';
import { useStateContext } from '../../Context/state';
import { truncateString, getErrorMsg, jwtDecode } from '../../helper-functions';
import {
  SET_SCREENSHOTS
} from '../../graphql/mutations';
import {
  Typography,
  Avatar,
  Button,
  IconButton,
  useMediaQuery,
  Badge,
  Card,
  TextField,
  CircularProgress
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useConversationPageStyles } from '../../styles/muiStyles';
import LanguageIcon from '@material-ui/icons/Language';
import GroupIcon from '@material-ui/icons/Group';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CropFreeIcon from '@material-ui/icons/CropFree';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import Feed from "../../components/ChatComponents/Feed";


const ConversationHeader = ({ selectedShots, setSceenshot }) => {
  const classes = useConversationPageStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const user = jwtDecode(localStorage.getItem("@storage_Key"));
  const { unselectChat, selectedChat, notify } = useStateContext();
  const [infoModal, setInfoModal] = useState(false);
  const [labelValue, setLabelValue] = useState("");
  const [screenshotsModal, setScreenshotsModal] = useState(false);
  const [templatesModal, setTemplatesModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [addModal, setAddModal] = useState(false);


  const [setScreenShots, { loading: loadingPrivate }] = useMutation(
    SET_SCREENSHOTS,
    {
      onError: (err) => {
        notify(getErrorMsg(err), 'error');
      },
    }
  );

  const { data: userData, loading: loadingUsers } = useQuery(GET_ALL_USERS, {
    onError: (err) => {
      notify(getErrorMsg(err), 'error');
    },
  });


  const saveScreenshots = () => {
    setIsSaving(true);
    setScreenShots({
      variables: { shots: selectedShots, label: labelValue, receiverId: "" },
      update: () => {
        setSceenshot([]);
        setScreenshotsModal(false);
        notify("Saved Screenshots");
        setLabelValue("");
        setIsSaving(false);
      },
    });
  }

  const { id, username, name, participants, admin } = selectedChat.chatData;



  const conversationDetails = () => {
    return (
      <>
        <Avatar className={classes.avatar}>
          {selectedChat.chatType === 'public' ? (
            <LanguageIcon color="primary" />
          ) : selectedChat.chatType === 'group' ? (
            <GroupIcon color="primary" />
          ) : (
            <Avatar
              alt={username}
              src={`https://secure.gravatar.com/avatar/${username}?s=150&d=retro`}
            />
          )}
        </Avatar>
        <Typography
          variant={isMobile ? 'subtitle2' : 'h6'}
          className={classes.titleText}
        >
          {selectedChat.chatType === 'private'
            ? isMobile
              ? truncateString(username, 12)
              : username
            : isMobile
              ? truncateString(name, 12)
              : name}
        </Typography>
        {selectedChat.chatType === 'group' && (
          <Typography
            color="secondary"
            variant={isMobile ? 'caption' : 'body1'}
          >
            ({participants.length}{' '}
            {participants.length > 1 ? 'members' : 'member'})
          </Typography>
        )}
      </>
    );
  };

  return (
    <div className={classes.conversationHeader}>
      <div className={classes.leftBtns}>
        {isMobile && selectedChat && (
          <Button
            size="small"
            color="primary"
            startIcon={<ArrowBackIcon />}
            onClick={() => unselectChat()}
          >
            Back
          </Button>
        )}
        {selectedChat.chatType === 'group' ? (
          <Button
            className={classes.headerTitle}
            onClick={() => setInfoModal(true)}
            size="small"
          >
            {conversationDetails()}
          </Button>
        ) : (
          <div className={classes.headerTitle}>{conversationDetails()}</div>
        )}
      </div>

      <div className={classes.rightHeaderBtns}>
        {admin === user.id && (
          <DialogBox
            modalOpen={addModal}
            setModalOpen={setAddModal}
            title="Add Members"
            triggerButton={
              <IconButton
                color="primary"
                onClick={() => setAddModal(true)}
                size="small"
                style={{ marginRight: 10 }}
              >
                <GroupAddIcon fontSize={isMobile ? 'default' : 'large'} />
              </IconButton>
            }
          >
            <AddGroupMembers
              userData={userData}
              closeModal={() => setAddModal(false)}
            />
          </DialogBox>
        )}
        {selectedChat.chatType === 'group' && (
          <DialogBox
            modalOpen={infoModal}
            setModalOpen={setInfoModal}
            title="Group Info"
            triggerButton={
              <IconButton
                color="primary"
                onClick={() => setInfoModal(true)}
                size="small"
              >
                <MenuOpenIcon fontSize={isMobile ? 'default' : 'large'} />
              </IconButton>
            }
          >
            <GroupInfo
              userData={userData}
              loadingUsers={loadingUsers}
              closeModal={() => setInfoModal(false)}
            />
          </DialogBox>
        )}

        {isMobile && (
          <DialogBox
            modalOpen={templatesModal}
            setModalOpen={setTemplatesModal}
            title="Templates"
            triggerButton={
              <IconButton
                color="primary"
                onClick={() => setTemplatesModal(true)}
                size="small"
              >
                  <FeaturedPlayListIcon fontSize="small" />
              </IconButton>
            }
          >
            <Feed />
          </DialogBox>
        )}












        {selectedShots.length > 0 && (
          <DialogBox
            modalOpen={screenshotsModal}
            setModalOpen={setScreenshotsModal}
            title="Screenshots"
            triggerButton={
              <IconButton
                color="primary"
                onClick={() => setScreenshotsModal(true)}
                size="small"
              >
                <Badge color='primary' badgeContent={selectedShots.length}>
                  <CropFreeIcon fontSize="small" />
                </Badge>
              </IconButton>
            }
          >
            <div style={{
              display: "flex", overflowX: "auto",
              overflowY: "hidden",
              whiteSpace: "nowrap", flexDirection: "row", justifyContent: "space-between"
            }}>
              {selectedShots.map((shots) => (
                <a style={{ border: "1px lightgrey solid", marginRight: 5 }} href={shots.base64} download="screenshot" ><img width={200} style={{ borderRadius: 5, margin: 10, cursor: "pointer" }} src={shots.base64} /></a>
              ))
              }
            </div>
            <TextField
              label="Label the Screenshots"
              type="text"
              onChange={(event) => setLabelValue(event.target.value)}
              fullWidth
              value={labelValue}
            />
            <Button
              variant="outlined"
              color="primary"
              disabled={labelValue == ""}
              style={{ marginTop: 10 }}
              onClick={saveScreenshots}
            >
              {isSaving ? <CircularProgress /> : "Save"}
            </Button>
          </DialogBox>
        )}




      </div>
    </div>
  );
};

export default ConversationHeader;
