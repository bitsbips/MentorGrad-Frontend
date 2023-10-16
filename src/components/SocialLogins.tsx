import React, { FC, useEffect } from "react";
import SocialLogin from "./SocialLogin";
import Google from '../Assets/Images/googlem.svg'
import FB from '../Assets/Images/fbm.svg'
import Linkin from '../Assets/Images/linkm.svg'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { LoginSocialGoogle } from 'reactjs-social-login'
import { LoginSocialLinkedin } from 'reactjs-social-login'
import { GetGoogoleUser, GoogoleLogin } from "../api";

const REDIRECT_URI = window.location.href;



const AllSocial: FC = () => {
    useEffect(() => {
        GetGoogoleUser()
    }, [])

    return (
        <div>
            <SocialLogin title='Sign up with Google' color={'#D0463B'} onClick={() => {
                window.open('http://localhost:5001/api/v1/auth/google','_self')
                }} img={Google} />
            <SocialLogin title='Sign up with Facebook' color={'#32519B'} onClick={() => ''} img={FB} />
            <SocialLogin title='Sign up with LinkedIn' color={'#0A66C2'} onClick={() => ''} img={Linkin} />

            {/* <LoginSocialGoogle
                client_id={"751206549312-6ep4odegrc2pae9leh91jojs5126jcue.apps.googleusercontent.com"}
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={({ provider, data }) => {
                    console.log(provider, data)
                }}
                onReject={(err) => {
                    console.log(err)
                }}
            >
                <SocialLogin title='Sign up with Google' color={'#D0463B'} onClick={() => ''} img={Google} />
            </LoginSocialGoogle>
            <LoginSocialFacebook appId="174599048775600"
            isOnlyGetToken
                onResolve={(res) => {
                    console.log(res)
                }}
                onReject={(err) => {
                    console.log(err)
                }}
            >
                <SocialLogin title='Sign up with Facebook' color={'#32519B'} onClick={() => ''} img={FB} />
            </LoginSocialFacebook>
            <LoginSocialLinkedin
                client_id={"77p9znwe8rmhy2"}
                redirect_uri={REDIRECT_URI}
                client_secret={'SVrcyAZePUGCLFJf'}
                onResolve={({ provider, data }) => {
                    console.log(provider, data)
                }}
                onReject={(err) => {
                    console.log(err)
                }}
            >
                <SocialLogin title='Sign up with LinkedIn' color={'#0A66C2'} onClick={() => ''} img={Linkin} />
            </LoginSocialLinkedin> */}


        </div>
    )
}
export default AllSocial