import { useAuthContext } from '../../Context/auth';
import { formatTime, jwtDecode } from '../../helper-functions';

import { Card, Typography } from '@material-ui/core';
import PDF from '../../Assets/Images/pdf.png';
import { useConversationPageStyles } from '../../styles/muiStyles';
import Image from '../../components/ChatComponents/Image';
import Audio from '../../components/ChatComponents/Audio';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { file } from '../../api';


const MessageBubble = ({ message }) => {

  const classes = useConversationPageStyles();
  // const { user } = useAuthContext();
  const user = jwtDecode(localStorage.getItem("@storage_Key"));

  const isSentMsg = message.senderId === user.id;
  const isAudio = message.type === "Audio";
  const isImage = message.type === "Image";
  const isText = message.type === "Text";
  const isTemplate = message.type === "Template";
  const isAttachment = message.type === "Attachment";




  return (
    <div className={classes.messageWrapper}>
      <div style={!isText && !isTemplate && { background: "none", padding: 0 } || {}} className={isSentMsg ? classes.sentMsg : classes.receivedMsg}>
        {isAudio ?
          <Audio url={`${file}${message.body}`} time={formatTime(message.createdAt)} /> :
          isImage ?
            <Image url={`${file}${message.body}`} time={formatTime(message.createdAt)} /> :
            isTemplate ?
              ReactHtmlParser(message.body) :
              isAttachment ?
                <a href={`${file}${message.body}`} target="_blank" >
                  <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
                    <img src={PDF} style={{ width: 150 }} />
                    <Typography style={{ float: "right" }} variant="caption" className={classes.msgTime}>
                      {formatTime(message.createdAt)}
                    </Typography>
                  </div>
                </a>
                :
                <div className={classes.msgText} >{message.body}</div>}
        {(isText || isTemplate) &&
          <div style={{ display: 'flex', flexDirection: "row", gap: 2 }}>
            <Typography style={{ float: "right" }} variant="caption" className={classes.msgTime}>
              {formatTime(message.createdAt)}
            </Typography>
          </div>
        }
      </div>

    </div>

  );
};

export default MessageBubble;
