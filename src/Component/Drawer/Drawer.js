import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NoteAdd from '@material-ui/icons/NoteAdd';
import LiveHelp from '@material-ui/icons/LiveHelp';
import { Link } from 'react-router-dom'
import PostAdd from '@material-ui/icons/PostAdd';
import Home from '@material-ui/icons/Home';
import Settings from '@material-ui/icons/Settings'
import ExitToApp from '@material-ui/icons/ExitToApp';
import Pic from '../../Images/pic.jpg'


import Notifications from '@material-ui/icons/Notifications';




const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
      
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    marginLeft: -drawerWidth,
    
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
      
    }),
    marginLeft: 0,
    
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root} >
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{backgroundColor:'#180e42'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          Blood Donation Bank </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >


        <div className={classes.drawerHeader}>
          <img src={Pic} width='50px' height='50px'style={{marginRight:'12px'}} />
          {/* /////////////////// */}
        JS Rajput
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
      


        <Link to='/Home' >

<ListItem button >
    <ListItemIcon>
        <Home />
    </ListItemIcon>
    <ListItemText primary='Home' style={{color:"#180e42"}} />
</ListItem>
</Link>


<Link to='/Mypost'>
<ListItem button>
    <ListItemIcon>
        <NoteAdd />
    </ListItemIcon>
    <ListItemText primary='My Post' style={{color:"#180e42"}} />
</ListItem>
</Link>
<Link to='/Form'>
<ListItem button>
    <ListItemIcon>
        <LiveHelp />
    </ListItemIcon>
    <ListItemText primary='Requests' style={{color:"#180e42"}} />
</ListItem>
</Link>

<Link to='/Post'>

<ListItem button>
    <ListItemIcon>
        <PostAdd />
    </ListItemIcon>
    <ListItemText primary='Post Requriment' style={{color:"#180e42"}} />
</ListItem>
</Link>


<Link to='/Home'>

<ListItem button>
    <ListItemIcon>
        <Notifications />
    </ListItemIcon>
    <ListItemText primary='Notification' style={{color:"#180e42"}} />
</ListItem>
</Link>
<Link to='/Home'>
<ListItem button>
    <ListItemIcon>
        <Settings />
    </ListItemIcon>
    <ListItemText primary='Setting' style={{color:"#180e42"}} />
</ListItem>
</Link>

<Link to='/'>

<ListItem button>
    <ListItemIcon>
        <ExitToApp />
    </ListItemIcon>
    <ListItemText primary='logout' style={{color:"#180e42"}} />
</ListItem>
</Link>



        </List>
        <Divider />
     
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       
      </main>
    </div>
  );
}
