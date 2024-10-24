import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material';

function Navigation() {
    const drawerWidth = 240;

    const [openProfileMenu, setOpenProfileMenu] = useState(false);
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
        <CssBaseline />

      {/* Top bar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <Box display={"flex"} flexGrow={1}>
                <Typography variant="h6" noWrap component="div">
                    Arcadia
                </Typography>
            </Box>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton onClick={handleClick}>
                <AccountCircleIcon />
            </IconButton>
        </Toolbar>
        <ProfileMenu anchorEl={anchorEl} isOpen={open} handleClose={handleClose} />
      </AppBar>

      {/* Side Bar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
            <List>
                <ListItem component={Link} to="/">
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem component={Link} to="/anime">
                    <ListItemText primary="Anime Home" />
                </ListItem>
            </List>
        </Box>
      </Drawer>
      </>
    )
}


export default Navigation;

function ProfileMenu({ anchorEl, isOpen, handleClose}) {

    return (
        <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            onClick={handleClose}
        >
            {/* <MenuItem>
                My Account
            </MenuItem> */}
            <ListItem component={Link} to="/profile">
                <ListItemText primary="My Account" />
            </ListItem>
            <Divider />
            <MenuItem>
                Settings
            </MenuItem>
            <MenuItem>
                Log Out
            </MenuItem>
        </Menu>
    )
}