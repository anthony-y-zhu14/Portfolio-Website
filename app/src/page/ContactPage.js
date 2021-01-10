import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom';
import { Container, Fab, Icon, IconButton, InputAdornment, Snackbar, TextField, Tooltip, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


  const useStyles = makeStyles((theme) => ({
    content_email: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: '200px',
      color: "black",  
      background: "rgba(155, 155, 155, 0.3)",
      backdropFilter: 'blur(8px)',  
      textAlign: 'center',
      borderRadius: '30px',
      border: "1px solid rgb(255, 255, 255, 0.6)",
    },
    content_other: {
      flexGrow: 1,
      padding: theme.spacing(1),
      marginTop: '10px',
      color: "black",  
      background: "rgba(155, 155, 155, 0.3)",
      backdropFilter: 'blur(8px)',  
      textAlign: 'center',
      borderRadius: '30px',
      border: "1px solid rgb(255, 255, 255, 0.6)"
    },
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
    input: {
      borderRadius: '30px',
    }
  }));

  const FacebookUrl = 'https://www.facebook.com/anthony.zhu1114';

  const LinkedInUrl = 'https://www.linkedin.com/in/anthony-y-zhu/';

  const GithubUrl = 'https://github.com/anthony-y-zhu14';

  const InstUrl = 'https://www.instagram.com/anthony.stardust/';

  const openUrl = (url) => window.open(url, "_blank");

  export default function ContactPage() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [alert, setAlert] = React.useState('');
    const [alertMessage, setAlertMessage] = React.useState('');

    const hanleSend = () => {
      // setAlert('success');
      // setAlertMessage(`Message has been sent, Thank you!`);
      // setOpen(true);
      setAlert('info');
      setAlertMessage(`Work in progress`);
      setOpen(true);
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    }

    return(         
      <Zoom in={true} timeout={750}>     
        <Container> 

          <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} autoHideDuration={1000} open={open} onClose={handleClose}>
              <Alert onClose={handleClose} severity={alert}>{alertMessage}</Alert>  
          </Snackbar>         
                  
          <Container className={classes.content_email}>   

            <Typography>Get in Touch</Typography>

            <br/>
            <TextField variant='outlined' label="Name" 
              InputProps={{ classes: {root : classes.input}, startAdornment: (<InputAdornment position='start'><Icon><PersonOutlineIcon /></Icon></InputAdornment>)}}/>

            <br/>
            <br/>
            <TextField variant='outlined' label="Email"
              InputProps={{classes: {root : classes.input},startAdornment: (<InputAdornment position='start'><Icon><MailOutlineIcon /></Icon></InputAdornment>)}}/>

            <br/>
            <br/>          
            <TextField variant='outlined' label="Message" multiline rows={4} fullWidth  
              InputProps={{classes: {root : classes.input}}}       
              inputProps={{style: {textAlign: 'center'}}}/>

            <br/>
            <br/>  
            <Fab color='primary' variant='extended' onClick={hanleSend}>Press Me</Fab>
          </Container>   

          <Container className={classes.content_other}>       
            <Typography>
              You can also find me through 
              <Tooltip title="Facebook" ><IconButton onClick={() => openUrl(FacebookUrl)}><FacebookIcon /></IconButton></Tooltip>
              <Tooltip title="Instagram." ><IconButton onClick={() => openUrl(InstUrl)}><InstagramIcon /></IconButton></Tooltip>
              <Tooltip title="LinkedIn" ><IconButton onClick={() => openUrl(LinkedInUrl)}><LinkedInIcon /></IconButton></Tooltip>
              <Tooltip title="GitHub" ><IconButton onClick={() => openUrl(GithubUrl)}><GitHubIcon /></IconButton></Tooltip>   
            </Typography>       
          </Container>  

        </Container>  
      </Zoom>    
    );
}