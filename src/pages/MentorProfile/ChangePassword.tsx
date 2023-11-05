import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ErrorText } from '../../pages/AuthFlow/AuthStyles';
import useMediaQuery from '../../hooks/MediaQuery';
import ButtonComp from '../../components/Button';
import PasswordInput from '../../components/PasswordInput';
import { InputHolder } from '../../components/UserForm/UserFormStyles';
import { RightBorderDashboard } from '../../components/StudentDashboard/StudentDashboardStyles';
import {
  ContainerForm,
  LabelProfile,
  TopText,
} from '../../components/StudentProfileDetails/StudentProfileStyles';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
} from '@mui/material';
import { updateUserPassword } from '../../api';
import { notifyError, notifySuccess } from '../../components/Toastifycom';

const ChangePassword: FC = () => {
  const isMobile = useMediaQuery('(min-width: 950px)');

  const initialValues = {
    oldpassword: '',
    password: '',
    confirmpass: '',
  };
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    confirmpass: Yup.string()
      .required('Confirm Password is Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),

    oldpassword: Yup.string().min(8).required('Old Password is Required'),
  });

  const [confirmView, setConfirmView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let payload = {
        password: values.oldpassword,
        newPassword: values.password,
      };
      setConfirmView(false);
      setIsLoading(true);
      updateUserPassword(payload).then((e) => {
        console.log(e);
        if (e.success === true) {
          notifySuccess(e.message);
          setIsLoading(false);
        } else {
          notifyError(e.message);
          setIsLoading(false);
        }
      });
    },
  });

  return (
    <>
      <Grid item lg={4}>
        <TopText>Change Password</TopText>
        <ContainerForm>
          <form onSubmit={handleSubmit}>
            <InputHolder>
              <LabelProfile>Old Password</LabelProfile>
              <PasswordInput
                id={'oldpassword'}
                value={values.oldpassword}
                onChange={handleChange}
                label={''}
                placeholder={'Enter your old Password'}
                style={{ marginTop: 5 }}
              />
              <ErrorText>{errors.oldpassword}</ErrorText>
            </InputHolder>
            <InputHolder>
              <LabelProfile>New Password</LabelProfile>
              <PasswordInput
                id={'password'}
                value={values.password}
                onChange={handleChange}
                label={''}
                placeholder={'Enter your New Password'}
                style={{ marginTop: 5 }}
              />
              <ErrorText>{errors.password}</ErrorText>
            </InputHolder>
            <InputHolder>
              <LabelProfile>Confirm Password</LabelProfile>
              <PasswordInput
                id={'confirmpass'}
                value={values.confirmpass}
                onChange={handleChange}
                label={''}
                placeholder={'Confirm Password'}
                style={{ marginTop: 5 }}
              />
              <ErrorText>{errors.confirmpass}</ErrorText>
            </InputHolder>
          </form>
          <Button
            variant="contained"
            sx={{
              marginTop: '4%',
              padding: { sx: '10px', lg: '20px' },
              marginBottom: '5%',
              float: 'right',

              background: '#5f61be',
              borderRadius: '8px',
              height: '40px',
              '&:hover': {
                background: '#5f61be',
              },
            }}
            onClick={() => setConfirmView(true)}
            disabled={isLoading}
          >
            {!isLoading ? (
              'Change Password'
            ) : (
              <>
                <CircularProgress sx={{ borderColor: '#fff', color: '#fff' }} />
              </>
            )}
          </Button>
        </ContainerForm>
      </Grid>

      <Dialog open={confirmView} maxWidth={'xl'}>
        <DialogContent>
          <Typography>Are you sure?</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            size="small"
            variant="contained"
            sx={{
              background: '#5f61be',
              borderRadius: '8px',
              height: '40px',
              padding: '20px 40px',
              '&:hover': {
                background: '#5f61be',
              },
            }}
            onClick={() => handleSubmit()}
          >
            Yes
          </Button>
          <Button
            size="small"
            variant="outlined"
            sx={{
              borderRadius: '8px',
              height: '40px',
              padding: '20px 20px',
              color: '#5f61be',
              borderColor: ' #5f61be',
              '&:hover': {
                color: '#5f61be',
                background: 'rgba(95, 97, 190, 0.05)',
              },
            }}
            onClick={() => setConfirmView(false)}
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default ChangePassword;
