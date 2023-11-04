import React from 'react';
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

export const StatusMentorBooking = ({
  open,
  setShowDetails,
  setReason,
  reason,
  handleStatusChange,
}: {
  open: boolean;
  setShowDetails: Function;
  setReason: Function;
  reason: string;
  handleStatusChange: Function;
}): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={open} maxWidth={'xl'}>
      <DialogContent>
        <Box
          display="grid"
          gridTemplateColumns={!isMobile ? 'repeat(6, 2fr)' : 'repeat(1, 2fr)'}
          gap={2}
        >
          <Stack
            sx={{
              background: '#5F61BE',
              color: 'white',
              borderRadius: '10px',
              p: 1,
              width: 'fit-content',
            }}
          >
            <Typography fontWeight={600} noWrap>
              Message
            </Typography>
          </Stack>
          <Stack
            sx={{
              gridColumn: 'span 12',
            }}
          >
            <textarea
              rows={3}
              onChange={(event) => setReason(event.target.value)}
            />
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          size="large"
          variant="contained"
          sx={{
            background: '#7476D1',
            borderRadius: '20px',
            '&:hover': {
              background: '#5f61be',
            },
          }}
          onClick={() => handleStatusChange()}
        >
          Send
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: '20px' }}
          onClick={() => setShowDetails(false)}
          color="primary"
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
