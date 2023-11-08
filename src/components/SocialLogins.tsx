import React, { FC, useEffect } from "react";
import SocialLogin from "./SocialLogin";
import Google from "../Assets/Images/googlem.svg";
import FB from "../Assets/Images/fbm.svg";
import Linkin from "../Assets/Images/linkm.svg";
import { LoginSocialFacebook } from "reactjs-social-login";
import { LoginSocialGoogle } from "reactjs-social-login";
import { LoginSocialLinkedin } from "reactjs-social-login";
import {
  GetGoogoleUser,
  GoogoleLogin,
  linkedInClientId,
  selfUrl,
} from "../api";
import { GoogleLogin } from "@react-oauth/google";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import { Stack, useMediaQuery } from "@mui/material";

const REDIRECT_URI = window.location.href;

const AllSocial: FC = () => {
  const isMobile = useMediaQuery("(min-width: 950px)");

  const { linkedInLogin } = useLinkedIn({
    clientId: linkedInClientId,
    redirectUri: `${selfUrl}validate-user`,
    scope: "openid email profile",
    onSuccess: (code) => {
      debugger;
      console.log(code);
    },
    onError: (error) => {
      debugger;
      console.log(error);
    },
  });

  return (
    <Stack alignItems={"center"}>
      <GoogleLogin
        theme="filled_blue"
        shape="square"
        size="large"
        width={isMobile ? "600px" : "280px"}
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <br />

      <SocialLogin
        title="Sign up with LinkedIn"
        color={"#0A66C2"}
        onClick={linkedInLogin}
        img={Linkin}
      />
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
    </Stack>
  );
};
export default AllSocial;
