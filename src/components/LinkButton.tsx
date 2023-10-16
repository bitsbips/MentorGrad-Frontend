import React, { FC } from "react";
import styled from "styled-components";
import BlackArrow from '../Assets/Images/blackArrow.svg'
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
font-size: 16px;
/* identical to box height */

text-decoration-line: underline;
cursor: pointer;
color: #222222;
margin-left: 8px;

`;
const BackLine = styled.div`

align-self: center;

text-align: center;
display: flex;
flex-direction: row;
`;
export const LinkButton: FC<Props> = (props) => {
    return (
        <BackLine onClick={props.onClick}>
            <div>
                <img src={BlackArrow} />
            </div>

            <Btntext>{props.title}</Btntext>

        </BackLine>
    )
}
export default LinkButton