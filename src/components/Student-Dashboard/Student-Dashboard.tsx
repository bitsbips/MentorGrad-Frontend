import React, { FC, useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/ContextStates';
import {
  Border,
  Container,
  ContainerDa,
  PositionProfile,
  RightContainer,
  RightContainerDash1,
} from '../StudentProfileDetails/StudentProfileStyles';
import {
  ActiveLabel,
  BackActive,
  BackInActive,
  InActiveLabel,
} from './StudentDahboardStyles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Icon } from '@mui/material';
import HeaderUserinfo from '../StudentDashboard/HeaderUserinfo';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '../../hooks/MediaQuery';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
const style = {
  width: '25%',
  bgcolor: '#F2F5F9',
  cursor: 'pointer',
  marginTop: '0px',
};
const style1 = {
  border: '1.4px solid #D6D6D6', // Change the width and color as needed
};

const TestDashboard: FC = () => {
  const [profilestep, setProfileStep] = useState('0');
  const [Status, setStatus] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(min-width: 950px)');

  function SetStatusfunc(ss: any) {
    setStatus(ss);
  }
  const Data = [
    {
      id: 1,
      name: 'Dashboard',
      icon: DashboardIcon,
    },
    {
      id: 2,
      name: 'Bookings',
      icon: DashboardIcon,
    },
    {
      id: 3,
      name: 'Schedule Timings',
      icon: DashboardIcon,
    },
    {
      id: 4,
      name: 'Messages',
      icon: DashboardIcon,
    },
    {
      id: 5,

      name: 'Invoices',
      icon: DashboardIcon,
    },
    {
      id: 6,

      name: 'Reviews',
      icon: DashboardIcon,
    },
    {
      id: 7,

      name: 'Blog',
      icon: DashboardIcon,
    },
    {
      id: 8,

      name: 'Profile',
      icon: DashboardIcon,
    },
    {
      id: 9,

      name: 'Logout',
      icon: DashboardIcon,
    },
  ];
  useEffect(() => {
    // Set the initial Status and profile step when the component mounts
    if (profilestep === '0') {
      setStatus('Dashboard');
    }
  }, [profilestep]);
  const Mycomphoolder: any = () => {
    if (profilestep === '0') {
      return (
        <div>
          <HeaderUserinfo />
        </div>
      );
    }
    if (profilestep === '1') {
      return (
        <div>
          <p>No Result</p>
        </div>
      );
    }
    if (profilestep === '2') {
      return (
        <div>
          <p>No Result</p>
        </div>
      );
    }
    if (profilestep === '3') {
      return (
        <div>
          <p>No Result</p>
        </div>
      );
    }
    if (profilestep === '4') {
      return (
        <div>
          <p>No Result</p>
        </div>
      );
    }
  };
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };
  const list = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {Data.map((data) => (
          <ListItem
            key={data.id}
            onClick={() => [
              SetStatusfunc(data.name),
              data.id === 1
                ? setProfileStep('0')
                : data.id === 2
                ? setProfileStep('1')
                : data.id === 3
                ? setProfileStep('2')
                : data.id === 4
                ? setProfileStep('3')
                : setProfileStep('4'),
            ]}
          >
            {Status === data.name ? (
              <>
                <BackActive>
                  {data.icon && (
                    <data.icon style={{ color: '#fff', fontSize: '20px' }} />
                  )}
                </BackActive>
                <ActiveLabel>{data.name}</ActiveLabel>
              </>
            ) : (
              <>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <BackInActive>
                    {data.icon && <data.icon style={{ fontSize: '20px' }} />}
                  </BackInActive>
                  <InActiveLabel>{data.name}</InActiveLabel>
                </div>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <ContainerDa>
      <PositionProfile>
        {isMobile ? (
          <div style={style}>
            {Data.map((data) => {
              return (
                <>
                  <div
                    onClick={() => [
                      SetStatusfunc(data.name),
                      data.id === 1
                        ? setProfileStep('0')
                        : data.id === 2
                        ? setProfileStep('1')
                        : data.id === 3
                        ? setProfileStep('2')
                        : data.id === 4
                        ? setProfileStep('3')
                        : setProfileStep('4'),
                    ]}
                  >
                    {Status === data.name ? (
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <BackActive>
                          {data.icon && (
                            <data.icon
                              style={{ color: '#fff', fontSize: '20px' }}
                            />
                          )}
                        </BackActive>
                        <ActiveLabel>{data.name}</ActiveLabel>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <BackInActive>
                          {data.icon && (
                            <data.icon style={{ fontSize: '20px' }} />
                          )}
                        </BackInActive>
                        <InActiveLabel>{data.name}</InActiveLabel>
                      </div>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <>
            {/* Burger Icon to open the drawer */}
            <div
              onClick={toggleDrawer(true)}
              style={{
                alignSelf: 'flex-start',
                marginLeft: '-5%',
                marginBottom: '3%',
              }}
            >
              <MenuOpenIcon style={{ fontSize: '30px', color: '#5F61BE' }} />
            </div>

            {/* Drawer */}
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
            >
              {list}
            </Drawer>
          </>
        )}
        <RightContainerDash1>{Mycomphoolder()}</RightContainerDash1>
      </PositionProfile>
    </ContainerDa>
  );
};
export default TestDashboard;
