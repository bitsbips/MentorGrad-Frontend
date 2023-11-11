import React, { useEffect, useState } from "react";
import { Container } from "../AuthStyles";
import { useNavigate, useSearchParams } from "react-router-dom";
import useMediaQuery from "../../../hooks/MediaQuery";
import { notifySuccess, notifyError } from "../../../components/Toastifycom";
import Spinner from "../../../components/Spinner";
import axios from "axios";
import {
  LinkedInLogin,
  selfUrl,
} from "../../../api";

const ValidateLinkedIn = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(min-width: 950px)");
  let [searchParams, setSearchParams] = useSearchParams();
  const [load, setLoad] = useState(true);

  const code: string = searchParams.get("code") as string;

  let called = false;

  useEffect(() => {
    if (code && !called) {
      validateUser();
      called = true;
    }
  }, [code]);

  const validateUser = async () => {
    try {
      await LinkedInLogin(code, `${selfUrl}/validate-user`)
        .then(async (res:any) => {
          if (res?.decodedToken) {
            await localStorage.setItem("@storage_Key", res?.decodedToken);
            window.close();
          } else {
            notifyError("There is some issue. Please contact administration.");
            setTimeout(() => {
              window.close();
            }, 500);
          }
        })
        .catch((err:any) => {
          notifyError(err?.message || "Server Error!");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return <Container>{load ? <Spinner /> : ""}</Container>;
};

export default ValidateLinkedIn;
