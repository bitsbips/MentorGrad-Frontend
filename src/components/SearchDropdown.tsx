import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
    onChange: (newValue: any) => void;
    value: any;
    width?: any;
    height?: any;
    id?: any;
    padding?: any;
    label?: any;
    data: {
        id: number;
        value: any;
        label: any
    }[];
}

const SearchDropdown: React.FC<Props> = (props) => {
    const handleOnChange = (event: any, newValue: Props | null) => {
        props.onChange(newValue);
      };
    return (
        <Autocomplete
            disablePortal
            value={props.value}
            onChange={handleOnChange}
            id="controllable-states-demo"
            options={props.data}
            freeSolo
            sx={{
                width: props.width,
                borderRadius: 5,
                backgroundColor: '#fffff',
                padding: props.padding,
                marginTop: '1%',
                '& fieldset': {
                    borderRadius: 1.5, borderWidth: '1.5px',
                    borderColor: '#D6D6D6',
                }
            }} renderInput={(params) => <TextField {...params} size="small"
                label={props.label}  />}
        />
    );
}
export default SearchDropdown;
