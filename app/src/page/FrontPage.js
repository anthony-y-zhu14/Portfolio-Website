import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded'
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import profilePic from '../img/profile.jpg'
import Avatar from '@material-ui/core/Avatar';

  const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '20%',
    color: "black",  
    background: "rgba(255, 255, 255, 0.3)",
    backdropFilter: 'blur(8px)',  
    textAlign: 'center',
    borderRadius: '30px',
    border: "1px solid rgb(255, 255, 255, 0.2)"
  },
  }));

  export default function FrontPage(action) {
  const classes = useStyles();
    return(   
      <Zoom in={true} timeout={1000}>          
        <main className={classes.content}>
          <Grid container justify='center' spacing={10}>
            <Grid item><Typography variant='h3'>Welcome</Typography></Grid>
            <Avatar sizes='max' alt='Anthony' src={profilePic} />           

            <Grid item>
            <Typography variant='h5'>
              I'm Anthony Y. Zhu,
              nice to meet you.                                  
            </Typography> 
            <Typography variant='h5'>Please take a look around!</Typography>
            </Grid>
                    
          </Grid>         
          
          <br/>
          <br/>
          <Fab variant='extended' color='primary' onClick={action.render.renderBio}><NavigateNextRoundedIcon />Check out my stories</Fab>
        </main>  
      </Zoom>            
    );
}