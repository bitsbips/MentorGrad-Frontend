import React from 'react';
import { RightBorderDashboard } from '../../StudentDashboard/StudentDashboardStyles';
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const SearchFilter = (props: any) => {
  const {
    handleChange,
    countries,
    filters,
    setFilters,
    handleCheckboxChange,
    selectedOptions,
    getMentors,
  } = props;

  const courses = [
    'University and Program Information',
    'Travel, arrival and settling down',
    'Application process',
    'Student Housing',
    'Enrollment Support',
    'University Life',
    'Scholarships and Tuition Discounts',
    'Internships and Placements',
    'Visa information and guidance',
    'Application handling and submission',
  ];

  return (
    <RightBorderDashboard>
      <Stack sx={{ p: 2 }} gap={2.5}>
        <Typography textAlign={'left'} fontWeight={600}>
          Search Filter
        </Typography>
      </Stack>
      <Divider
        variant="middle"
        orientation={'vertical'}
        flexItem
        sx={{
          border: '1px solid #bfbfbf',
          width: { xs: '100%', lg: '100%' },
          mt: { xs: '10px', lg: '' },
          mb: { xs: '10px', lg: '' },
        }}
      />
      <Stack sx={{ p: 2 }} gap={2.5}>
        <Autocomplete
          options={countries}
          value={filters.country}
          onChange={(event, newValue) =>
            setFilters((filters: any) => ({
              ...filters,
              ['country']: newValue,
            }))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Country"
              variant="outlined"
              size="small"
            />
          )}
        />

        <Stack>
          <Typography textAlign={'left'} fontWeight={700} fontSize={'large'}>
            Gender
          </Typography>
          <FormControlLabel
            checked={filters.gender === 'Male'}
            onChange={(event) => {
              const target = event.target as HTMLInputElement;
              if (target.checked) {
                setFilters((filters: any) => ({
                  ...filters,
                  gender: 'Male',
                }));
              } else {
                setFilters((filters: any) => ({
                  ...filters,
                  gender: '',
                }));
              }
            }}
            control={<Checkbox size="small" />}
            label="Male"
          />
          <FormControlLabel
            checked={filters.gender === 'Female'}
            onChange={(event) => {
              const target = event.target as HTMLInputElement;
              if (target.checked) {
                setFilters((filters: any) => ({
                  ...filters,
                  gender: 'Female',
                }));
              } else {
                setFilters((filters: any) => ({
                  ...filters,
                  gender: '',
                }));
              }
            }}
            control={<Checkbox size="small" />}
            label="Female"
          />
        </Stack>

        <Stack>
          <Typography textAlign={'left'} fontWeight={700} fontSize={'large'}>
            Mentoring Area
          </Typography>
          {courses.map((list) => (
            <FormControlLabel
              checked={selectedOptions.includes(list)}
              name="course"
              onChange={() => handleCheckboxChange(list)}
              control={<Checkbox size="small" />}
              style={{ fontSize: '5px' }}
              label={list}
            />
          ))}
        </Stack>
        <Button
          variant="contained"
          sx={{ background: '#5F61BE' }}
          onClick={getMentors}
        >
          Search
        </Button>
      </Stack>
    </RightBorderDashboard>
  );
};

export default SearchFilter;
