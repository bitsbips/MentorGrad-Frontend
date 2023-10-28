import { useState } from 'react';
import { Popover, Button, IconButton } from '@material-ui/core';
import { useEmojiPanelStyles } from '../../styles/muiStyles';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Calculator  as Cal} from 'react-mac-calculator';
import CalIcon from '../../Assets/Images/Calculator-icon.png';




const Calculator = ({ handleEmojiAdd, isModal }) => {
  const classes = useEmojiPanelStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const emojis = ['👍','👎','😂', '😭', '❤️', '🤣', '😍', '😌', '🔥', '🤔', '😫', '🙄'];

  return (
    <div>
      <IconButton
        size="small"
        color={anchorEl ? 'primary' : 'default'}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <img src={CalIcon} width={20} />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{backend:"none", border:"none"}}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: isModal ? 'right' : 'left',
        }}
        elevation={1}
      >
        <div className={classes.emojiWrapper} style={{gridGap:0, overflow:"hidden"}}>
        <Cal  />
        </div>
      </Popover>
    </div>
  );
};

export default Calculator;
