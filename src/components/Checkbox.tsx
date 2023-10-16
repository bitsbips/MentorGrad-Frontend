import React from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";

export default function CheckBox() {
    return (

        <FormGroup>
            <FormControlLabel
                control={<Checkbox defaultChecked style={{
                    color: "#7476D1",
                    marginLeft:"2%",
                }} />}
                label={<Typography style={{fontSize: '12px',whiteSpace:'normal', lineHeight:1.4,fontFamily: 'Poppins', fontWeight: "400" ,color:'#84818A'}}>{"By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy."}
                </Typography>}


            />
        </FormGroup>
    );
}