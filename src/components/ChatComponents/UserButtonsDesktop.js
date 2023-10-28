import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import DialogBox from './DialogBox';
import CreateGroup from '../pages/Main/CreateGroup';
import DarkModeSwitch from './DarkModeSwitch';

import { Button, Typography, Avatar } from '@material-ui/core';
import { useNavStyles } from '../styles/muiStyles';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import backendUrls from '../backendUrls';

const UserButtonsDesktop = ({ user, handleLogout, isMobile }) => {
  const [createGroupModal, setCreateGroupModal] = useState(false);
  const classes = useNavStyles();
  let {invoicemate} = backendUrls;

  if (isMobile) return null;

  return (
    <div>
      {user ? (
        <div className={classes.rightBtnWrapper}>
          <Button
            color="primary"
            variant="contained"
            href={invoicemate}
            target='_blank'
            size="small"
            style={{marginRight:10}}
            className={classes.lastBtn}
            startIcon={<SettingsBackupRestoreIcon />}
          >
            Back to IM
          </Button>
          <DialogBox
            title="Create A Group"
            modalOpen={createGroupModal}
            setModalOpen={setCreateGroupModal}
            triggerButton={
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={() => setCreateGroupModal(true)}
                startIcon={<GroupAddIcon />}
              >
                Create Group
              </Button>
            }
            children={
              <CreateGroup closeModal={() => setCreateGroupModal(false)} />
            }
          />
          <Button
            color="primary"
            variant="contained"
            size="small"
            className={classes.lastBtn}
            onClick={handleLogout}
            startIcon={<PowerSettingsNewIcon />}
          >
            Logout
          </Button>
          
          


          <div className={classes.userInfo} style={{marginLeft:10}}>
            <Avatar
              alt={user.username}
              src={`https://secure.gravatar.com/avatar/${user.id}?s=150&d=retro`}
              className={classes.avatar}
            />
            <Typography color="secondary" variant="body1">
              {user.username}
            </Typography>
          </div>
          <DarkModeSwitch />
        </div>
        
      ) : (
        <div>
          <Button
            color="primary"
            variant="contained"
            size="small"
            component={RouterLink}
            to="/login"
            startIcon={<ExitToAppIcon />}
          >
            Login
          </Button>
          {/* <Button
            color="primary"
            variant="contained"
            size="small"
            className={classes.lastBtn}
            component={RouterLink}
            to="/register"
            startIcon={<PersonAddIcon />}
          >
            Register
          </Button> */}
          <DarkModeSwitch />
        </div>
      )}
    </div>
  );
};

export default UserButtonsDesktop;
