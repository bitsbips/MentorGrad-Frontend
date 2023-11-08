import React, { useEffect, useState } from "react";
import { Container } from "../AuthStyles";
import { useNavigate, useSearchParams } from "react-router-dom";
import useMediaQuery from "../../../hooks/MediaQuery";
import { notifySuccess, notifyError } from "../../../components/Toastifycom";
import Spinner from "../../../components/Spinner";
import axios from "axios";
import { linkedInClientId, linkedInClientSerect } from "../../../api";

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
      
    } catch (error) {
      console.log(error);
    }
  };

  return <Container>{load ? <Spinner /> : ""}</Container>;
};

export default ValidateLinkedIn;
