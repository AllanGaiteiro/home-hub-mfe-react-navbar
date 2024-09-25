import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/DevicesOther';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';

export function DrawerMenu({ toggleDrawer }: { toggleDrawer: (newOpen: boolean) => void }) {
    const menuItems = [
        { text: 'Visão Geral', icon: <HomeIcon />, onClick: () => toggleDrawer(false) },
        { text: 'Dispositivos', icon: <DevicesIcon />, onClick: () => toggleDrawer(false) },
        { text: 'Segurança', icon: <SecurityIcon />, onClick: () => toggleDrawer(false) },
        { text: 'Configurações', icon: <SettingsIcon />, onClick: () => toggleDrawer(false) },
      ]; 

    return (
      <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={item.onClick}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    );
}
