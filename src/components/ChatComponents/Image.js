import { useEffect, useState } from 'react';
import loading from '../../Assets/Images/loading.jpeg';
import { IconButton, Typography } from '@material-ui/core';


const Image = ({ url, time }) => {
    const [view, setView] = useState(null);

    useEffect(() => {
        _getBase64FromUrl(url)
    }, [])


    const _getBase64FromUrl = async (url) => {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                setView(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();

    }


    return (
        <div style={{display:"flex", flexDirection:"column", alignItems: "end"}}>
            <img  style={view ? { borderRadius: 5, marginLeft: 5, maxWidth: 300, maxheight: 400 } : { border: "1px solid lightgrey", borderRadius: 10 }} src={view ? view : loading} />
            <Typography style={{ color: "black", float: "right" }} variant="caption" >
                {time}
            </Typography>
        </div>
    );
};

export default Image;
