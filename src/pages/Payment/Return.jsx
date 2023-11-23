import { useEffect, useState } from "react";
import { addBooking } from "../../api";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../../components/Toastifycom";
import Spinner from "../../components/Spinner";

export const Return = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  let called = false;
  useEffect(() => {
    if (!called) {
      called = true;
      setIsLoading(true);
      let payload = localStorage.getItem("booking") || "";
      let parsedPayload = JSON.parse(payload);
      addBooking(parsedPayload).then((res) => {
        console.log(res);
        setIsLoading(false);
        navigate("/findMentor");
        notifySuccess("Payment completed successfully!");
        localStorage.setItem("booking", "");
      });
    }
  }, []);

  return <div>{isLoading && <Spinner />}</div>;
};
