import React, { FC } from "react";
import styled from "styled-components";

interface Props {
    title: string;
    onClick: () => void;
    style?: any;
    width?: any;
    type?: any
    onSubmit?: () => void;

}
const Btntext = styled.p`

font-style: normal;
font-weight: 600;
font-size: 15px;

/* identical to box height */

text-decoration-line: underline;
cursor: pointer;
color: #222222;

`;
const BackLine = styled.div`

align-self: center;
justify-content: center;
align-items: center;
text-align: center;



`;
export const LinkText :FC <Props> =(props) => {
    return(
        <BackLine style={props.style} onClick={props.onClick}>
            <Btntext>{props.title}</Btntext>
        </BackLine>
    )
}
export default LinkText