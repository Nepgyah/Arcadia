'use client';
import Button from '@mui/material/Button'
import axios from 'axios';

export default function MyProfile() {

    const handleLogin = async () => {
        console.log('Logging in')
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              'email': 'admin@d2x.com',
              'password': 'arcadia',
            }),
            credentials: 'include',
        });

        if (response.ok) {
            const userData = await response.json();
        }
    }

    const handleLogout = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/user/logout/", {}, {
              withCredentials: true,  // Ensure cookies are sent with the request
            });
            console.log(response.data);  // Logs the logout success message
          } catch (error) {
            console.error("Error during logout:");
          }
    }

    const handleViewTest = async () => {
        console.log("TEST")
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/user/test/", {
              withCredentials: true, // Ensure cookies are sent with the request
              headers: {
                "Content-Type": "application/json", // Ensure content-type is set
              },
            });
            console.log(response.data);
          } catch (error) {
            console.error("Error fetching data");
          }
    }

    return (
        <div>
            <Button variant="text" color="primary" onClick={() => handleLogin()}>
              Log In
            </Button>
            <Button variant="text" color="primary" onClick={() => handleLogout()}>
              Logout
            </Button>
            <Button variant="text" color="primary" onClick={() => handleViewTest()}>
              View Test
            </Button>
        </div>
    )
}