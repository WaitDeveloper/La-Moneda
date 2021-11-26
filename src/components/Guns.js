import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import { Collapse, Grid } from '@material-ui/core';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  tittle:{
    fontFamily:"Roboto Mono",
    color:"#FFFF",
    margin:"1rem",
},
}));
export default function Guns() {
  const classes = useStyles();
  const checked = useWindowPosition('Blog');
  return (
      
    <div className={classes.root} id="Guns">
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Box alignItems = "center">
        <Grid container spacing={1} direction="row">
        {
            places.map(gun =>(
                <ImageCard place={gun}/>
            ))
        }
        </Grid>
        </Box>
        </Collapse>
    </div>
  );
}
