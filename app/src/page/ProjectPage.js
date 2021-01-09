import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom';
import ProjectCard from '../component/ProjectCard'
import { Container } from '@material-ui/core';
import ucleiImg from "../img/UCLEI.png"
import shoppiesImg from "../img/Shoppies.png"
import leetcodeImg from "../img/LeetCode_logo.png"

  const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    marginTop: '200px',
    color: "black",  
    textAlign: 'center',
  },
  }));

  const projects = {
    UCLEI : {
      img : ucleiImg,
      title: "UCLEI",
      intro: "A stock trading simulation website that provides a safe, easy-to-use sandbox environment for users to experience how stock market trading works.",
      tech: "React, JavaScript",
      URL: "https://github.com/anthony-y-zhu14/UCLEI---Stock-Trading-Platform-Sandbox"
    },
    Shoppies : {
      img : shoppiesImg,
      title: "The Shoppies",
      intro: "A web app that provides help to search movies via OMDB database and add to personal nomination list which can be export as a JSON file.",
      tech: "React",
      URL: "https://anthony-y-zhu14.github.io/The-Shoppies/"
    },
    LeetCode : {
      img : leetcodeImg,
      title: "LeetCode Solutions",
      intro: "A Record of My Problem Solving Journey",
      tech: "React",
      URL: "https://github.com/anthony-y-zhu14/LeetCode"
    },

} 

  export default function ProjectPage() {
  const classes = useStyles();
    return(
      <Zoom in={true} timeout={750}>                 
        <Container className={classes.content}> 
        {Object.keys(projects).map(project => (
          <ProjectCard project={projects[project]} />
        ))}  
        </Container> 
      </Zoom>          
    );
}


