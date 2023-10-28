import { formatRecentDate, jwtDecode } from '../../helper-functions';
import { Typography } from '@material-ui/core';
import { useChatListStyles } from '../../styles/muiStyles';
import { truncateString } from '../../helper-functions';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useAuthContext } from '../../Context/auth';


const LatestMessage = ({ body, type }) => {
  const classes = useChatListStyles();
  // const { user } = useAuthContext();
  const user = jwtDecode(localStorage.getItem("@storage_Key"));

  let seenByMe = body.latestMessage?.seenBy.find((seen) => seen.participant == user.id) || null;


  const getMessageBody = () => {
    switch (body.latestMessage?.type) {
      case "Audio":
        return "Audio"
      case "Image":
        return "Image"
      case "Template":
        return "Template"
      case "Attachment":
        return "Attachment"
      default:
        return truncateString(body.latestMessage?.body || "", 35);
    }
  }


  let messageBody = getMessageBody();




  return (
    <div className={classes.chatInfo}>
      <div className={classes.nameAndDate}>
        <Typography variant="subtitle1" noWrap>
          {type === 'user'
            ? truncateString(body?.username || "", 14)
            : truncateString(body?.name || "", 14)}
        </Typography>
        {body?.latestMessage && type === 'user' && (

          <Typography variant="caption" className={classes.greyText}>
            {formatRecentDate(body.latestMessage.createdAt)}
          </Typography>

        )}
      </div>
      {body?.latestMessage && type === 'user' && (
        <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle2" className={classes.greyText}>
            {messageBody}
          </Typography>
          <Typography>
            {body?.isLogin ? <FiberManualRecordIcon fontSize='small' style={{ color: "green" }} /> : ""}
            {!seenByMe ? <FiberManualRecordIcon fontSize='small' style={{ color: "orange" }} /> : ""}
          </Typography>
        </div>
      )}

    </div>
  );
};

export default LatestMessage;
