import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from './Tabs'
import profilePic from '../img/profile.jpg'
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,    
    marginTop: '10px',
    background: "rgba(200, 200, 200, 0.4)",
    backdropFilter: 'blur(8px)', 
    boxShadow: '0 4px 32px 0 rgba( 50, 50, 50)',
    borderRadius: '15px',
    border: '1px solid rgba( 250, 250, 250, 0.5)',
    padding: '8px',
    textAlign: 'center',
  }
}));

export default function ClippedDrawer(action) {
  const classes = useStyles();  

  return (
    <div className={classes.root}> 
    <Zoom in={true} timeout={500}>
      
      <AppBar variant='elevation' position='fixed' className={classes.appBar}>    
          <div><IconButton onClick={()=>{action.render.renderFront()}}><Avatar sizes='max' alt='Anthony' src={profilePic} /></IconButton></div>       
          <Tabs render={action.render} />
      </AppBar>  

    </Zoom>       
    </div>
  );
}