import { Link } from 'react-router';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Title from './Title/';
import '../sass/main.scss';
import { Box, useTheme } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar() {
  let loggedIn = localStorage.getItem('isAuthenticated');
  if (loggedIn !== null) {
    loggedIn = JSON.parse(loggedIn);
  }

  const theme = useTheme();
  return (
    <div className='navbarContainer'>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: '5px',
        }}
      >
        <AppBar
          sx={{
            backgroundColor: theme.palette.secondary,
            width: '80vw',
            margin: '0 auto',
            borderRadius: '5px',
          }}
          color='secondary'
          position='static'
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {loggedIn ? (
              <Link to='/signout' className='link'>
                Sign out
              </Link>
            ) : (
              <Link to='/signin' className='link'>
                Sign In
              </Link>
            )}

            <Link to='/' className='link'>
              Homepage
            </Link>
            <Link to='/favorites' className='link'>
              Favorites
            </Link>
            <Link to='/match' className='link'>
              Match
            </Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
