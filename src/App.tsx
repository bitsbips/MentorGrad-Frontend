import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./pages/AuthFlow/Register/Register";
import Login from "./pages/AuthFlow/Login/Login";
import ForgetEmail from "./pages/AuthFlow/ForgetPassword/ForgetEmail";
import ForgetPassword from "./pages/AuthFlow/ForgetPassword/ForgetPassword";
import StudentForm from "./pages/StudentForm/StudentForm";
import MentorAppDetails from "./components/MentorForm/MentorAppForm";
import MentorForm from "./pages/MentorForm/MentorForm";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Mentor from "./pages/Mentor/Mentor";
import Response from "./components/UserForm/Response";
import { Context } from "./Context/ContextStates";
import StudentProfile from "./pages/StudentProfile/SudentProfile";
import PaymentPlan from "./pages/PaymentPlan/PaymentPlan";
import PaymentPage from "./pages/Payment/Payment";
import Toast from "./components/Toastifycom";
import { GetAllContries, GetCountryList, GetNationality } from "./api";
import jwt_decode from "jwt-decode";
import StudentDashboardMain from "./pages/StudentDahboard/StudentDahboard.Main";
import AuthGuard from "./pages/AuthFlow/auth-guard";
import { jwtDecode } from "./helper-functions";
import { userTypes } from "./Data/Data";

function App() {
  const navigate = useNavigate();
  const [priceRangeValue, setPriceRangeValue] = useState([0, 1000]);
  const [profilestep, setProfileStep] = useState("0");
  const [countryData, setCountryData] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [nationality, setNationality] = useState([]);

  // Get the user's role from your authentication system or local storage
  const user: String = jwtDecode(
    localStorage.getItem("@storage_Key")
  )?.userType;

  const storedStep = localStorage.getItem("currentStep");
  const initialStep = storedStep !== null ? storedStep : "0";
  // Set the initial state
  const [value, setValue] = useState(initialStep);
  useEffect(() => {
    localStorage.setItem("currentStep", value);
    GetAllContries().then((e) => {
      console.log(e, "Countries");
      setCountryData(e);
    });
    GetCountryList().then((e) => {
      console.log(e, "Countries");
      setCountryList(e);
    });
    GetNationality().then((e) => {
      setNationality(e);
    });
  }, [value]);

  // Define role-based routes
  const studentRoutes = (
    <Routes>
      <Route path="/dashboard" element={<StudentDashboardMain />} />
      <Route path="/studentForm" element={<StudentForm />} />
      <Route path="/studentProfile" element={<StudentProfile />} />
      <Route path="/paymentPlan" element={<PaymentPlan />} />
      <Route path="/paymentPage" element={<PaymentPage />} />
    </Routes>
  );

  const mentorRoutes = (
    <Routes>
      <Route path="/mentor/signup" element={<MentorForm />} />
    </Routes>
  );

  const adminRoutes = <Routes>{/* Add admin-specific routes here */}</Routes>;
  return (
    <div className="App">
      <Context.Provider
        value={{
          priceRangeValue,
          setPriceRangeValue,
          value,
          setValue,
          profilestep,
          setProfileStep,
          countryData,
          setCountryData,
          countryList,
          setCountryList,
          nationality,
          setNationality,
        }}
      >
        <Routes>
          <Route
            path="/*"
            element={
              <AuthGuard>
                {user === userTypes.student && studentRoutes}
                {user === userTypes.mentor && mentorRoutes}
                {user === userTypes.admin && adminRoutes}
              </AuthGuard>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetEmail" element={<ForgetEmail />} />
          <Route path="/reset-Password/:id" element={<ForgetPassword />} />
        </Routes>
      </Context.Provider>
      <Toast />
    </div>
  );
}

export default App;
