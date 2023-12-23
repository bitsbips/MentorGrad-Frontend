import { useEffect, useState } from "react";
import { createSubscription } from "../../api";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../Toastifycom";
import Spinner from "../Spinner";

export const ReturnSubscriptionPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  let called = false;
  useEffect(() => {
    if (!called) {
      called = true;
      setIsLoading(true);
      let payload = localStorage.getItem("booking") || "";
      let parsedPayload = JSON.parse(payload);
      createSubscription(parsedPayload).then((res) => {
        console.log(res);
        setIsLoading(false);
        navigate("/dashboard?tab=6");
        notifySuccess("Payment completed successfully!");
        localStorage.setItem("booking", "");
      });
    }
  }, []);

  return <div>{isLoading && <Spinner />}</div>;
};
