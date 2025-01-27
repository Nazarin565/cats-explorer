import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid2,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import {
  PetsIconResponse,
  StyledNavBox,
  StyledTitle,
} from '../styles/Header.styles';

const pages = ['Explore', 'Random'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid2 container alignItems={'center'}>
            <PetsIconResponse device="mobile" />
            <StyledTitle variant="h6" noWrap device="mobile">
              Cats Explorer
            </StyledTitle>
          </Grid2>

          <StyledNavBox device="mobile">
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign={'center'}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </StyledNavBox>

          <PetsIconResponse device="desktop" />
          <StyledTitle variant="h5" noWrap device="desktop">
            Cats Explorer
          </StyledTitle>

          <StyledNavBox device="desktop">
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} color="inherit">
                {page}
              </Button>
            ))}
          </StyledNavBox>
          <Box flexGrow={0}>
            <Tooltip title="Open favourites">
              <IconButton color="inherit">
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
