import { Settings, AccountCircle, Logout } from "@mui/icons-material";
import { Menu, MenuItem, Divider, IconButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export function ProfileMenu({ anchorEl, setAnchorEl }: { anchorEl: HTMLElement, setAnchorEl: Dispatch<SetStateAction<HTMLElement>> }) {
    const isMenuOpen = Boolean(anchorEl);
  
    const menuId = 'account-menu';
  
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    return <Menu sx={{ top: 50, left: 55 }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <div style={{ margin: '10px 0px' }}>
          <h3 style={{ margin: '0px', padding: '0px' }}> Allan Gaiteiro</h3>
          <p style={{ margin: '0px', padding: '0px' }}>allansgaiteiro@gmail</p>
        </div>
      </MenuItem>
      <Divider />
      <MenuItem><IconButton><Settings /></IconButton>Configurações</MenuItem>
      <MenuItem><IconButton><AccountCircle /></IconButton>Perfil</MenuItem>
      <Divider />
  
      <MenuItem onClick={handleMenuClose}><IconButton><Logout /></IconButton> Sair</MenuItem>
    </Menu>;
  }