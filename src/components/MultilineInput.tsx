import React from "react";
import { TextField, Tabs, Tab } from "@material-ui/core";
import { OutlinedInput } from "@mui/material";

interface Props {
    onChange?: (e: any) => void;
    value?: any;
    placeholder?: any
    width?: any

}

const MultilineInput: React.FC<Props> = (props) => {
    return (
        <div style={{borderWidth:1,borderColor:'#D6D6D6',marginTop:'1%'}}>
            <OutlinedInput
            style={{textAlign:'start'}}
                fullWidth
                multiline
                autoComplete="off"
                maxRows={5}
                minRows={5}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />   
             </div>
    )
}
export default MultilineInput;