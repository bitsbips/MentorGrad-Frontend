// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
// import * as React from 'react';

// import styled from 'styled-components';



// interface Props {
//     name?: string; // Add the name attribute for Formik
//     onChange?: (e: any) => void;
//     value: any
//     width: any
//     id: any
//     padding: any
//     placeholder?: any
//     data: {
//         id: number;
//         value: string;
//         label: string
//     }[];

// }

// // const Select = styled.select`
// // -webkit-appearance: menulist-button; /* Preserve the select dropdown icon in Webkit browsers */
// //   border: 1.5px solid #d6d6d6; /* Set the border explicitly */
// //   border-radius: 15px;
// //   background-color: #fffff;
// //   font-size: 13px;
// //     &:hover {
// //     border: 1.5px solid #000; /* Set the border explicitly */
// //   }
// // `;

// const DropdownCompo: React.FC<Props> = (props) => {

//     return (
//         // <Select
//         //     name={props.name}
//         //     style={{
//         //         width: props.width,
//         //         padding: props.padding,

//         //     }} placeholder={props.placeholder} value={props.value} onChange={props.onChange}>

//         //     {props.data.map((option) => (

//         //         <option value={option.value}>{option.label}</option>

//         //     ))}
//         // </Select>
//         <Select
//             value={props.value}
//             label=""
//             onChange={props.onChange}
//             placeholder={props.placeholder}
//             style={{
//                 width: props.width,
//                 padding: '0.1%',
//                 borderWidth: 1.5,
//                 borderColor: '#d6d6d6',
//             }}
//         >
//             {props.data.map((option) => (
//                 <MenuItem value={option.value}>{option.label}</MenuItem>
//             ))}
//         </Select>
//     )
// }
// export default DropdownCompo;
import React from 'react';
import { Select, MenuItem, OutlinedInput } from '@mui/material';

interface Props {
    name?: string; // Add the name attribute for Formik
    onChange?: (e: any) => void;
    value: any
    width: any
    id: any
    padding: any
    placeholder?: any
    data: {
        id: number;
        value: string;
        label: string
    }[];

}

;
const DropdownCompo: React.FC<Props> = (props) => {
    return (
        <Select
            labelId="demo-simple-select-label"
            size='small'
            value={props.value}
            displayEmpty
            onChange={props.onChange}
            label=""
            id={props.id}
            name={props.name}
            variant="outlined"
            placeholder='Select'
            sx={{
                width: props.width,
                borderRadius: 5,
                textAlign: 'left', 
                padding: props.padding,
                '& fieldset': {
                    borderRadius: "15px", borderWidth: '1.5px',
                    borderColor: '#D6D6D6',
                    padding: '1%',
                    textAlign: 'left', 
                    fontSize: 14,
                    paddingTop:"18px",
                    paddingBottom:"18px",
                    marginTop:"-5px"
                }
            }}
        >
            {props.data.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </Select>
    );
};

export default DropdownCompo;
