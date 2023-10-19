import React, { useState } from "react";
import LeftImage from "../../../components/LeftImageback";
import TopRight from "../../../components/TopRight";
import {
  CenterContent,
  Container,
  ErrorText,
  ForgetPass,
  HeadingTop,
  Position,
  PositionCol,
} from "../AuthStyles";
import AllSocial from "../../../components/SocialLogins";
import HorizontalLine from "../../../components/HorizontalLine";
import Input from "../../../components/Input";
import PasswordInput from "../../../components/PasswordInput";
import Button from "../../../components/Button";
import BottomTextall from "../../../components/Buttomtext";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../../hooks/MediaQuery";
import { useFormik } from "formik";
import * as Yup from "yup";
import Myuser from "../../../store/AuthStates";
import { observer } from "mobx-react-lite";
import { LoginUser, UserCreate } from "../../../api";
import Toast from "../../../components/Toastifycom";
import { notifySuccess, notifyError } from "../../../components/Toastifycom";
import Loadercom from "../../../components/Loadercom";

const Login = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(min-width: 950px)");
  const [load, setLoad] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
      Myuser.setEmail(values.email);
      Myuser.setPassword(values.password);
      setLoad(true);
      LoginUser(values).then((e) => {
        if (e.status === false) {
          setLoad(false);
          notifyError(e.message);
          if (e.response.status === 401) {
            // Token expired, navigate to the login page
            navigate("/Login");
          }
        } else {
          UserCreate();
          setLoad(false);
          notifySuccess(e.message);
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
      });
    },
  });

  return (
    <Container>
      <Position>
        {isMobile ? <LeftImage height={"auto"} /> : <></>}
        <TopRight
          title="New User?"
          title1="Create an account"
          onClick={() => "/register"}
          to={"/register"}
        />
        <CenterContent>
          <HeadingTop>Sign in to Business</HeadingTop>
          <AllSocial />
          <HorizontalLine title="or" />
          <form onSubmit={handleSubmit}>
            <div style={{ marginTop: 10 }}>
              <Input
                id={"email"}
                width={"100%"}
                label="Email address"
                value={values.email}
                onChange={handleChange}
                placeholder="Johndoe11gmail.com"
                inputmode={"text"}
              />
              <ErrorText>{errors.email}</ErrorText>
              <PasswordInput
                id={"password"}
                value={values.password}
                onChange={handleChange}
                label={"Password"}
                placeholder={"Enter your Password"}
                style={{ marginTop: 5 }}
              />
              <ErrorText>{errors.password}</ErrorText>
            </div>
            <Position>
              <ForgetPass onClick={() => navigate("/forgetEmail")}>
                Forget Password?
              </ForgetPass>

              <Button
                fontSize={"14px"}
                load={load}
                style={{ padding: "2%" }}
                onSubmit={handleSubmit}
                title="Sign in"
                onClick={() => handleSubmit()}
                width={"40%"}
              />
            </Position>
          </form>
          <div style={{ marginTop: "25%" }}>
            <BottomTextall />
          </div>
        </CenterContent>
      </Position>
      <Toast />
    </Container>
  );
};

export default observer(Login);
