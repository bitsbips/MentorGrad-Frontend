import React from "react";
import styled from "styled-components";
import { Button } from '@mui/material';
import Arrow from '../Assets/Images/whiteArrrow.svg'
import { BsArrowRight } from "react-icons/bs";
import Loadercom from "./Loadercom";
import EastIcon from '@mui/icons-material/East';
interface Props {
    title: string;
    onClick: () => void;
    style?: any;
    width?: any;
    type?: any;
    icon?: any
    onSubmit?: () => void;
    marginLeft?: any;
    load?: boolean

}
const Backbutton = styled.div`
    border-radius: 12px;
    justify-content: "center";
    align-items: 'center';
    margin-bottom: 2.5%;
    text-align: center;
    cursor: pointer;
    align-self: center;
    width:18%;
    padding: 0.5%;

    background-color: #6C6EBE;
    /* margin-top: 4%; */
    @media (max-width: 750px) {
        width:40%;
        align-self: center;


  }
`;
const Btntext = styled.p`

font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #fff;
text-align: center;
justify-content: "center";
    align-items: 'center';
    margin: auto;
    margin-right: 5px;
`;
const IconButton: React.FC<Props> = (props, type) => {
    return (
        <>
            {!props.load ?

                <Backbutton style={props.style} onSubmit={props.onSubmit} onClick={props.onClick}>
                    <Button disabled={props.load} type="submit" >

                        <Btntext>{props.title}</Btntext>
                        <EastIcon style={{color:'#fff',fontSize:'20px'}}/>
                    </Button>

                </Backbutton> :
                <Loadercom/>}
        </>

    )
}
export default IconButton;