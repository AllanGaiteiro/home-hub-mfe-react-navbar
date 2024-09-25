import { AccountCircle, Lock, Logout, Settings, SettingsApplications, SpaceDashboardOutlined, Wifi } from "@mui/icons-material";
import { Box, AppBar, Toolbar, IconButton, Typography, Badge, MenuItem, Menu, Divider, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material";
import icon from './assets/Backdrop.png'; // Caminho da imagem
import React, { useState } from "react";
import { ProfileMenu } from "./components/profile-menu.component";
import { IconNotification } from "./components/icon-notification.component";
import { IconAccount } from "./components/icon-account.component";
import { DrawerMenu } from "./components/main-menu.component";

export default function App(props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: '#9C27B0' }} position="static">
        <Toolbar>
          <Button onClick={toggleDrawer(true)}>
            <img src={icon} alt="Ícone" />
          </Button>


          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconAccount setAnchorEl={setAnchorEl} />
            <IconNotification />
          </Box>
        </Toolbar>
      </AppBar>
      <ProfileMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerMenu toggleDrawer={toggleDrawer} />
      </Drawer>
    </Box>
  );
}