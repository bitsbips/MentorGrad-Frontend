import React, { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ErrorText } from "../../pages/AuthFlow/AuthStyles";
import useMediaQuery from "../../hooks/MediaQuery";
import ButtonComp from "../../components/Button";
import PasswordInput from "../../components/PasswordInput";
import { InputHolder } from "../../components/UserForm/UserFormStyles";
import { RightBorderDashboard } from "../../components/StudentDashboard/StudentDashboardStyles";
import {
  ContainerForm,
  LabelProfile,
  TopText,
} from "../../components/StudentProfileDetails/StudentProfileStyles";
import { Grid } from "@mui/material";

const ChangePassword: FC = () => {
  const isMobile = useMediaQuery("(min-width: 950px)");

  const initialValues = {
    oldpassword: "",
    password: "",
    confirmpass: "",
  };
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirmpass: Yup.string()
      .required("Confirm Password is Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),

    oldpassword: Yup.string().min(8).required("Old Password is Required"),
  });
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <>
      <Grid item lg={4}>
          <TopText>Change Password</TopText>
          <ContainerForm>
            <form onSubmit={handleSubmit}>
              <InputHolder>
                <LabelProfile>Old Password</LabelProfile>
                <PasswordInput
                  id={"oldpassword"}
                  value={values.oldpassword}
                  onChange={handleChange}
                  label={"Old Password"}
                  placeholder={"Enter your old Password"}
                  style={{ marginTop: 5 }}
                />
                <ErrorText>{errors.oldpassword}</ErrorText>
              </InputHolder>
              <InputHolder>
                <LabelProfile>New Password</LabelProfile>
                <PasswordInput
                  id={"password"}
                  value={values.password}
                  onChange={handleChange}
                  label={"New Password"}
                  placeholder={"Enter your New Password"}
                  style={{ marginTop: 5 }}
                />
                <ErrorText>{errors.password}</ErrorText>
              </InputHolder>
              <InputHolder>
                <LabelProfile>Confirm Password</LabelProfile>
                <PasswordInput
                  id={"confirmpass"}
                  value={values.confirmpass}
                  onChange={handleChange}
                  label={"Confirm Password"}
                  placeholder={"Confirm Password"}
                  style={{ marginTop: 5 }}
                />
                <ErrorText>{errors.confirmpass}</ErrorText>
              </InputHolder>
            </form>
            <ButtonComp
              style={{ marginTop: "4%", padding: "8px", marginBottom: "5%", float:"right" }}
              fontSize={"12px"}
              width={isMobile ? "20%" : "60%"}
              title="Changes Password"
              onClick={() => handleSubmit()}
            />
          </ContainerForm>
        </Grid>
    </>
  );
};
export default ChangePassword;
