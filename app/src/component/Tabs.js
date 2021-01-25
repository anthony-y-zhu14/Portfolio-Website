import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import ContactMailIcon from '@material-ui/icons/ContactMail';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
      color: 'black',
      fontWeight: 'bold',
      borderRadius: '25px'
  }
}));

export default function TabsWrappedLabel(action) {
  const classes = useStyles();
  const [value, setValue] = React.useState('two');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>     

      <Tabs className={classes.tabs} value={value} onChange={handleChange} centered indicatorColor="primary"  variant="fullWidth">      
        <Tab value="one" icon={<InsertDriveFileRoundedIcon />}label='My Project' {...a11yProps('one')} 
            onClick={()=>{              
                action.render.renderProject()
            }}
        />
        <Tab value="two"  label='About Me' {...a11yProps('two')} 
            onClick={()=>{              
                action.render.renderBio()
            }}  
        />
        <Tab value="three" icon={<ContactMailIcon />} label='Contact Me' {...a11yProps('three')} 
            onClick={()=>{              
                action.render.renderContact()
            }}
        />
      </Tabs>
    </div>
    
    
  );
}