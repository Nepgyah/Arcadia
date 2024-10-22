import React from "react";
import axios from "axios";
import { redirect } from "react-router-dom";
import Button from '@mui/material/Button'
import { Box, Drawer, List, ListItemButton, ListItemText } from "@mui/material";

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
        <Box sx={{ display: "flex"}}>
            <Box
                component={"main"}
                sx={{ flexGrow: 1}}
            >
                <h1>Dashboard</h1>
            </Box>
        </Box>
    )
}

function HomeNav({}) {
    return (
        <Drawer variant="permanent" >
            <h1>Home</h1>
            <Box>
                <List>
                    <ListLinkItem name={"Miru"} />
                </List>
            </Box>
        </Drawer>
    )
}

function ListLinkItem({link, name, open}) {
    return (
        <ListItemButton>
            <ListItemText primary={name}>OH</ListItemText>
        </ListItemButton>
    )
}
export default Dashboard;