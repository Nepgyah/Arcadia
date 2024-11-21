import axios from "axios";

const API = axios.create({
    withCredentials: true, // Ensures that cookies are sent along with requests, important for session-based authentication
    baseURL: "/api/", // You can modify this depending on your API URL structure
});
API.defaults.xsrfHeaderName = "X-CSRFTOKEN"; // Header name to send with requests
API.defaults.xsrfCookieName = "csrftoken"; // The cookie containing the CSRF token, by default in Django
export default API;