import { IconButton, Badge } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';

export function IconNotification(){
    return <IconButton
    size="large"
    // aria-label="show 17 new notifications"
    color="inherit"
  >
    <Badge badgeContent={null} color="error">
      <NotificationsIcon />
    </Badge>
  </IconButton>
  }