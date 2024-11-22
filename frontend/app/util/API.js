import axios from "axios";

// Function to get CSRF token from the cookie
const getCSRFToken = () => {
  const csrfToken = document.cookie.match(/csrftoken=([\w-]+)/);
  return csrfToken ? csrfToken[1] : null; // Return the token if found, otherwise null
};

const API = axios.create({
  withCredentials: true, // Ensures that cookies are sent along with requests
  baseURL: "http://127.0.0.1:8000/api/", // Adjust if needed
});

API.interceptors.request.use((config) => {
  const csrfToken = getCSRFToken();  // Retrieve CSRF token from cookie
  
  if (csrfToken) {
    config.headers["X-CSRFTOKEN"] = csrfToken; // Add CSRF token to the headers
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

API.defaults.xsrfHeaderName = "X-CSRFTOKEN"; // The header name for CSRF token
API.defaults.xsrfCookieName = "csrftoken"; // The cookie name for CSRF token, default in Django

export default API;
