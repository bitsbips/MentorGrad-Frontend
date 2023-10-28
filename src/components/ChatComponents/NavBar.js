import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import { useAuthContext } from '../context/auth';
import { useStateContext } from '../context/state';
import UserButtonsDesktop from './UserButtonsDesktop';
import UserMenuMobile from './UserMenuMobile';
import ChatIcon from '../png/im.png';

import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  useMediaQuery,
  Container,
} from '@material-ui/core';
import { useNavStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useMutation } from '@apollo/client';
import {
  CHANGE_STATUS,
} from '../graphql/mutations';
import { jwtDecode } from '../../helper-functions';

const NavBar = () => {
  const user = jwtDecode(localStorage.getItem("@storage_Key"));
  const { selectedChat } = useStateContext();
  const client = useApolloClient();
  const history = useHistory();
  const classes = useNavStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const [changeOnlineStatus] = useMutation(
    CHANGE_STATUS,
    {
      onError: (err) => {
        // notify(getErrorMsg(err), 'error');
      }
    }
  );


  const handleLogout = () => {
    // changeOnlineStatus({
    //   variables: { status: true },
    //   // update: (_, { data }) => {
    //   //   client.clearStore();
    //   //   logoutUser();
    //   // }
    // });
    // client.clearStore();
    // logoutUser();
    // history.push('/login');
  };

  if (isMobile && selectedChat) return null;

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar variant="dense" disableGutters={isMobile}>
        <Container style={{ display: 'flex' }} disableGutters={isMobile}>
          <div className={classes.leftPortion}>
            <div className={classes.logoWrapper}>
              <Button
                className={classes.logoBtn}
                component={RouterLink}
                to="/"
                color="primary"
              >
                <img
                  src={ChatIcon}
                  alt="logo"
                  className={classes.svgImage}
                />
                {/* MateChat! */}
              </Button>
            </div>
          </div>
          <UserButtonsDesktop
            user={user}
            handleLogout={handleLogout}
            isMobile={isMobile}
          />
          <UserMenuMobile
            user={user}
            handleLogout={handleLogout}
            isMobile={isMobile}
          />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
