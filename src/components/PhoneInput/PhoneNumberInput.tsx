import React from 'react';
// import MuiPhoneNumber from 'material-ui-phone-number'

import { Box, TextField } from "@material-ui/core";
import PhoneInput from 'react-phone-input-2'
import './style.css'
import useStyles from '../../common/Input/useStyles';
import UserStates from '../../store/UserFormStates';

const InputPhone = (props: any) => {
  const classes = useStyles();
  const handlePhoneChange = (value:any, data:any) => {
    // Call the provided onChange function with the new phone value
    if (props.onChange) {
      props.onChange(value, data);
    }
  };

  return (
    <Box className={classes.BoxInline} >
      <Box style={{ width: '100%' ,margin:'auto'}}>
        <PhoneInput
        value={props.value}
        onChange={handlePhoneChange}
          specialLabel={''}
          country={'us'}
          inputStyle={{
            borderColor: (props.touched && props.error) && "red",
            borderRadius:"15px",
            paddingTop:"16px",
            paddingBottom:"16px",
            // paddingLeft:"14px",
            paddingRight:"14px"
          }}
          {...props}
        />
        {(props.touched && props.error) && <p style={{ color: 'red' }} className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense">{props.error}</p>}
      </Box>
    </Box>
  );
};

const PhoneInputComp = (props: any) => {
  return (
    <InputPhone
      req={true}
      helperText={""}
      error={true}
      isSelect={false}
      {...props.input}
      {...props.meta}
      {...props.custom}
      value={props.value} // Pass the value prop to InputPhone
      onChange={props.onChange} // Pass the onChange prop to InputPhone
    />
  )
}

export default PhoneInputComp
