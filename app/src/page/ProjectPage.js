import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom';
import ProjectCard from '../component/ProjectCard'
import { Grid } from '@material-ui/core';
import ucleiImg from "../img/UCLEI.png"
import shoppiesImg from "../img/Shoppies.png"
import leetcodeImg from "../img/LeetCode_logo.png"

  const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    marginTop: '200px',
    textAlign: 'center',
    },
  }));

  const projects = {
    UCLEI : {
      img : ucleiImg,
      title: "UCLEI",
      intro: "A stock trading simulation website that provides a safe, easy-to-use sandbox environment for users to experience how stock market trading works.",
      tech: "React, JavaScript",
      URL: "https://uclei.herokuapp.com/"
    },
    Shoppies : {
      img : shoppiesImg,
      title: "The Shoppies",
      intro: "A web app that provides help to search movies via OMDB database and add to personal nomination list which can be export as a JSON file.",
      tech: "React, JavaScript",
      URL: "https://anthony-y-zhu14.github.io/The-Shoppies/"
    },
    LeetCode : {
      img : leetcodeImg,
      title: "LeetCode Solutions",
      intro: "A Record of My Problem Solving Journey",
      tech: "Java, C++, C, Python",
      URL: "https://github.com/anthony-y-zhu14/LeetCode"
    },
} 

  export default function ProjectPage() {
  const classes = useStyles();
    return(
      <Zoom in={true} timeout={750}>                 
        <Grid container className={classes.content} spacing={2} justify='center'> 
        {Object.keys(projects).map(project => (
          <Grid item xs={6}>
            <ProjectCard project={projects[project]} />
          </Grid>
        ))}  
        </Grid> 
      </Zoom>          
    );
}


