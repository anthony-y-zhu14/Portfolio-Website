import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import { Container, Grid, Paper } from '@material-ui/core';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded'
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import profilePic from '../asset/profile.jpg'
import Avatar from '@material-ui/core/Avatar';

  const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '40%', 
    borderRadius: '30px',
    textAlign: 'center',
    border: "1px solid rgb(255, 255, 255)"
  },
  }));

  export default function FrontPage(action) {
  const classes = useStyles();
    return(   
      <Zoom in={true}>          
        <Container>
          
          <Paper className={classes.content}>          
          <Grid container spacing={3}>
            <Grid item xs={12}><Typography variant='h3'>Welcome</Typography></Grid>                        
            <Grid item xs={12}>
              <Typography variant='h5'> I'm Anthony Y. Zhu, nice to meet you.</Typography> 
              <Avatar alt='Anthony' src={profilePic} />
              <Typography variant='h5'>Please take a look around!</Typography>
            </Grid>   
            <Grid item xs={12}>
              <Fab variant='extended' color='primary' onClick={action.render.renderBio}><NavigateNextRoundedIcon />Check out my stories</Fab>
            </Grid>                    
          </Grid>   
          </Paper>              
        </Container>  
      </Zoom>            
    );
}