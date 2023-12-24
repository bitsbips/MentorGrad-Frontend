import axios from "axios";
import { Country, userTypes } from "./Data/Data";
import { jwtDecode } from "./helper-functions";

// const URL = "http://localhost:5001/api/v1/";
// export const selfUrl = "http://localhost:3000"
// export const IMGURL = "http://localhost:5001/api/v1/";

const URL = "https://mentorgrad-backend-0908e17a7a7d.herokuapp.com/api/v1/";
export const IMGURL =
  "https://mentorgrad-backend-0908e17a7a7d.herokuapp.com/api/v1/";
export const selfUrl = "https://mentorgrad-frontend-1ada3246f9bc.herokuapp.com";

// Chat Urls
export const http = "https://metorgrad-chat-3006465673ac.herokuapp.com/graphql";
export const ws = "wss://metorgrad-chat-3006465673ac.herokuapp.com/graphql";
export const file = "https://metorgrad-chat-3006465673ac.herokuapp.com/graphql";

// export const http = "http://localhost:5002/api/v1/";
// export const ws = "ws://localhost:5002/graphql";
// export const file = "http://localhost:5002/api/v1/";

export const googleClientId =
  "890042261985-2ph8qs8emfnnu3c3e1c73b74g6kheeve.apps.googleusercontent.com";
export const googleSecretId = "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";
export const linkedInClientId = "77h51igfqoe2qb";
export const linkedInClientSerect = "RMDhr8dVqEqgDd3Z";

const getData = async () => {
  try {
    const value = await localStorage.getItem("@storage_Key");
    if (value !== null) {
      // value previously stored
      console.log(value);
      return value;
    }
  } catch (e) {
    // error reading value
    console.log(e, "errpr");
  }
};

export async function LoginUser(value) {
  try {
    const response = await axios.post(URL + "auth/login", {
      email: value.email,
      password: value.password,
    });

    if (response.data.user.userType !== "Admin") {
      console.log(response.data);
      await localStorage.setItem("@storage_Key", response.data.token);
      return response.data;
    } else {
      return {
        message: "User is not an Admin",
        response: {
          status: 401,
        },
        status: false,
      };
    }
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
}

export async function LoginAdmin(value) {
  try {
    const response = await axios.post(URL + "auth/login", {
      email: value.email,
      password: value.password,
    });

    if (response.data.user.userType === "Admin") {
      console.log(response.data);
      await localStorage.setItem("@storage_Key", response.data.token);
      return response.data;
    } else {
      return {
        message: "Please login with admin credentials",
        response: {
          status: 401,
        },
        status: false,
      };
    }
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
}

export async function RegisterUser(value) {
  try {
    const response = await axios.post(URL + "auth/register", {
      email: value.email,
      password: value.password,
      first_name: value.fname,
      last_name: value.lname,
      userType: userTypes.student,
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    return e.response.data || "Server Error!";
  }
}

//   ForgetPassword
export async function ForgetEmailNew(value) {
  try {
    const response = await axios.post(URL + "auth/recover-password", {
      email: value.email,
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e.response.data);

    return e.response.data;
  }
}

export async function ActivatePassword(hash, id) {
  try {
    const response = await axios.put(URL + "auth/activate-password-link", {
      userid: id,
      hash: hash + "&&ID=" + id,
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e.response.data);

    return e.response.data;
  }
}

export async function ResetPasswordNew(id, value) {
  try {
    const response = await axios.put(URL + "auth/reset-password", {
      _id: id,
      password: value.password,
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e.response.data);

    return e.response.data;
  }
}

// SocialLogin
export async function GoogoleLogin(token) {
  try {
    const response = await axios.post(URL + "auth/googleAuthLogin", {
      token,
    });
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    return e.response.data;
  }
}

export async function LinkedInLogin(token, url) {
  try {
    const response = await axios.post(URL + "auth/linkedinAuthLogin", {
      token,
      url,
    });
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    return e.response.data;
  }
}

export async function GetGoogoleUser() {
  try {
    const response = await axios.get(URL + "auth/login/success");
    console.log(response?.data);
    return response?.data;
  } catch (e) {
    console.log(e?.response?.data);

    return e?.response?.data;
  }
}

// StudentForm
export async function PersonalDetails(json) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + "user/personal-details",
    method: "POST",
    headers: headersList,
    data: json,
  };

  try {
    let response = await axios.request(reqOptions);

    console.log(response.data);

    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

export async function PassportDetailsapi(json) {
  const token = localStorage.getItem("@storage_Key");

  let data = JSON.stringify(json);

  const config = {
    method: "post",
    url: URL + "user/passport-details",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function ProgramPrefernceapi(json) {
  const token = localStorage.getItem("@storage_Key");

  let data = JSON.stringify(json);

  const config = {
    method: "post",
    url: URL + "user/program-preference",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
export async function UploadDocumentsapi(
  academic_degrees,
  englishtest_results,
  motivation_letter,
  references,
  awardsandcertificates,
  passport
) {
  const token = localStorage.getItem("@storage_Key");
  console.log(academic_degrees, " aass");
  // let data = JSON.stringify({
  //   "academic_degrees": academic_degrees,
  //   "englishtest_results": englishtest_results,
  //   "motivation_letter": motivation_letter,
  //   "references": references,
  //   "awardsandcertificates": awardsandcertificates,
  //   "passport": passport
  // });

  const config = {
    method: "post",
    url: URL + "user/upload-documents",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
    data: academic_degrees,
  };
  try {
    const response = await axios.request(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function GetUserData() {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: URL + "user/userdata",
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function fetchImagesBLOB(img) {
  console.log(img);
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: IMGURL + img,
    method: "GET",
    headers: headersList,
    responseType: "blob",
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function UserCreate() {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: URL + "user/create",
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    console.log(response.data, "response");
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function uploadprofilepic(json) {
  const token = localStorage.getItem("@storage_Key");

  let data = JSON.stringify(json);

  const config = {
    method: "put",
    url: URL + "user/profile",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "*/*",
    },
    data: json,
  };
  try {
    const response = await axios.request(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function GetAllContries() {
  let reqOptions = {
    url: URL + "countries",
    method: "GET",
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}
export async function GetNationality() {
  let reqOptions = {
    url: URL + "nationality",
    method: "GET",
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function GetCountryList() {
  let reqOptions = {
    url: URL + "allcountries",
    method: "GET",
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getProfileDetails(id) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `profile/getProfileById/${id}`,
    method: "get",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data[0];
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function updateProfileDetails(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `profile/updateProfile/${payload?.id}`,
    method: "put",
    headers: headersList,
    data: payload,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function updateUserPassword(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `profile/resetPassword`,
    method: "put",
    headers: headersList,
    data: payload,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getBlogs(id, type) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `blog/getAllBlogsOfUser/${id}?type=${type}`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function addBlog(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `blog/addBlog`,
    method: "POST",
    headers: headersList,
    data: payload,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function updateBlog(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `blog/updateBlog`,
    method: "POST",
    headers: headersList,
    data: payload,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function _deleteBlog(id) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `blog/deleteBlog/${id}`,
    method: "Delete",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getBlogsById(id) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `blog/getBlogById/${id}`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data[0];
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getReviews(id) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `review/getReciepentReviews`,
    method: "POST",
    headers: headersList,
    data: {
      recipient: id,
    },
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getBookings(type) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `booking/getAllBooking?type=${type}`,
    method: "get",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getStudentBookings(type) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `booking/getBookingsByStudentId?type=${type}`,
    method: "get",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getBookingsByStudentIdforDashboard(type) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `booking/getBookingsByStudentIdforDashboard?type=${type}`,
    method: "get",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function calculateEmptyFieldsPercentage() {
  const token = localStorage.getItem("@storage_Key");
  const userId = jwtDecode(localStorage.getItem("@storage_Key"))?.userId;

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `user/calculateEmptyFieldsPercentage`,
    method: "get",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

export async function getBookingsById() {
  const token = localStorage.getItem("@storage_Key");
  const id = jwtDecode(localStorage.getItem("@storage_Key"))?.userId;

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: `${URL}/booking/getBookingById/${id}`,
    method: "get",
    headers: headersList,
  };
  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

export async function addBooking(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `booking/addBooking`,
    method: "post",
    headers: headersList,
    data: payload,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function changesBookingStatus(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `booking/updateStatus`,
    method: "put",
    headers: headersList,
    data: payload,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function saveTimeSlot(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `availability/addMentor`,
    method: "post",
    headers: headersList,
    data: payload,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getDayTimeSlot(day) {
  const token = localStorage.getItem("@storage_Key");
  // Get the user from your authentication system or local storage
  const userId = jwtDecode(localStorage.getItem("@storage_Key"))?.userId;

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `availability/getDayByName/${userId}/${day}`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function findMentors(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `auth/gellAllMentor`,
    method: "POST",
    headers: headersList,
    data: payload,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getMentorBySuggession() {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: `${URL}/api/v1/` + `suggession/getMentorBySuggession`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getMentorBySuggessionCountry(country) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `suggession/getMentorBySuggessionCountry/${country}`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getMentorBySuggessionLanguage(language) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `suggession/getMentorBySuggessionLanguage/${language}`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getMentorBySuggessionUniversity(university) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `suggession/getMentorBySuggessionUniversity/${university}`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getMentorForBooking(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `availability/getAvailabilityOfMonth`,
    method: "POST",
    headers: headersList,
    data: payload,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getInvioces() {
  const token = localStorage.getItem("@storage_Key");
  // Get the user from your authentication system or local storage
  const userId = jwtDecode(localStorage.getItem("@storage_Key"))?.userId;

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `invoice/getByReceiverId/${userId}`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getInvoiceById(invoiceId) {
  const token = localStorage.getItem("@storage_Key");
  // Get the user from your authentication system or local storage
  const userId = jwtDecode(localStorage.getItem("@storage_Key"))?.userId;

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `invoice/getInvoiceById/${userId}/${invoiceId}`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getStudentInvoices() {
  const token = localStorage.getItem("@storage_Key");
  // Get the user from your authentication system or local storage
  const userId = jwtDecode(localStorage.getItem("@storage_Key"))?.userId;

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `invoice/getBySenderId/${userId}`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function createSubscription(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `subscription/createSubscription`,
    method: "POST",
    headers: headersList,
    data: payload
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function approvePayment() {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `subscription/approvePayment`,
    method: "put",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function getSubscriptionByUserId() {
  const token = localStorage.getItem("@storage_Key");
  const userId = jwtDecode(localStorage.getItem("@storage_Key"))?.userId;


  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `subscription/getSubscriptionByUserId`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function updateSubscriptionPlan() {
  const token = localStorage.getItem("@storage_Key");
  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `subscription/updateSubscriptionPlan`,
    method: "put",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function adminGetAllUsers(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: URL + `admincrud/getAllUsers`,
    method: "GET",
    headers: headersList,
    params: payload,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

export async function adminGetUsersSearch(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: URL + `admincrud/adminGetUsersSearch`,
    method: "GET",
    headers: headersList,
    params: payload,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

export async function getUserById(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `admincrud/getUserById/${payload}`,
    method: "GET",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

export async function admincreateUser() {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `admincrud/createUser`,
    method: "POST",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

export async function adminEditUser(id, payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `admincrud/editUser/${id}`,
    method: "put",
    headers: headersList,
    data: payload,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

export async function adminDeleteUser(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `admincrud/deleteUser/${payload}`,
    method: "delete",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

export async function adminToggleUserStatus(payload) {
  const token = localStorage.getItem("@storage_Key");

  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  let reqOptions = {
    url: URL + `admincrud/toggleUserStatus/${payload}`,
    method: "put",
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

// MentorForm
export async function MentorForm(
  university,
  selectedCountry,
  student,
  work,
  organization,
  programenroll,
  mentorarea,
  language,
  comment,
  mentorId
) {
  try {
    const response = await axios.post(URL + "mentor/add-application", {
      universityname: university.value,
      countryofresidence: selectedCountry,
      currentstudent: student.toLowerCase() == "yes" ? true : false,
      programenrolledcurrently: programenroll,
      currentlyworking: work.toLowerCase() == "yes" ? true : false,
      organisation: organization.value,
      mentoringarea: mentorarea,
      languages: language,
      comment: comment,
      userId: mentorId,
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e.response.data);

    return e.response.data;
  }
}

export async function RegisterMentor(firstname, lastname, email) {
  try {
    const response = await axios.post(URL + "auth/register", {
      email: email,
      first_name: firstname,
      last_name: lastname,
      mentor: true,
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    return e.response.data;
  }
}
