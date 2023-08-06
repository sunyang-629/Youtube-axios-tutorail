import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://course-api.com/",
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers.Accept = "application/json";
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      console.log("Not Found");
    }
    return Promise.reject(error);
  }
);

export default authFetch;
