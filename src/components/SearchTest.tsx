import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
    onChange: (e: any) => void;
    value: any;
    width?: any;
    height?: any;
    id?: any;
    padding?: any;
    label?: any;
    data: string[];
}

const ComboBox: React.FC<Props> = (props) => {
    return (
        <Autocomplete
            disablePortal
            inputValue={props.value}
            onInputChange={(event, newInputValue) => {
                props.onChange(newInputValue);
            }}
            id="controllable-states-demo"
            options={props.data}
            sx={{
                width: props.width,
                borderRadius: 5,
                backgroundColor: '#F2F5F9',
                padding: props.padding,
                marginTop: '1%',
                '& fieldset': {
                    borderRadius: 2, borderWidth: '1.5px',
                    borderColor: '#D6D6D6',
                }
            }} renderInput={(params) => <TextField {...params} size="small"
                label={props.label} />}
        />
    );
}
export default ComboBox;