import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import './ChooseFile.css'

interface Props {
    label?: string,
    placeholder?: string,
    icon?: any
    onChange?: (e: any) => void;
    value?: any
    width: any
    inputmode: any
    id: any
    accept?:any
    padding?:any


}

const _Input = styled.input`
  border: 1.5px solid #D6D6D6;
  font-size: 13px;
  border-radius: 5px;
  width: ${props => props.slot};
  &:hover {
    border-color: #000;
  }
  &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
      color: #525252;
    }
`;


const ChoosFile: React.FC<Props> = (props) => {
    return (
        <_Input
            slot={props.width}
            value={props.value}
            onChange={props.onChange}
            type={props.inputmode}
            width={props.width}
            id={props.id}
            style={{padding:props.padding}}
            accept={props.accept}
        />
    );
}
export default ChoosFile;