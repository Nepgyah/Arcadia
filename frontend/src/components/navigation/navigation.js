import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';

function Navigation() {
    const drawerWidth = 240;

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
            <IconButton>
                <AccountCircleIcon />
            </IconButton>
        </Toolbar>
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
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/anime">
                    <ListItemText primary="Anime Home" />
                </ListItem>
            </List>
        </Box>
      </Drawer>
      </>
    )
}


export default Navigation;