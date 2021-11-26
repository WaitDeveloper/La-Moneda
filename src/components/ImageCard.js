import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button} from '@material-ui/core';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../reducer';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth:300,
    maxHeight:600,
    minHeight:300,
    background: 'rgba(0,0,0,0.5)',
    margin: '60px',
    
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  title: {
    fontFamily: 'Roboto Mono',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Roboto Mono',
    fontSize: '1.1rem',
    color: '#ddd',
  },
  Button:{
      backgroundColor:"rgb(3, 97, 3)",
      color:"#ffff",
  },

});

export default function ImageCard({ place}) {
  const classes = useStyles();
  const [{gun},dispatch] = useStateValue();
  const history = useHistory();

  const click = () =>{
      dispatch({
          type: actionTypes.SET_GUN,
          gun: place,
      })
      history.push("/arma");
  }
  return (
    
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl} 
          title="Contemplative Reptile"
        />
        <CardContent gutterBottom>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {place.title}
          </Typography>
          <Button className={classes.Button} variant="contained" onClick={click}>Detalles</Button>
        </CardContent>
      </Card>
  );
}

