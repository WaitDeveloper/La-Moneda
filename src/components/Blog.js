import React from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { Link as Scroll } from 'react-scroll';
import { IconButton } from '@material-ui/core';
import Guns from './Guns';
import { Typography } from '@material-ui/core';
import { CssBaseline } from '@mui/material';
import logo from "../assets/Logo.png";

const useStyles = makeStyles((theme)=>({
    appBar: {
        backgroundColor: "#fff"
      },
      hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/Vf6Voxf-q80/1600x900')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
          height: 300,
          fontSize: "3em"
        }
      },
      blogsContainer: {
        paddingTop: theme.spacing(3)
      },
      blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
      },
      card: {
        maxWidth: "100%",
      },
      media: {
        height: 240
      },
      cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
      },
      author: {
        display: "flex"
      },
      paginationContainer: {
        display: "flex",
        justifyContent: "center"
      },
      Button:{
          background:"none",
          color:"rgb(3, 97, 3)",
          height:"100px",
          width:"300px",
          fontSize:"1rem",
          fontFamily: 'Roboto Mono'
      },
      tittle:{
        fontFamily:"Roboto Mono",
        color:"#FFFF",
        margin:"1rem",
    },
}))

const Blog = () => {
    const classes = useStyles();

    return (
        <>
        <div className="App" id="Blog">
      <AppBar className={classes.appBar} position="static">
      </AppBar>
      <Box className={classes.hero}>
        <Scroll to="Guns" smooth={true}>
            <IconButton >
                {/*<Button className={classes.Button} variant="contained" size="large" >Ir a la Tienda</Button>*/}
                <img className={classes.Button} src={logo} /> 
            </IconButton>
        </Scroll>
      </Box> 
    </div>
    <CssBaseline/>
    <Typography variant="h3"className={classes.tittle}>Tienda</Typography>
    <Guns/>
        </>
    )
}

export default Blog
