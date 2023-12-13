import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
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
import Toast, { notifyError, notifySuccess } from "./components/Toastifycom";
import {
  GetAllContries,
  GetCountryList,
  GetNationality,
  IMGURL,
  addBooking,
} from "./api";
import jwt_decode from "jwt-decode";
import StudentDashboardMain from "./pages/StudentDahboard/StudentDahboard.Main";
import AuthGuard from "./pages/AuthFlow/auth-guard";
import { getErrorMsg, jwtDecode } from "./helper-functions";
import { userTypes } from "./Data/Data";
import MentorReviews from "./pages/Mentor/MentorReviews";
import MentorDashboardMain from "./pages/MentorDahboard/MentorDahboard.Main";
import MentorProfile from "./pages/MentorProfile/MentorProfile";
import Main from "./pages/MentorChat/Main";
import MessagesConfig from "./MessagesConfig";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import { StateProvider, useStateContext } from "./Context/state";
import {
  useLazyQuery,
  useSubscription,
  useMutation,
  useQuery,
} from "@apollo/client";
import {
  NEW_MESSAGE_NOTIFICATION,
  USER_ONLINE_STATUS_CHANGE,
  NEW_MESSAGE,
} from "./graphql/subscriptions";
import {
  GET_PRIVATE_MSGS,
  GET_ALL_USERS,
  GET_GROUP_MSGS,
  GET_GLOBAL_GROUP,
  GET_GROUPS,
  GET_GLOBAL_MSGS,
} from "./graphql/queries";
import { useMediaQuery } from "@mui/material";
import ValidateLinkedIn from "./pages/AuthFlow/Login/ValidateLinked";
import MentorSearch from "./components/Student-Dashboard/MentorSearch/Index";
import MentorAppointmentBooking from "./components/Student-Dashboard/Mentor_Booking/MentorAppBook";
import { Return } from "./pages/Payment/Return";
import { CheckoutForm } from "./pages/Payment/Checkout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminThemeCustomization from "./pages/Admin/themes";
import RTLLayout from "./pages/Admin/ui-component/RTLLayout";
import MainLayout from "./pages/Admin/layout/MainLayout";
import { Provider } from "react-redux";
import { store } from "./pages/Admin/store";
import { JWTProvider } from "./pages/Admin/contexts/JWTContext";
import { IntlProvider } from "react-intl";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#5F61BE",
      light: "#5F61BE",
      dark: "#5F61BE",
    },
  },
});

function App() {
  const navigate = useNavigate();
  const [priceRangeValue, setPriceRangeValue] = useState([0, 1000]);
  const [profilestep, setProfileStep] = useState("0");
  const [countryData, setCountryData] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [nationality, setNationality] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Get the user's role from your authentication system or local storage
  const user: string = jwtDecode(
    localStorage.getItem("@storage_Key")
  )?.userType;

  const token = localStorage.getItem("@storage_Key");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const storedStep = localStorage.getItem("currentStep");
  const initialStep = storedStep !== null ? storedStep : "0";

  // Set the initial state
  const [value, setValue] = useState(initialStep);

  const { selectedChat } = useStateContext();

  useEffect(() => {
    localStorage.setItem("currentStep", value);
    GetAllContries().then((e) => {
      setCountryData(e);
    });
    GetCountryList().then((e) => {
      setCountryList(e);
    });
    GetNationality().then((e) => {
      setNationality(e);
    });
  }, [value]);

  const { error: subscriptionError } = useSubscription(NEW_MESSAGE, {
    onSubscriptionData: ({ client, subscriptionData }) => {
      try {
        console.log("NEW_MESSAGE");
        if (selectedChat == null && isMobile) {
          const newMessage = subscriptionData.data.newMessage;
          let getMsgQuery: any, // Replace 'any' with actual types
            getMsgVariables: any, // Replace 'any' with actual types
            getMsgQueryName: string | null = null, // Replace 'string' with actual types
            getLastMsgQuery: any, // Replace 'any' with actual types
            getLastMsgQueryName: string | null = null, // Replace 'string' with actual types
            lastMsgTargetId: string | null = null; // Replace 'string' with actual types

          if (newMessage.type === "private") {
            const otherUserId = newMessage.participants.find(
              (p: string) => p !== user
            );

            getMsgQuery = GET_PRIVATE_MSGS;
            getMsgVariables = { userId: otherUserId };
            getMsgQueryName = "getPrivateMessages";
            getLastMsgQuery = GET_ALL_USERS;
            getLastMsgQueryName = "getAllUsers";
            lastMsgTargetId = otherUserId;
          } else if (newMessage.type === "group") {
            const groupConversationId = newMessage.message.conversationId;

            getMsgQuery = GET_GROUP_MSGS;
            getMsgVariables = { conversationId: groupConversationId };
            getMsgQueryName = "getGroupMessages";
            getLastMsgQuery = GET_GROUPS;
            getLastMsgQueryName = "getGroups";
            lastMsgTargetId = groupConversationId;
          } else if (newMessage.type === "public") {
            getMsgQuery = GET_GLOBAL_MSGS;
            getMsgVariables = null;
            getMsgQueryName = "getGlobalMessages";
            getLastMsgQuery = GET_GLOBAL_GROUP;
            getLastMsgQueryName = "getGlobalGroup";
          }

          const conversationCache = client.readQuery({
            query: getMsgQuery,
            variables: getMsgVariables,
          });

          if (conversationCache) {
            const updatedConvoCache = [
              ...(conversationCache[getMsgQueryName || ""] || []), // Provide an empty string as a default value for the key
              newMessage.message,
            ];

            const dataToUpdate = {
              [getMsgQueryName || ""]: updatedConvoCache,
            };

            if (getMsgQueryName) {
              dataToUpdate[getMsgQueryName] = updatedConvoCache;
            }

            client.writeQuery({
              query: getMsgQuery,
              variables: getMsgVariables,
              data: dataToUpdate,
            });
          }

          const lastMsgCache = client.readQuery({
            query: getLastMsgQuery,
          });

          if (lastMsgCache) {
            let updatedLastMsgCache: Record<string, any> = {};

            if (newMessage.type === "public") {
              updatedLastMsgCache = {
                ...(lastMsgCache[getLastMsgQueryName || ""] || {}),
                latestMessage: newMessage.message,
              };
            } else {
              updatedLastMsgCache = (
                lastMsgCache[getLastMsgQueryName || ""] || []
              ).map((l: any) =>
                l.id === lastMsgTargetId
                  ? { ...l, latestMessage: newMessage.message }
                  : l
              );
            }

            const dataToUpdate: Record<string, any> = {
              [getLastMsgQueryName || ""]: updatedLastMsgCache,
            };

            if (getLastMsgQueryName) {
              dataToUpdate[getLastMsgQueryName] = updatedLastMsgCache;
            }

            client.writeQuery({
              query: getLastMsgQuery,
              data: dataToUpdate,
            });
          }
        }
      } catch (err) {
        // Handle the error here
        if (err) {
          notifyError(getErrorMsg(err));
        }
      }
    },
  });

  // Define role-based routes
  const studentRoutes = (
    <Routes>
      <Route path="/dashboard" element={<StudentDashboardMain />} />
      <Route path="/studentForm" element={<StudentForm />} />
      <Route path="/profile" element={<StudentProfile />} />
      <Route path="/paymentPlan" element={<PaymentPlan />} />
      <Route path="/paymentPage" element={<PaymentPage />} />
      <Route path="/findMentor" element={<MentorSearch />} />
      <Route path="/bookAppointment" element={<MentorAppointmentBooking />} />
      <Route path="/checkout" element={<CheckoutForm />} />
      <Route path="/return" element={<Return />} />
    </Routes>
  );

  const mentorRoutes = (
    <Routes>
      <Route path="/dashboard" element={<MentorDashboardMain />} />
      <Route path="/profile" element={<MentorProfile />} />
      <Route path="/messages" element={<Main />} />
    </Routes>
  );

  const adminRoutes = <Routes>{/* Add admin-specific routes here */}</Routes>;
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mentor" element={<Mentor />} />
            <Route path="/mentor/signup" element={<MentorForm />} />
            <Route path="/validate-user" element={<ValidateLinkedIn />} />
          </Routes>
        </Context.Provider>
        <Toast />
        {/* {token ? <MessagesConfig /> : ""} */}
      </ThemeProvider>
      <Routes>
        <Route
          path="/admin"
          element={
            <Provider store={store}>
              <JWTProvider>
                <IntlProvider locale="en" defaultLocale="en">
                  <AdminThemeCustomization>
                    <RTLLayout>
                      <MainLayout>
                        <AdminDashboard />
                      </MainLayout>
                    </RTLLayout>
                  </AdminThemeCustomization>
                </IntlProvider>
              </JWTProvider>
            </Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
