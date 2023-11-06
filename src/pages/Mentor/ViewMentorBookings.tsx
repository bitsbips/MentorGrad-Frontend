import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
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
import { Box } from '@mui/system';
import { formatDate } from '../../helper-functions';
import { StatusMentorBooking } from './StatusMentorBookings';
import { changesBookingStatus } from '../../api';
import { notifyError, notifySuccess } from '../../components/Toastifycom';

export const ViewMentorBooking = ({
  open,
  setShowDetails,
  data,
  getAllBookings,
}: {
  open: boolean;
  setShowDetails: Function;
  data: any;
  getAllBookings: Function;
}): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [reason, setReason] = useState('');
  const [statusModal, setStatusModal] = useState(false);

  const handleStatusChange = () => {
    changesBookingStatus({
      bookingId: data?._id,
      newBookingStatus: 'COMPLETED',
      message: reason,
    })
      .then((res) => {
        notifySuccess('Booking Accepted Successfully!');
        getAllBookings('ALL');
        setStatusModal(false);
        setShowDetails(false);
      })
      .catch((err) => {
        notifyError(err?.message);
      });
  };
  return (
    <>
      <Dialog open={open} maxWidth={'xl'}>
        <DialogContent>
          <Box
            display="grid"
            gridTemplateColumns={
              !isMobile ? 'repeat(2, 2fr)' : 'repeat(2, 2fr)'
            }
            gap={2}
          >
            <Stack
              sx={{
                color: 'black',
                borderBottom: '3px solid #5F61BE',

                gridColumn: 'span 6',
                width: 'fit-content',
              }}
            >
              <Typography fontWeight={700} noWrap>
                {data?.bookingSubject}
              </Typography>
            </Stack>
            <Stack
              alignItems={'flex-end'}
              justifyContent={'center'}
              sx={{ gridColumn: 'span 6' }}
            >
              <Typography fontWeight={600}>N/A</Typography>
            </Stack>
            <Stack sx={{ gridColumn: 'span 12' }}>
              <Typography
                textAlign={'left'}
                color={'#7A7A7A'}
                fontSize={'small'}
              >
                {data?.description}
              </Typography>
            </Stack>
            <Stack
              flexDirection={'column'}
              sx={
                !isMobile ? { gridColumn: 'span 6' } : { gridColumn: 'span 12' }
              }
            >
              <Stack
                sx={{
                  color: 'black',
                  borderBottom: '3px solid #5F61BE',

                  mt: 2,
                  mb: 2,
                  width: 'fit-content',
                }}
              >
                <Typography fontWeight={700}>Date & Time</Typography>
              </Stack>
              <Typography
                textAlign={'left'}
                fontSize={'small'}
                color={'#7A7A7A'}
              >
                {formatDate(data?.bookingDate, '')}
              </Typography>
              <Typography
                textAlign={'left'}
                fontSize={'small'}
                color={'#7A7A7A'}
              >
                {data?.time}
              </Typography>
              <Typography
                textAlign={'left'}
                fontSize={'small'}
                color={'#7A7A7A'}
              >
                {data?.duration} Minutes
              </Typography>
            </Stack>

            <Stack flexDirection={'column'}>
              <Stack
                sx={{
                  color: 'black',
                  borderBottom: '3px solid #5F61BE',

                  mt: 2,
                  mb: 2,
                  width: 'fit-content',
                }}
              >
                <Typography fontWeight={700}>Student Information</Typography>
              </Stack>
              <Stack flexDirection={'row'}>
                <Avatar />
                <Stack flexDirection={'column'} sx={{ ml: 1 }}>
                  <Typography
                    noWrap
                    variant="h6"
                    fontSize={'medium'}
                    fontWeight={600}
                  >
                    {data?.student[0]?.first_name + data?.student[0]?.last_name}
                  </Typography>
                  <Typography noWrap color={'#7A7A7A'}>
                    {data?.student[0]?.email}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          {data?.bookingStatus !== 'COMPLETED' &&
          data?.bookingStatus !== 'CANCELLED' ? (
            <Button
              size="large"
              variant="contained"
              sx={{
                background: '#7476D1',
                borderRadius: '8px',
                height: '40px',
                padding: '20px 40px',
                '&:hover': {
                  background: '#5f61be',
                },
              }}
              onClick={() => setStatusModal(true)}
            >
              Accept
            </Button>
          ) : (
            ''
          )}
          <Button
            variant="outlined"
            sx={{
              borderRadius: '8px',
              height: '40px',
              padding: '20px 40px',
              color: '#5f61be',
              borderColor: ' #5f61be',
              '&:hover': {
                color: '#5f61be',
                background: 'rgba(95, 97, 190, 0.05)',
              },
            }}
            onClick={() => setShowDetails(false)}
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

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
