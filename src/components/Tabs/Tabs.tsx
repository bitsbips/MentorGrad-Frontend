import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import OverView from './OverView';

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}
                        sx={{

                            fontFamily: 'Inter',

                            fontWeight: '500',
                            fontSize: 12,


                            ".Mui-selected": {
                                color: `#5F61BE`,
                                fontFamily: 'Inter',

                                fontWeight: '500',
                                fontSize: 12,

                            },

                        }}
                        TabIndicatorProps={{ sx: { backgroundColor: '#5F61BE', } }}

                    >
                        <Tab label="Overview" value="1" style={{
                            fontFamily: 'Inter',

                            fontWeight: '500',
                            fontSize: 12,
                        }} />
                        <Tab label="Reviews" value="2" style={{
                            fontFamily: 'Inter',

                            fontWeight: '500',
                            fontSize: 12,
                        }} />
                        <Tab label="Group Sessions" value="3" style={{
                            fontFamily: 'Inter',

                            fontWeight: '500',
                            fontSize: 12,
                        }} />
                    </TabList>
                </Box>
                <TabPanel value="1"><OverView/></TabPanel>
                <TabPanel value="2" >No Reviews</TabPanel>
                <TabPanel value="3">No Group Sessions</TabPanel>
            </TabContext >
        </Box >
    );
}