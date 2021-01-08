import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom';
import { Container, IconButton, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


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
      border: "1px solid rgb(255, 255, 255, 0.2)"
    },
  }));



  export default function ContactPage() {
  const classes = useStyles();
    return(         
      <Zoom in={true} timeout={2000}>        
        <Container className={classes.content}>
          <Typography>You can contact me through </Typography>
          <IconButton><FacebookIcon color='primary'/></IconButton>
          <IconButton><LinkedInIcon color='secondary'/></IconButton>
          <IconButton><GitHubIcon color='primary'/></IconButton>
          <IconButton><EmailIcon color='secondary'/></IconButton>
        </Container>       
      </Zoom>    
    );
}