import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import styled from 'styled-components';
import clockIcon from '../../Assets/Images/clock.png';
import personImg from '../../Assets/Images/person.jpeg';
import { BsEye } from 'react-icons/bs';
import Cancel from '@mui/icons-material/Cancel';
import Visibility from '@mui/icons-material/Visibility';
import { ViewMentorBooking } from './ViewMentorBookings';
import { changesBookingStatus, getBookings } from '../../api';
import { notifyError, notifySuccess } from '../../components/Toastifycom';
import { format } from 'date-fns';
import { StatusMentorBooking } from './StatusMentorBookings';
import Spinner from '../../components/Spinner';

type booking = {
  _id: string;
  bookingDate: string;
  bookingSubject: string;
  description: string;
  time: string;
  duration: string;
  bookingStatus: string;
  student: [
    {
      first_name: string;
      last_name: string;
      location: string;
      email: string;
    }
  ];
};

type Bookings = booking[];

export const MentorBooking = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [tabs, setTabs] = React.useState('ALL');
  const [bookings, setBookings] = useState<Bookings>([]);
  const [tempBookings, setTempBookings] = useState<Bookings>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [reason, setReason] = useState('');
  const [statusModal, setStatusModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllBookings('ALL');
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    getAllBookings(newValue);
    setTabs(newValue);
  };

  const handleShowDetails = (booking: object) => {
    setBookingDetails(booking);
    setShowDetails(true);
  };

  const handleModalClose = () => {
    setShowDetails(false);
  };

  function getDateString(dateString: string, component: string) {
    const date = new Date(dateString);

    switch (component) {
      case 'day':
        return format(date, 'd'); // Day of the month.
      case 'month':
        return format(date, 'MMM');
      case 'year':
        return format(date, 'y'); // Year.
      case 'dayName':
        return format(date, 'E'); // Abbreviated day name (e.g., "Mon").
      default:
        return null;
    }
  }

  const getAllBookings = async (type: string) => {
    setIsLoading(true);
    await getBookings(type)
      .then((res) => {
        setTempBookings(res);
        setBookings(res);
        setIsLoading(false);
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };

  const handleStatusChange = () => {
    changesBookingStatus({
      bookingId: bookingDetails,
      newBookingStatus: 'CANCELLED',
      message: reason,
    })
      .then((res) => {
        notifySuccess('Booking Cancelled!');
        getAllBookings('ALL');
        setStatusModal(false);
        setBookingDetails({});
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };

  return (
    <>
      <Grid item xs={12} sm={12} lg={12}>
        <Card>
          <Tabs
            value={tabs}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
          >
            <Tab label="All" value={'ALL'} />
            <Tab label="Booked" value={'COMPLETED'} />
            <Tab label="Upcoming" value={'UPCOMING'} />
            <Tab label="Canceled" value={'CANCELLED'} />
          </Tabs>
        </Card>
      </Grid>
      <br />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {bookings.map((booking, index) => (
            <>
              <Box
                // display="grid"
                // gridTemplateColumns={!isMobile ? '3fr 2fr 2fr' : 'repeat(1, 1fr)'}
                // gap={2}
                sx={{
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a box shadow
                  borderRadius: '20px', // Add rounded corners
                  background: '#FFFFFF', // Set the background color
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={4.5}>
                    <Stack flexDirection={!isMobile ? 'row' : 'column'} gap={1}>
                      <Stack
                        flexDirection={!isMobile ? 'column' : 'row'}
                        justifyContent={'space-around'}
                        alignItems={'center'}
                        sx={
                          isMobile
                            ? {
                                background: '#5F61BE',
                                borderRadius: '20px',
                                color: '#fff',
                                height: '70px',
                              }
                            : {
                                background: '#5F61BE',
                                borderRadius: '20px',
                                color: '#fff',
                                p: 2,
                              }
                        }
                      >
                        <Typography>
                          {getDateString(booking?.bookingDate, 'month')}
                        </Typography>
                        <Typography fontWeight={600} sx={{ fontSize: '32px' }}>
                          {getDateString(booking?.bookingDate, 'day')}
                        </Typography>
                        <Typography>
                          {' '}
                          {getDateString(booking?.bookingDate, 'dayName')}
                        </Typography>
                      </Stack>

                      <Stack flexDirection={'column'} justifyContent={'center'}>
                        <Typography
                          textAlign={!isMobile ? 'left' : 'center'}
                          variant="h6"
                          fontWeight={600}
                        >
                          {booking?.bookingSubject}
                        </Typography>
                        <Typography
                          textAlign={!isMobile ? 'left' : 'center'}
                          fontSize={'small'}
                          color={'#7A7A7A'}
                        >
                          {booking?.description}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Divider
                    variant="middle"
                    orientation={isMobile ? 'horizontal' : 'vertical'}
                    flexItem
                    sx={{
                      border: '1px solid #4C4C4C',
                      width: { xs: '90%', lg: '' },
                      mt: { xs: '20px', lg: '' },
                      mb: { xs: '20px', lg: '' },
                    }}
                  />
                  {/* <Grid item xs={12} lg={1}>
                {/* <div
                  style={
                    !isMobile
                      ? {
                          borderLeft: '1px solid #7A7A7A',
                          padding: '10px',
                          height: '80%',
                        }
                      : {
                          borderTop: '1px solid #7A7A7A',
                          padding: '10px',
                          width: '80%',
                        }
                  }
                ></div> 
              </Grid> */}

                  <Grid
                    item
                    xs={12}
                    md={3}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box>
                      <Typography fontWeight={600} noWrap>
                        {booking?.duration} Minutes
                      </Typography>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '5px 10px 5px 10px',
                          background: '#cccdfc',
                          borderRadius: '10px',
                        }}
                      >
                        <img src={clockIcon} width="12px" height="12px" />
                        <Typography
                          textAlign={'left'}
                          noWrap
                          sx={{ ml: 1, fontSize: '10px' }}
                          fontSize={'small'}
                        >
                          {booking?.time}
                        </Typography>
                      </div>
                    </Box>
                  </Grid>

                  <Divider
                    variant="middle"
                    orientation={isMobile ? 'horizontal' : 'vertical'}
                    flexItem
                    sx={{
                      border: '1px solid #4C4C4C',
                      width: { xs: '90%', lg: '' },
                      mt: { xs: '20px', lg: '' },
                      mb: { xs: '20px', lg: '' },
                    }}
                  />

                  {/* <div
                  style={
                    !isMobile
                      ? {
                          borderLeft: '1px solid #7A7A7A',
                          padding: '10px',
                          height: '80%',
                        }
                      : {
                          borderTop: '1px solid #7A7A7A',
                          padding: '10px',
                          width: '80%',
                        }
                  }
                ></div> */}

                  <Grid item xs={12} md={3}>
                    <Stack
                      flexDirection={'column'}
                      alignItems={'center'}
                      sx={!isMobile ? { pt: 1, pb: 1 } : {}}
                    >
                      <img
                        src={personImg}
                        style={{ width: '50px', borderRadius: '10px' }}
                      />
                      <Typography
                        noWrap
                        variant="h6"
                        fontSize={'medium'}
                        fontWeight={600}
                      >
                        {booking?.student[0]?.first_name +
                          booking?.student[0]?.last_name}
                      </Typography>
                      <Typography noWrap color={'#7A7A7A'} fontSize={'small'}>
                        {booking?.student[0]?.email}
                      </Typography>
                      <Typography noWrap color={'#7A7A7A'} fontSize={'small'}>
                        {booking?.student[0]?.location}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={1}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* <Stack
                  flexDirection={!isMobile ? 'column' : 'row'}
                  justifyContent={isMobile ? 'flex-end' : ''}
                  alignItems={'center'}
                  sx={
                    isMobile
                      ? { width: '100%', pt: '20px' }
                      : { padding: '0 20px 0 10px' }
                  }
                  gap={1}
                > */}
                    <Box
                      sx={{
                        mt: { xs: '20px', lg: '' },
                        mb: { xs: '20px', lg: '' },
                        display: 'flex',
                        flexDirection: { xs: 'row', md: 'column' },
                        gap: '10px',
                      }}
                    >
                      <Button
                        onClick={() => handleShowDetails(booking)}
                        size="small"
                        sx={{
                          background: '#ECECEC',
                          color: 'black',
                          width: { xs: '120px', lg: '90px' },
                          p: 0,
                          '&:hover': {
                            background: '#5f61be',
                          },
                        }}
                        variant="contained"
                        startIcon={<Visibility fontSize="small" />}
                      >
                        View
                      </Button>
                      {booking?.bookingStatus !== 'CANCELLED' && (
                        <Button
                          onClick={() => {
                            setBookingDetails(booking?._id);
                            setStatusModal(true);
                          }}
                          size="small"
                          sx={{
                            background: 'rgba(255, 0, 0, 0.70)',
                            width: { xs: '120px', lg: '90px' },
                            p: 0,
                            '&:hover': {
                              background: '#5f61be',
                            },
                          }}
                          variant="contained"
                          startIcon={<Cancel fontSize="small" />}
                        >
                          Cancel
                        </Button>
                      )}
                    </Box>
                    {/* </Stack> */}
                  </Grid>
                </Grid>
              </Box>
              <br />
              <br />
            </>
          ))}
        </>
      )}

      {showDetails && (
        <ViewMentorBooking
          open={showDetails}
          setShowDetails={setShowDetails}
          data={bookingDetails}
          getAllBookings={getAllBookings}
        />
      )}

      {statusModal && (
        <StatusMentorBooking
          open={statusModal}
          setShowDetails={setStatusModal}
          setReason={setReason}
          reason={reason}
          handleStatusChange={handleStatusChange}
        />
      )}
    </>
  );
};
