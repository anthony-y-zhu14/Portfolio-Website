import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Fab } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '400px',
    margin: '8px auto', 
    background: "rgba(255, 255, 255, 0.5)",
    backdropFilter: 'blur(8px)', 
    borderRadius: '30px',
    border: "1px solid rgb(255, 255, 255, 0.4)"
  },
  media: {
    paddingTop: '56.25%',      
  },
  button: {
    borderRadius: '30px',
    border: "1px solid rgb(255, 255, 255, 0.4)",
    margin: '0% auto',
  }
});

export default function MediaCard(data) {
  const classes = useStyles(); 
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.school.img}
          title={data.school.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {data.school.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {data.school.program}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {data.school.degree}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>        
        <Fab variant='extended' className={classes.button} color="primary">
          Learn More
        </Fab>
      </CardActions>
    </Card>
  );
}