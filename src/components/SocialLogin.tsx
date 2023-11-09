import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Position } from "../pages/AuthFlow/AuthStyles";
import { Button } from "@mui/material";

interface Props {
  title: string;

  onClick: () => void;
  style?: any;
  color?: any;
  img: string;
}

// const Text = styled.p`
//  font-family: 'Poppins';
//     font-weight: 500;
//     font-size: 12;
//     color: #fff;
//     margin:'auto',

// `;

const Backbtn = styled.button`
  width: 88%;
  border-radius: 7px;
  justify-content: "center";
  align-items: "center";
  margin: auto;
  margin-bottom: 3%;
  text-align: center;
  align-self: center;
  padding: 2.3%;
  cursor: pointer;
  align-self: center;
  text-decoration: "none";
  border: 0px;

  background-color: ${(props) => props.color};
`;
const Text = styled.p`
  font-weight: 500;
  font-size: 12;
  color: #fff;
  margin: auto;
  text-transform: none;
`;

const SocialLogin: FC<Props> = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <Backbtn type="submit" color={props.color} onClick={props.onClick}>
        <Position>
          <img
            src={props.img}
            style={{
              width: 20,
              height: 18,
              alignSelf: "center",
              marginLeft: "3%",
            }}
          />
          <Text>{props.title}</Text>
        </Position>
      </Backbtn>
    </div>
  );
};
export default SocialLogin;
