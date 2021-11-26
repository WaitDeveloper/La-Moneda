import { Button, CssBaseline, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useStateValue } from '../StateProvider'
import { makeStyles } from '@material-ui/core'
import Navbar from './Navbar'
import { CardContent } from '@material-ui/core'

const useStyles = makeStyles((theme) =>({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Roboto Mono',
      },
    letter:{
        fontFamily: "Roboto Mono",
        color: "rgb(3, 97, 3)",
        textAlign:"start",

    },
    container:{
        textAlign:"center",
        display:"flex",
    },
    title:{
        color: '#fff',
        fontSize: '2rem',
    },
    span:{
      margin:"0.2rem",
    },
    media:{
      width:"400px",
      height:"400px",
    }
}))

const Ifuser = ({classes,gun}) =>{

    return(
        <div className = {classes.root}>
        <Grid container component="main" sx={{heigh: "100px"}} >
          <Grid item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: gun.imageUrl,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "10%",
            backgroundPosition: 'center',
          }}
          >
            <img className={classes.media} src={gun.imageUrl}/>
          </Grid>
          <Grid item xs={12} sm={8} md={5} elevation={6} square>
            <CardContent margin="2px">
            <Typography className={classes.letter}variant="h5" color="#ffff" >
              <span className={classes.title}>{gun.title} </span> <br/><br/>
              {gun.des}
            </Typography> <br/> <br/>
            <Button href={gun.link} variant = "contained" color="#FFFF" target="_blank">
            Compar
            </Button>
            </CardContent>
          </Grid>
        </Grid>
        </div>
    )
}

const Info = () => {
    const classes = useStyles();
    const [{gun,user},dispatch] = useStateValue();
    return (
        <>
        <Navbar/>
        <CssBaseline/>
        {
            user ? <Ifuser gun={gun} classes={classes}/> : 
                <div className={classes.root}>
                <Typography className={classes.letter}variant="h5" color="#ffff" >
                    Inicie sesíon para continuar
                </Typography><span className={classes.span}> </span>
                <Button href="/login" variant="outlined">Login</Button>
            </div>
        }
        </>
    )
}

export default Info
