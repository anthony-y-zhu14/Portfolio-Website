import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom';
import { Container, Paper, Typography } from '@material-ui/core';
import BrainStormingLottie from '../component/Lottie_BrainStorming';

  const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: '200px',
      borderRadius: '15px',
      border: "1px solid rgb(255, 255, 255)",
      textAlign: 'center'
    },
  }));



  export default function BioPage() {
  const classes = useStyles();
    return(         
      <Zoom in={true}>       
      <Container>
      <Paper className={classes.content}>          
          <Typography variant='h4'> Work in Progress </Typography>     
          <BrainStormingLottie />
      </Paper>  
      </Container>        
      </Zoom>    
    );
}