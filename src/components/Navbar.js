import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import { AppBar, Toolbar } from '@material-ui/core';
import logo from "../assets/Logo.png";
import login from "../assets/login.png";
import logout from "../assets/logout.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { auth } from "../base/Firebase";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Roboto Mono',
    },
    appbar: {
      background: 'none',
    },
    appbarWrapper: {
      width: '80%',
      margin: '0 auto',
    },
    appbarTitle: {
      flexGrow: '1',
      fontFamily:"Roboto Mono",
    },
    icon: {
      color: '#fff',
      fontSize: '2rem',
    },
    colorText: {
      color: 'rgb(3, 97, 3)',
      fontFamily: 'Roboto Mono',
    },
    container: {
      textAlign: 'center',
    },
    title: {
      color: '#fff',
      fontSize: '4.5rem',
    },
    goDown: {
      color: 'rgb(3, 97, 3)',
      fontSize: '4rem',
    },
    letter:{
      fontSize:"1rem",
    }
  }));

const Navbar = () =>{
    const classes = useStyles();
    const [{user},dispatch] = useStateValue();
    const history = useHistory();
    const click = () =>{
      if(user){
        auth.signOut();
        alert("Ha cerrado sesión")
        dispatch({
          type:actionTypes.SET_USER,
          user: null,
        })
        history.push("/");
      }else{
        history.push("/login");
      }
    }
    return(
        <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
        <Link to="/">
        <img src={logo} height="55px" width="150px"/>
        </Link>
          <h1 className={classes.appbarTitle}>
          </h1>
        <IconButton onClick={click}>
        <h1 className={classes.letter} >
              {user ? user.email : ""}
        </h1>
        {
          user ? <img src={logout} height="45px" width="50px"/> : <img src={login} height="45px" width="50px"/> 
        }
        </IconButton>
        </Toolbar>
      </AppBar>
    );
}

export default Navbar;