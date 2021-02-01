import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom';
import { Button, ButtonGroup, Container, Grid, Icon, IconButton, InputAdornment, Paper, Snackbar, TextField, Tooltip, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import VirtualMeetingLottie from '../component/Lottie_VirtualMeeting';


  const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: '200px',
      textAlign: 'center',
      borderRadius: '30px',
      border: "1px solid rgb(255, 255, 255, 0.6)",
    },
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
    input: {
      borderRadius: '15px',
    },
    options: {
      margin: '2% auto'
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
    const [renderMessageUI, setRenderMessage] = React.useState(false);
    const [renderSocialMedia, setRenderSocial] = React.useState(false);

    const [message, setMessage] = React.useState(undefined);
    const [name, setName] = React.useState(undefined);
    const [email, setEmail] = React.useState(undefined);

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

    const renderMessage = () => {
      setRenderMessage(true);
      setRenderSocial(false);
    }

    const renderSocial = () => {
      setRenderMessage(false);
      setRenderSocial(true);
    }    

    return(         
      <Zoom in={true}>     
        <Container> 

          <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} autoHideDuration={1000} open={open} onClose={handleClose}>
              <Alert onClose={handleClose} severity={alert}>{alertMessage}</Alert>  
          </Snackbar>         
               
          <Paper className={classes.content}>   
            
            <ButtonGroup variant='contained' className={classes.options}>
              <Button color={renderMessageUI? "primary" : "secondary"} onClick={renderMessage}>Send me an email</Button>
              <Button color={renderSocialMedia? "primary" : "secondary"} onClick={renderSocial}>Find me on Social Media</Button>
            </ButtonGroup>

            <VirtualMeetingLottie/>
            
            {renderMessageUI && (
              <React.Fragment>
                <Zoom in={true}>
                <Grid Container spacing={1}>
                  <Grid item xs={12}>
                    <TextField variant='outlined' label="Name" value={name} onChange={(e)=>setName(e.target.value)} InputProps={{ classes: {root : classes.input}, startAdornment: (<InputAdornment position='start'><Icon><PersonOutlineIcon /></Icon></InputAdornment>)}}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField variant='outlined' label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} InputProps={{classes: {root : classes.input},startAdornment: (<InputAdornment position='start'><Icon><MailOutlineIcon /></Icon></InputAdornment>)}}/> 
                  </Grid>
                  <Grid item xs={12}>
                    <TextField variant='outlined' label="Message" value={message} onChange={(e)=>setMessage(e.target.value)} multiline rows={4} fullWidth InputProps={{classes: {root : classes.input}}} inputProps={{style: {textAlign: 'center'}}}/>  
                  </Grid>                  
                  <Grid item xs={12}>
                    <br/>
                    <Button color='primary' disabled={ !message || !name || !email } variant='contained' onClick={hanleSend}>Send</Button>  
                  </Grid>
                </Grid> 
                </Zoom>                       
              </React.Fragment>
            )}

            {renderSocialMedia && (
              <Zoom in={true}>
              <Typography>
                You can also find me through 
                <Tooltip title="Facebook" ><IconButton onClick={() => openUrl(FacebookUrl)}><FacebookIcon /></IconButton></Tooltip>
                <Tooltip title="Instagram." ><IconButton onClick={() => openUrl(InstUrl)}><InstagramIcon /></IconButton></Tooltip>
                <Tooltip title="LinkedIn" ><IconButton onClick={() => openUrl(LinkedInUrl)}><LinkedInIcon /></IconButton></Tooltip>
                <Tooltip title="GitHub" ><IconButton onClick={() => openUrl(GithubUrl)}><GitHubIcon /></IconButton></Tooltip>   
              </Typography>  
              </Zoom>  
            )}            
          </Paper>   
        </Container>  
      </Zoom>    
    );
}