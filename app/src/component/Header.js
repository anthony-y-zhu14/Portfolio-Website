import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from './Tabs'
import profilePic from '../asset/profile.jpg'
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,    
    boxShadow: '0 2px 32px 0 rgba( 0, 0, 0)',
    borderBottom: '2px solid rgb( 0, 0, 0)',
    placeItems: 'center'   
  }
}));

export default function ClippedDrawer(action) {
  const classes = useStyles();  

  return (  
    <Zoom in={true}>      
      <AppBar variant='elevation' position='fixed' color='primary' className={classes.appBar}>    
          <br></br>
          <div><IconButton onClick={()=>{action.render.renderFront()}}><Avatar alt='Anthony' src={profilePic} /></IconButton></div>  
          <Tabs render={action.render} />
      </AppBar>  

    </Zoom>       
  );
}