import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button'
import auth from '../auth/auth-helper'
import {Link, useLocation, useNavigate} from 'react-router-dom'


const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let history = location.pathname

  const isActive = (path) => {
    if (history === path)
      return {color: '#ff4081'}
    else
      return {color: '#ffffff'}
  }
 
  return(
    <AppBar position="static">
    <Toolbar>
      <Typography className='pr-32' variant="h6" color="inherit">
        Starr
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive("/")}>
          <HomeIcon/>
        </IconButton>
      </Link>
      <Link to="/users">
        <Button style={isActive("/users")}>Users</Button>
      </Link>
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive("/signup")}>Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive("/signin")}>Sign In
            </Button>
          </Link>
        </span>)
      }
      {
        auth.isAuthenticated() && (<span>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive( "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
          </Link>
          <Button color="inherit" onClick={() => {
              auth.clearJWT(() => navigate('/', { replace: true }))
            }}>Sign out</Button>
        </span>)
      }
    </Toolbar>
  </AppBar>
  )
}

export default Menu
