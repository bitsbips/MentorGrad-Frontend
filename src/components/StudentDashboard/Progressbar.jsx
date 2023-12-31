import React from 'react';
import { LinearProgress, Typography } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import { Profilecomp } from './StudentDashboardStyles';
import useMediaQuery from '../../hooks/MediaQuery';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const styles = {
    root: {
      width: '100%',
      borderRadius: '5px', // Set your desired border-radius
      padding:'5px',

    },
    bar: {
      borderRadius: '5px', // Set the same border-radius as the root
      color:'#7476D1',
      backgroundColor: '#7476D1', // Set your desired background color for the active portion
    },
  };
const ProgressBarWithPercentage = ({ percentage }) => {
  const isMobile = useMediaQuery('(min-width: 950px)');
  const navigate =useNavigate()


    return (

        <div style={{ width:isMobile ? '30%' :'100%', textAlign: 'center', position: 'relative',bottom:0,alignItems:'flex-end',marginTop:'4%'}}>
      <Typography textAlign={'left'} onClick={() => navigate('/studentForm')}><Profilecomp>Profile completion <ChevronRightIcon style={{fontSize:'15px'}}/></Profilecomp></Typography>

            <Typography
                variant="body1"
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: `${percentage}%`,
                    transform: 'translate(-50%, -50%)',
                    whiteSpace: 'nowrap',
                    fontWeight: 'bold',
                    color: '#fff',
                    fontSize:'12px',
                    backgroundColor: '#7476D1', // Add your desired background color here
                    padding: '3px', // Optional: Add padding to the background
                    borderRadius: '4px', // Optional: Add border radius to the background
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)', // Polygon for bottom part

                }}
            >
                {`${percentage}%`}
            </Typography>

            <LinearProgress sx={{
        ...styles.root,
        '& .MuiLinearProgress-bar': {
          ...styles.bar,
        },
      }} variant="determinate" value={percentage} style={{ width: '100%', borderRadius: '5px',marginTop:'2%' }} />
        </div>

    );
};
export default ProgressBarWithPercentage



