import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import Loadercom from './Loadercom';

interface Props {
  title: string;
  onClick: () => void;
  style?: any;
  width?: any;
  type?: any;
  onSubmit?: () => void;
  load?: boolean;
  disabled?: boolean;
  fontSize: any;
}

const Backbutton = styled.div`
  border-radius: 10px;
  justify-content: 'center';
  align-items: 'center';
  text-align: center;
  padding: 2%;
  cursor: pointer;
  align-self: center;
  width: ${(props) => props.color};

  background-color: #7476d1;
  /* margin-top: 4%; */

  @media (max-width: 750px) {
    border-radius: 5px;
    padding: 2.5% 2%;
  }
`;
const Btntext = styled.p`
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  color: #fff;
  text-align: center;
  justify-content: 'center';
  align-items: 'center';
  margin: auto;
  text-transform: none;
`;
const ButtonComp: React.FC<Props> = (props) => {
  return (
    <>
      {!props.load ? (
        <Backbutton
          onSubmit={
            !props.disabled
              ? props.onSubmit
              : () => {
                  console.log('disabled');
                }
          }
          onClick={
            !props.disabled
              ? props.onClick
              : () => {
                  console.log('disabled');
                }
          }
          style={props.style}
          color={props.width}
        >
          <Button disabled={props.disabled} type="submit">
            <Btntext style={{ fontSize: props.fontSize }}>
              {props.title}
            </Btntext>
          </Button>
        </Backbutton>
      ) : (
        <Loadercom />
      )}
    </>
  );
};
export default ButtonComp;
