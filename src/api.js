import axios from 'axios';
import { Country, userTypes } from './Data/Data';
import { jwtDecode } from './helper-functions';

// const URL = "http://localhost:5001/api/v1/";
// export const IMGURL = "http://localhost:5001/api/v1/";
const URL = 'https://mentorgrad-backend-0908e17a7a7d.herokuapp.com/api/v1/';
export const IMGURL =
  'https://mentorgrad-backend-0908e17a7a7d.herokuapp.com/api/v1/';

// Chat Urls
export const http =
  'https://mentorgrad-backend-0908e17a7a7d.herokuapp.com/api/v1/';
export const ws = 'wss://mentorgrad-backend-0908e17a7a7d.herokuapp.com/graphql';
export const file =
  'https://mentorgrad-backend-0908e17a7a7d.herokuapp.com/api/v1/';

// export const http = "http://localhost:5002/api/v1/";
// export const ws = "ws://localhost:5002/graphql";
// export const file = "http://localhost:5002/api/v1/";

const getData = async () => {
  try {
    const value = await localStorage.getItem('@storage_Key');
    if (value !== null) {
      // value previously stored
      console.log(value);
      return value;
    }
  } catch (e) {
    // error reading value
    console.log(e, 'errpr');
  }
};

export async function LoginUser(value) {
  try {
    const response = await axios.post(URL + 'auth/login', {
      email: value.email,
      password: value.password,
    });
    await localStorage.setItem('@storage_Key', response.data.token);

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
}

export async function RegisterUser(value) {
  try {
    const response = await axios.post(URL + 'auth/register', {
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
    return e.response.data || 'Server Error!';
  }
}

//   ForgetPassword
export async function ForgetEmailNew(value) {
  try {
    const response = await axios.post(URL + 'auth/recover-password', {
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
    const response = await axios.put(URL + 'auth/activate-password-link', {
      userid: id,
      hash: hash + '&&ID=' + id,
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
    const response = await axios.put(URL + 'auth/reset-password', {
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
export async function GoogoleLogin() {
  try {
    const response = await axios.get(URL + 'auth/google', {});
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e.response.data);

    return e.response.data;
  }
}
export async function GetGoogoleUser() {
  try {
    const response = await axios.get(URL + 'auth/login/success');
    console.log(response?.data);
    return response?.data;
  } catch (e) {
    console.log(e?.response?.data);

    return e?.response?.data;
  }
}

// StudentForm
export async function PersonalDetails(json) {
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + 'user/personal-details',
    method: 'POST',
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
  const token = localStorage.getItem('@storage_Key');

  let data = JSON.stringify(json);

  const config = {
    method: 'post',
    url: URL + 'user/passport-details',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
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
  const token = localStorage.getItem('@storage_Key');

  let data = JSON.stringify(json);

  const config = {
    method: 'post',
    url: URL + 'user/program-preference',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
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
  const token = localStorage.getItem('@storage_Key');
  console.log(academic_degrees, ' aass');
  // let data = JSON.stringify({
  //   "academic_degrees": academic_degrees,
  //   "englishtest_results": englishtest_results,
  //   "motivation_letter": motivation_letter,
  //   "references": references,
  //   "awardsandcertificates": awardsandcertificates,
  //   "passport": passport
  // });

  const config = {
    method: 'post',
    url: URL + 'user/upload-documents',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
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
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  let reqOptions = {
    url: URL + 'user/userdata',
    method: 'GET',
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    console.log(response.data, 'response');
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function fetchImagesBLOB(img) {
  console.log(img);
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  let reqOptions = {
    url: IMGURL + img,
    method: 'GET',
    headers: headersList,
    responseType: 'blob',
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
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  let reqOptions = {
    url: URL + 'user/create',
    method: 'GET',
    headers: headersList,
  };

  let response = await axios.request(reqOptions);
  try {
    console.log(response.data, 'response');
    return response.data;
  } catch (e) {
    // saving error
    return e.response.data;
  }
}

export async function uploadprofilepic(json) {
  const token = localStorage.getItem('@storage_Key');

  let data = JSON.stringify(json);

  const config = {
    method: 'put',
    url: URL + 'user/profile',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': '*/*',
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
    url: URL + 'countries',
    method: 'GET',
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
    url: URL + 'nationality',
    method: 'GET',
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
    url: URL + 'allcountries',
    method: 'GET',
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
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + `profile/getProfileById/${id}`,
    method: 'get',
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
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + `profile/updateProfile/${payload?.id}`,
    method: 'put',
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
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + `profile/resetPassword`,
    method: 'put',
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
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + `blog/getAllBlogsOfUser/${id}?type=${type}`,
    method: 'GET',
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
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + `blog/addBlog`,
    method: 'POST',
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
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + `blog/updateBlog`,
    method: 'POST',
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
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + `blog/deleteBlog/${id}`,
    method: 'Delete',
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
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + `blog/getBlogById/${id}`,
    method: 'GET',
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
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + `review/getReciepentReviews`,
    method: 'POST',
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
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + `booking/getAllBooking?type=${type}`,
    method: 'get',
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

export async function changesBookingStatus(payload) {
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + `booking/updateStatus`,
    method: 'put',
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
  const token = localStorage.getItem('@storage_Key');

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + `availability/addMentor`,
    method: 'post',
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
  const token = localStorage.getItem('@storage_Key');
  // Get the user from your authentication system or local storage
  const userId = jwtDecode(localStorage.getItem('@storage_Key'))?.userId;

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + `availability/getDayByName/${userId}/${day}`,
    method: 'GET',
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

export async function getInvioces() {
  const token = localStorage.getItem('@storage_Key');
  // Get the user from your authentication system or local storage
  const userId = jwtDecode(localStorage.getItem('@storage_Key'))?.userId;

  let headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let reqOptions = {
    url: URL + `invoice/getByReceiverId/${userId}`,
    method: 'GET',
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
    const response = await axios.post(URL + 'mentor/add-application', {
      universityname: university.value,
      countryofresidence: selectedCountry,
      currentstudent: student.toLowerCase() == 'yes' ? true : false,
      programenrolledcurrently: programenroll,
      currentlyworking: work.toLowerCase() == 'yes' ? true : false,
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
    const response = await axios.post(URL + 'auth/register', {
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
