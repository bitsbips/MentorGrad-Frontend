import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styled from "styled-components";
import { Typography } from "@mui/material";

interface Props {
    onChange: (newValue: any) => void;
    value1?: any
    width?: any
    heading?: any
}
const RadioLabel = styled.p`
font-style: normal;
font-weight: 500;
font-size: 13px;
text-align: left;
color: #222222;

margin: 0 ;
  
  
`;
const RadioPosition = styled.div`
 display: flex;
 flex-direction: column;
 
  
  
`;
const MultiRadio: React.FC<Props> = (props) => {


    return (
        <RadioPosition>
            <RadioLabel>{props.heading}</RadioLabel>
            <RadioGroup
                style={{ marginLeft: '0%', display: 'flex', flexDirection: 'column', fontSize: '13px' }}
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="top"
                value={props.value1}
                onChange={props.onChange}
            >
                <FormControlLabel value="Bachelors" control={<Radio />} label={
                    <Typography variant="body1" style={{ fontSize: '13px', fontFamily: 'inter', fontWeight: '500' }}>
                        Bachelors
                    </Typography>
                } />
                <FormControlLabel value="Masters" control={<Radio />} label={
                    <Typography variant="body1" style={{ fontSize: '13px', fontFamily: 'inter', fontWeight: '500' }}>
                        Masters
                    </Typography>
                } />
                <FormControlLabel value="Doctorate" control={<Radio />} label={
                    <Typography variant="body1" style={{ fontSize: '13px', fontFamily: 'inter', fontWeight: '500' }}>
                        Doctorate
                    </Typography>
                } />
                <FormControlLabel value="Graduate" control={<Radio />} label={
                    <Typography variant="body1" style={{ fontSize: '13px', fontFamily: 'inter', fontWeight: '500' }}>
                        Graduate
                    </Typography>
                } />
                <FormControlLabel value="None" control={<Radio />} label={
                    <Typography variant="body1" style={{ fontSize: '13px', fontFamily: 'inter', fontWeight: '500' }}>
                        None
                    </Typography>
                } />



            </RadioGroup>
        </RadioPosition>
    );
};

export default MultiRadio;
