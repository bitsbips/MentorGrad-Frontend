import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import styled from 'styled-components';


interface Props {
    label?: string,
    placeholder: string,
    icon?: any
    onChange?: (e: any) => void;
    value: any
    width: any
    inputmode: any
    id: any


}

const _Input = styled.input`
  background-image: linear-gradient(#7476D1, #7476D1), linear-gradient(#D6D6D6, #D6D6D6);
  border: 0 none;
  border-radius: 15px;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1.5px;
  padding: 10px 0px;
  color: #222222;
  display: initial;
  width: ${props => props.slot};
  outline: none;
  font-size: 12px;
  font-weight: 500;
  &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
      color: #222222;
    }
`;
const LineInput: React.FC<Props> = (props) => {
    return (
        <_Input
        slot={props.width}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            type={props.inputmode}
            width={props.width}
            id={props.id}
        />
    );
}
export default LineInput;