import { AccountCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export function IconAccount({ setAnchorEl }: { setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement>> }) {
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    return <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      // aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  }