import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom';
import { Container, IconButton, Tooltip, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


  const useStyles = makeStyles((theme) => ({
    content_email: {
      flexGrow: 1,
      padding: theme.spacing(1),
      marginTop: '200px',
      color: "black",  
      background: "rgba(255, 255, 255, 0.3)",
      backdropFilter: 'blur(8px)',  
      textAlign: 'center',
      borderRadius: '30px',
      border: "1px solid rgb(255, 255, 255, 0.2)"
    },
    content_other: {
      flexGrow: 1,
      padding: theme.spacing(1),
      marginTop: '10px',
      color: "black",  
      background: "rgba(255, 255, 255, 0.3)",
      backdropFilter: 'blur(8px)',  
      textAlign: 'center',
      borderRadius: '30px',
      border: "1px solid rgb(255, 255, 255, 0.2)"
    },
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  const FacebookUrl = 'https://www.facebook.com/anthony.zhu1114';

  const LinkedInUrl = 'https://www.linkedin.com/in/anthony-y-zhu/';

  const GithubUrl = 'https://github.com/anthony-y-zhu14';

  const openUrl = (url) => window.open(url, "_blank");



  export default function ContactPage() {
  const classes = useStyles();
    return(         
      <Zoom in={true} timeout={750}>     
        <Container>        
                  
          <Container className={classes.content_email}>
            <IconButton><EmailIcon /></IconButton>         
          </Container>   

          <Container className={classes.content_other}>       
            <Typography>You can also contact me through </Typography>
            <Tooltip title="Facebook" ><IconButton onClick={() => openUrl(FacebookUrl)}><FacebookIcon /></IconButton></Tooltip>
            <Tooltip title="LinkedIn" ><IconButton onClick={() => openUrl(LinkedInUrl)}><LinkedInIcon /></IconButton></Tooltip>
            <Tooltip title="GitHub" ><IconButton onClick={() => openUrl(GithubUrl)}><GitHubIcon /></IconButton></Tooltip>          
          </Container>  

        </Container>  
      </Zoom>    
    );
}