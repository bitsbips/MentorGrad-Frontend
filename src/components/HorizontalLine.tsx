import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Position, TopRightText, TopRightText1 } from "../pages/AuthFlow/AuthStyles";

interface Props {
    title: string;
    style?: any;
}


const HorizontalLine: FC<Props> = (props) => {
    return (
        <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',marginTop:'4%',marginBottom:'4%' }}
    >
        <div style={{ flex: 1, height: '1px', backgroundColor: '#DCDBDD' }} />

        <div>
            <p style={{ width: '70px', textAlign: 'center',color:'#84818A',margin:'auto',marginTop:-5 }}>{props.title}</p>
        </div>

        <div style={{ flex: 1, height: '1px', backgroundColor: '#DCDBDD' }} />
    </div>
    )
}
export default HorizontalLine
