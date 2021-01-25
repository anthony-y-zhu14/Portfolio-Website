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
      background: "rgba(200, 200, 200, 0.5)",
      backdropFilter: 'blur(8px)',  
      textAlign: 'center',
      borderRadius: '30px',
      border: "1px solid rgb(255, 255, 255, 0.4)"
    },
  }));



  export default function BioPage() {
  const classes = useStyles();
    return(         
      <Zoom in={true} timeout={750}>        

        <Container className={classes.content}>
          
          <Typography variant='p'>
          PlaceHolder
          </Typography>
        </Container>       
      </Zoom>    
    );
}