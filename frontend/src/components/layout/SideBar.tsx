import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <Drawer variant="permanent" anchor="left">
            <List>
                <ListItem button component={Link} to="/dashboard">
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/users">
                    <ListItemText primary="Users" />
                </ListItem>
                <ListItem button component={Link} to="/login">
                    <ListItemText primary="Login" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideBar;