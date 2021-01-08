import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom';
import carletonImg from "../img/carleton.png";
import algonquinImg from "../img/algonquin.png";
import MediaCard from '../component/MediaCard'

  const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    display: 'flex',
    padding: theme.spacing(3),
    marginTop: '200px',
    color: "black",  
    background: "rgba(255, 255, 255, 0.3)",
    backdropFilter: 'blur(8px)',  
    textAlign: 'center',
    borderRadius: '30px',
    border: "1px solid rgb(255, 255, 255, 0.2)"
  },
  }));

  const schoolInfo = {
    Carleton: {
        name: "Carleton University",
        img: carletonImg,
        program: "Computer Science",
        degree: "Bacholar of Computer Science"
    },
    Algonquin: {
      name: "Algonquin College",
      img: algonquinImg,
      program: "Civil Engineering",
      degree: "Advanced College Dipolma - Engineering"
  }
} 

  export default function ProjectPage() {
  const classes = useStyles();
    return(
      <Zoom in={true} timeout={1000}>                 
        <main className={classes.content}>
          <MediaCard school={schoolInfo.Carleton}/>
          <MediaCard school={schoolInfo.Algonquin}/>       
        </main> 
      </Zoom>          
    );
}


