
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import StorageIcon from '@material-ui/icons/Storage';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import {Link, useHistory} from 'react-router-dom';


export const MainListItems = (
  <div>
    
      <a href="/">
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem></a>
    <a href = "/add-booking">
    <ListItem button>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Booking" /> 
    </ListItem> </a>
    
   <a href="/all-bookings"> <ListItem button >
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="All Bookings"/>
    </ListItem></a>
    <a  href="/search-booking">
    <ListItem button>
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <ListItemText primary="Search Bookings" />
    </ListItem> </a>
    <a href="/change-password/">
    <ListItem>
      <ListItemIcon>
        <LockOpenIcon />
      </ListItemIcon>
      <ListItemText primary="Change Password" />
    </ListItem></a>

  </div>
);
