import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

interface SidebarProps {
    role: 'provider' | 'client';
  }

const Sidebar: React.FC<SidebarProps> = ({ role }: SidebarProps) => {
    const drawerWidth = 240;

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap>
                    My App
                </Typography>
            </Toolbar>
            <List>
                <ListItem component="button">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem component="button">
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem component="button">
                    <ListItemIcon>
                        <ContactMailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;