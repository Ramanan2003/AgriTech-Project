import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import TemporaryDrawer from './sideBar';

const pages = ['Home', 'About us','Fund Allocation', 'Schemes', 'Login'];
const settings = ['Profile', 'Dashboard', 'Logout'];

const navbarStyles = {
  backgroundColor: '#2c3e50', // Background color for the Navbar
};

const logoStyles = {
  fontFamily: 'cursive', // Font style for the logo
  fontWeight: 700,
  letterSpacing: '.2rem',
  color: '#ecf0f1', // Text color for the logo
  textDecoration: 'none',
};

const buttonStyles = {
  margin: '0 10px',
  padding: '10px 15px',
  borderRadius: '8px',
  color: '#ecf0f1',
  background: '#3498db',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
  '&:hover': {
    background: '#2980b9',
  },
};

const avatarStyles = {
  marginTop: '15px',
};

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={navbarStyles}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TemporaryDrawer />
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{ ...logoStyles, mr: 2 }}
          >
            AGRIWEB
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            ></Menu>
          </Box>

          {pages.map((page) => (
            <Button
              key={page}
              component={Link}
              to={page.toLowerCase() === 'dashboard' ? '/dashboard' : `/${page.toLowerCase()}`}
              onClick={handleCloseNavMenu}
              sx={buttonStyles}
            >
              {page}
            </Button>
          ))}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu} component={Link} to={`/${setting.toLowerCase()}`}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
