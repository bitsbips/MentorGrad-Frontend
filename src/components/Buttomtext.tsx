import React from "react";
import { Bottomtext, Bottomtextpurple } from "../pages/AuthFlow/AuthStyles";

const BottomTextall = () => {
    return (
        <div style={{ display: 'flex', flexWrap:'wrap',margin:0,width:'100%',textIndent:3,lineHeight:0 }}>
                <Bottomtext>Protected by reCAPTCHA and subject to the </Bottomtext>
                <Bottomtextpurple> Privacy Policy</Bottomtextpurple>
            <Bottomtext> and </Bottomtext>
            <Bottomtextpurple>Terms of Service.</Bottomtextpurple>

        </div >
    )
}
export default BottomTextall