import React, { FC, useEffect, useState } from "react";
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
  googleClientId,
  googleSecretId,
  linkedInClientId,
  selfUrl,
} from "../api";
import { useGoogleLogin } from "@react-oauth/google";
import { hasGrantedAllScopesGoogle } from "@react-oauth/google";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import { Stack, useMediaQuery } from "@mui/material";
import { notifyError, notifySuccess } from "./Toastifycom";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const REDIRECT_URI = window.location.href;

const AllSocial: FC = () => {
  const isMobile = useMediaQuery("(min-width: 950px)");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => exchangeCodeForTokens(codeResponse?.code),
    flow: "auth-code",
  });

  const exchangeCodeForTokens = async (code: any) => {
    const response = await axios.post("https://oauth2.googleapis.com/token", {
      code,
      client_id: googleClientId,
      client_secret: googleSecretId,
      redirect_uri: selfUrl,
      grant_type: "authorization_code",
    });
    const { id_token } = response.data;
    handleUserLogin(id_token);
  };

  const { linkedInLogin } = useLinkedIn({
    clientId: linkedInClientId,
    redirectUri: `${selfUrl}/validate-user`,
    scope: "openid email profile",
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      let token = localStorage.getItem("@storage_Key");
      if (token) {
        navigate("/dashboard");
        notifySuccess("User logged in");
      } else {
        notifyError("There is some issue. Please contact administration.");
      }
    },
  });

  const handleUserLogin = async (credentialResponse: any) => {
    debugger;
    setIsLoading(true);
    await GoogoleLogin(credentialResponse)
      .then(async (res) => {
        await localStorage.setItem("@storage_Key", res?.decodedToken);
        navigate("/dashboard");
        notifySuccess("User logged in");
        setIsLoading(false);
      })
      .catch((err) => {
        notifyError(err?.message || "Server Error!");
      });
  };

  return (
    <>
      {isLoading ? <Spinner /> : ""}
      <SocialLogin
        title="Sign in with Google"
        color={"#D0463B"}
        onClick={login}
        img={Google}
      />

      <SocialLogin
        title="Sign in with LinkedIn"
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
    </>
  );
};
export default AllSocial;
