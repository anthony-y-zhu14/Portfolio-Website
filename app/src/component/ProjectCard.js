import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '400px',
    margin: '2% auto', 
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
    border: "1px solid rgb(255, 255, 255, 0.8)",
    margin: '0% auto',
  }
});

export default function ProjectCard(data) {
  const classes = useStyles(); 
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => window.open(data.project.URL, "_blank")} >
        <CardMedia
          className={classes.media}
          image={data.project.img}
          title={data.project.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {data.project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {data.project.intro}
          </Typography>
          <Typography variant="body1" color="primary" component="p">
          {data.project.tech}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}