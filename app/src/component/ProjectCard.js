import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Zoom } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '0% auto',  
    borderRadius: '15px',
    border: "1px solid rgb(255, 255, 255)"
  },
  card: {
    maxWidth: '400px',
    maxHeight: '400px',
  },
  media: {
    paddingTop: '56.25%',      
  }
});

export default function ProjectCard(data) {
  const classes = useStyles(); 
  return (
    <Zoom in={true}>
    <Card className={classes.root}>
      <CardActionArea className={classes.root} onClick={() => window.open(data.project.URL, "_blank")} >
        <CardMedia className={classes.media} image={data.project.img} title={data.project.title}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{data.project.title}</Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'left'}}>{data.project.intro}</Typography>
          <Typography variant="body1" color="primary" component="p">{data.project.tech}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Zoom>
  );
}