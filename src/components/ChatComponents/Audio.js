import { useEffect, useState, useRef } from 'react';
import loading from '../../Assets/Images/audio.png';
import { IconButton, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import StopIcon from '@material-ui/icons/Stop';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const Audio = ({ url, time }) => {
    const [view, setView] = useState(false);


    return (
        <div>
            {view && <audio autoPlay src={url} onEnded={() => setView(!view)} style={{ display: "hidden" }} ></audio>}
            <div class="container" onClick={() => setView(!view)} style={{ display: "flex", flexDirection: "row" }}>
                {view ?
                    <IconButton
                        size="small"
                        onClick={() => setView(!view)}
                    >
                        <StopIcon fontSize="large" />
                    </IconButton>
                    :
                    <IconButton
                        size="small"
                        onClick={() => setView(!view)}
                    >
                        <PlayCircleOutlineIcon fontSize="large" />
                    </IconButton>
                }
                <img style={{ border: "1px solid lightgrey", borderRadius: 10, height: 50, width: 200, cursor: "pointer" }} src={loading} />
            </div>
            <Typography style={{ color: "black", float: "right" }} variant="caption" >
                {time}
            </Typography>
        </div>
    );
};

export default Audio;
