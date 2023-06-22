import axios from "axios";
import { toast } from "react-toastify";



export const apiInstance = axios.create({
  baseURL: 'http://38.65.139.14:8081/corporate-citras-v1/',
  headers: {
    Accept: "application/json",
  },
});

// const responseSuccessHandler = (response) => {
//   document.getElementById("overlay").style.display = "none";
//   return response;
// };

// const responseErrorHandler = (error) => {
//   document.getElementById("overlay").style.display = "none";
//   if (!navigator.onLine) {
//     toast.error("Request failed, Please check your network connection!");
//   }

//   return Promise.reject(error);
// };

// apiInstance.interceptors.request.use(
//   function (config) {
//     document.getElementById("overlay").style.display = "block";
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// apiInstance.interceptors.response.use(
//   (response) => responseSuccessHandler(response),
//   (error) => responseErrorHandler(error)
// );

export default apiInstance;
