import React, { FC } from "react";
import styled from "styled-components";
import BlackArrow from '../Assets/Images/blackArrow.svg'
import { RxCross2 } from "react-icons/rx";
import CloseIcon from '@mui/icons-material/Close';
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
`;
const BackLine = styled.div`

align-self: center;

text-align: center;
display: flex;
flex-direction: row;
`;
export const RightLinkButton: FC<Props> = (props) => {
    return (
        <BackLine onClick={props.onClick}>
            <Btntext>{props.title}</Btntext>

            <CloseIcon  style={{marginTop:'10%',fontSize:'13px'}}/>


        </BackLine>
    )
}
export default RightLinkButton