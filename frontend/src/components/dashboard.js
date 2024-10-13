import React from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

function Dashboard() {

    const logout = async () => {
        try {
            // Await the logout response from Django backend
            await axios.get('http://127.0.0.1:8000/account/logout/', {
                withCredentials: true,  // Ensures cookies like session cookies are sent with the request
            });
            // If successful, redirect to the login page
            console.log('success!')
            window.location.href = 'http://127.0.0.1:8000/account/login/';
        } catch (error) {
            console.error('Logout failed:', error);
            // Optionally handle errors here
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard;