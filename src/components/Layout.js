import React, {useState} from "react";
import { deepOrange, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
import { Badge, Drawer, Typography } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import { AppBar,Toolbar } from "@material-ui/core";
import {format} from 'date-fns'
import { Avatar } from "@material-ui/core";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  page: {
    background: "#f9f9f9",
    width: "100%",
    padding: theme.spacing(3)
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active:{
      background:deepOrange[200]
  },
  title:{
      padding: theme.spacing(3),
  },
  appbar: {
      width: `calc(100% - ${drawerWidth}px)`
  },
  toolbar: theme.mixins.toolbar,
  date: {
      flexGrow:1,
  }
}));

const Layout = ({ children, notes}) => {
    
  const classes = useStyles();
  const history = useHistory()
  const location = useLocation()
  
  const menuItems = [
    {
      text: "My Notes",
      icon: <Badge badgeContent={notes.length} color="secondary"> <SubjectOutlined color="secondary" /></Badge>,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div className={classes.root}>
      {/* app bar */}
        <AppBar className={classes.appbar} >
            <Toolbar>
                <Typography className={classes.date} >
                { format(new Date(), 'dd-MM-yyyy') }
                </Typography>
                <Avatar src="/me.png" />
            </Toolbar>
        </AppBar>
      {/* side bar */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title} >My Notes</Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem 
            key={item.text} 
            button 
            onClick={() => history.push(item.path)} 
            className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          
        </List>
      </Drawer>
      <div className={classes.page}>
          <div className={classes.toolbar} ></div>
          {children}
          </div>
    </div>
  );
};

export default Layout;
