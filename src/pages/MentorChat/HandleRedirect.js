import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useChatListStyles } from '../../styles/muiStyles';
import { useAuthContext } from '../../Context/auth';
import { useStateContext } from '../../Context/state';
import { useMutation } from '@apollo/client';
import {
    CHANGE_STATUS,
} from '../../graphql/mutations';

// import { decode } from "";



function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const HandleRedirect = () => {
    const classes = useChatListStyles();
    const [isLogin, setIsLogin] = useState(false);
    const { setUser } = useAuthContext();
    const { notify } = useStateContext();
    const [changeOnlineStatus] = useMutation(
        CHANGE_STATUS,
        {
            onError: (err) => {
                // notify(getErrorMsg(err), 'error');
            }
        }
    );

    useEffect(() => {

        let token = getParameterByName("token");
        let id = getParameterByName("id");
        let username = getParameterByName("username");
        let user = {
            token,
            id,
            username
        }
        if (token && username && id) {
            notify(`Welcome, ${user.username}! You're logged in.`);
            setUser(user);


            changeOnlineStatus({ variables: { status: true } });
            setIsLogin(true);
        }
    })


    return (
        <>
            {isLogin ?
                <Redirect exact to="/" /> :
                <LoadingSpinner />}


        </>
    );
};

export default HandleRedirect;
