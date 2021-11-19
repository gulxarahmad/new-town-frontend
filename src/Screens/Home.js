import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import Axios from 'axios';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {MainListItems} from '../Headers.js/listItems';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {apiURL} from '../APIs/config';
import {Card, Carousel} from 'react-bootstrap'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://agitated-mahavira-b37e00.netlify.app/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
 const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [bookings, setBookings] = useState([])
  useEffect(()=>{
    const userInfo = localStorage.getItem("userInfo")
    if(!userInfo){
        history.push('/login');
    }
},[history])

  useEffect(()=>{
      Axios.get(`${apiURL}/readbookings`).then(
          (res)=>{
              setBookings(res.data)
          }
      )
      console.log(bookings)
  },[])

  return (
    
    <div className={classes.root}>
      
      
      <CssBaseline />
      
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
       
         
        <Toolbar className={classes.toolbar}>
           
          
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit" onClick={
            ()=>{
              localStorage.removeItem("userInfo");
         history.push('/login');
            }
          }>
             Logout <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        
        <div className={classes.toolbarIcon}>
         {/* // <img src={"http://localhost:3009/image/Screenshot 2020-11-02 at 01.43.06.png"} style={{width:100, height:100}}/>  */}
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
          
        </div>
        <Divider />
        <List>{MainListItems}</List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                 <div style={{display:"flex", flexDirection:'row'}}>
                 <Card border="primary" style={{ width: '10rem', height:'8rem' }}>
  
                    <Card.Body>
                      <Card.Title>Total Plots</Card.Title>
                      <Card.Text>
                        128
                      </Card.Text>
                    </Card.Body>
                  </Card>
 
                    <div style={{marginLeft:50}}>
                    <Card border="primary" style={{ width: '11rem', height:'8rem' }}>
                      
                      <Card.Body>
                        <Card.Title>Total Bookings</Card.Title>
                        <Card.Text>
                        {bookings.length}
                        </Card.Text>
                      </Card.Body>
                    </Card>                      
                    </div>
                  <div style={{marginLeft:50}}>
                  <Card border="primary" style={{ width: '12rem', height:'8rem' }}>
                      
                      <Card.Body>
                        <Card.Title>Remaining Plots</Card.Title>
                        <Card.Text>
                        {128-bookings.length}
                        </Card.Text>
                      </Card.Body>
                    </Card>                       
                    </div>
 
         </div>
                {/* <Chart /> */}
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Deposits /> */}

                <img src={`${apiURL}/image/logo.png`} style={{width:220, height:200}}/>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src = {`${apiURL}/image/1.jpeg`}
      alt="First slide"
      style={{width:400, heigh:300}}
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
   className="d-block w-100"
   src = {`${apiURL}/image/2.jpeg`}
   alt="First slide"
   style={{width:400, heigh:300}}
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
   className="d-block w-100"
   src = {`${apiURL}/image/3.jpeg`}
   alt="First slide"
   style={{width:400, heigh:300}}
    />
  </Carousel.Item>
</Carousel>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}