import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styled from "styled-components";
import useMediaQuery from "../hooks/MediaQuery";
import { Typography } from "@mui/material";



interface Props {
    onChange: (newValue: any) => void;
    value1?: any
    width?: any
    id: any
    heading?: any

}
const RadioLabel = styled.p`
font-style: normal;
font-weight: 500;
font-size: 13px;
text-align: left;
color: #222222;
align-self: center;
justify-content: center;
align-items: center;
margin: 0 ;
@media (max-width: 750px) {
    text-align: left;
    float:left;
    align-self: flex-start;

  }
  
  
`;
const RadioPosition = styled.div`
 display: flex;
 flex-direction: row;
 @media (max-width: 750px) {
  display:flex;
flex-direction:column;
  }
  
  
`;
const RadioComp: React.FC<Props> = (props) => {
    const isMobile = useMediaQuery('(max-width: 750px)');


    return (
        <RadioPosition>
            <RadioLabel>{props.heading}</RadioLabel>
            <RadioGroup
                style={isMobile ? { marginLeft: "0%" } : { marginLeft: '5%' }}
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="top"
                value={props.value1}
                onChange={props.onChange}
            >
                <FormControlLabel value="Yes" control={<Radio />} label={
                    <Typography variant="body1" style={{ fontSize: '13px', fontFamily: 'inter', fontWeight: '500' }}>
                        Yes
                    </Typography>
                } />
                <FormControlLabel value="No" control={<Radio />} label={
                    <Typography variant="body1" style={{ fontSize: '13px', fontFamily: 'inter', fontWeight: '500' }}>
                        No
                    </Typography>
                } />

            </RadioGroup>
        </RadioPosition>
    );
};

export default RadioComp;