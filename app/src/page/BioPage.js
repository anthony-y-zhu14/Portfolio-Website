import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom';
import { Container, Typography } from '@material-ui/core';


  const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: '200px',
      color: "black",  
      background: "rgba(255, 255, 255, 0.3)",
      backdropFilter: 'blur(8px)',  
      textAlign: 'center',
      borderRadius: '30px',
      border: "1px solid rgb(255, 255, 255, 0.4)"
    },
  }));



  export default function BioPage() {
  const classes = useStyles();
    return(         
      <Zoom in={true} timeout={2000}>        
        <Container className={classes.content}>
          <Typography variant='p'>
          After studying and working in Civil
          Engineering field, I have decided to
          pursue a career in Computer Science.
          Prior experience gifted me with
          motivation and professionalism as well
          as the desire to explore the unknown
          and the courage to solve the seemingly
          unsolvable. With my excellent
          technical and communication skills as
          well as the commitment to meticulous
          accuracy. I am always prepared to face
          new challenges
          </Typography>
        </Container>       
      </Zoom>    
    );
}