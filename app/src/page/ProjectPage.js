import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from '../component/ProjectCard'
import { Container, Grid, Typography } from '@material-ui/core';
import ucleiImg from "../asset/UCLEI.png";
import shoppiesImg from "../asset/Shoppies.png";
import leetcodeImg from "../asset/LeetCode_logo.png";
import quickinImg from "../asset/QuickIn.PNG";

  const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    marginTop: '200px',
    textAlign: 'center', 
    background: 'transparent',
    padding: '"100px'
    },
  }));

  const projects = {
    QuickIn : {
      img : quickinImg,
      title: "QuickIn",
      intro: "A simple check-in app that simplfies the gathering of contact tracing information.",
      tech: "React, Node.js",
      URL: "https://quickin.herokuapp.com"
    },
    UCLEI : {
      img : ucleiImg,
      title: "UCLEI",
      intro: "A stock trading simulation website that provides a safe, easy-to-use sandbox environment for users to experience how stock market trading works.",
      tech: "React, Node.js",
      URL: "https://uclei.herokuapp.com"
    },
    Shoppies : {
      img : shoppiesImg,
      title: "The Shoppies",
      intro: "A web app that provides help to search movies via OMDB database and add to personal nomination list which can be export as a JSON file.",
      tech: "React",
      URL: "https://anthony-y-zhu14.github.io/The-Shoppies"
    },
    LeetCode : {
      img : leetcodeImg,
      title: "LeetCode Solutions",
      intro: "A Record of My Problem Solving Journey",
      tech: "Java, C++, C, Python, JavaScript, Scheme, SQL",
      URL: "https://github.com/anthony-y-zhu14/LeetCode"
    },
} 

  export default function ProjectPage() {
  const classes = useStyles();
    return(
      <Container className={classes.content}>
        <Grid container spacing={8}> 
          <Grid item xs={12}>
            <Typography variant='h5'>Here are some of my project I really enjoyed building</Typography>
          </Grid>
          <Grid item xs={12}>
            <br/>
          </Grid>
          {Object.keys(projects).map(project => (
            <Grid item xs={6}>
              <ProjectCard project={projects[project]} />
            </Grid>
          ))}  
        </Grid> 
      </Container>
    );
}


