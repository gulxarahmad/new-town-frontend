import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Loading from "../Components/Loader";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { MainListItems } from "../Headers.js/listItems";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ListIcon from "@material-ui/icons/List";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { apiURL } from "../APIs/config";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function ShowBookings() {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const history = useHistory();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      history.push("/login");
    }
  });
  const display = () => {
    Axios.get(`${apiURL}/readbookings`).then((res) => {
      setListData(res.data);
      setLoading(false);
    });
  };
  const deleteBooking = (id) => {
    Axios.delete(`${apiURL}/deletebooking/${id}`, () => display());
  };

  useEffect(() => {
    display();
  }, [listData]);

  if (loading) {
    return <Loading />;
  } else {
    if (listData == []) {
      return <h1>Nothing Found</h1>;
    } else {
      return (
        <>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="absolute"
              className={clsx(classes.appBar, open && classes.appBarShift)}
            >
              <Toolbar className={classes.toolbar}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  className={clsx(
                    classes.menuButton,
                    open && classes.menuButtonHidden
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  All Booking
                </Typography>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    localStorage.removeItem("userInfo");
                    history.push("/login");
                  }}
                >
                  Logout <ExitToAppIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: clsx(
                  classes.drawerPaper,
                  !open && classes.drawerPaperClose
                ),
              }}
              open={open}
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>{MainListItems}</List>
            </Drawer>
            <main className={classes.content}>
              {listData.map((val, key) => {
                return (
                  <div
                    className="card mb-6"
                    style={{ maxWidth: 600 }}
                    style={{ marginLeft: 20, margin: 80 }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={val.image}
                          class="img-fluid rounded-start"
                          style={{ width: 200, height: 200 }}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            <strong>Client Name:</strong>
                            {val.clientName}
                          </h5>
                          <p className="card-text">
                            <strong>Registration No:</strong>
                            {val.registrationNumber}
                          </p>
                          <p className="card-text">
                            <strong>Plot No:</strong>
                            {val.plotNo} &nbsp;&nbsp;&nbsp;
                            <strong>Plot Type:</strong>
                            {val.type}{" "}
                          </p>
                          <p className="card-text">
                            <strong>Plot Size:</strong>
                            {val.plotSize}&nbsp;&nbsp;&nbsp;
                            <strong>Phase:</strong>
                            {val.phase}{" "}
                          </p>
                          <p className="card-text">
                            <strong>CNIC:</strong>
                            {val.clientCNIC}
                          </p>

                          <Link to={`/booking-preview/${val._id}`}>
                            {" "}
                            <button
                              type="button"
                              class="btn btn-success"
                              style={{ marginRight: 10 }}
                            >
                              <VisibilityIcon />
                              Booking Preview
                            </button>{" "}
                          </Link>

                          <Link to={`/installments/${val._id}`}>
                            {" "}
                            <button
                              type="button"
                              class="btn btn-success"
                              style={{ marginRight: 10 }}
                            >
                              <ListIcon />
                              Installments
                            </button>{" "}
                          </Link>
                          <Link to={`/agreement-preview/${val._id}`}>
                            {" "}
                            <button
                              type="button"
                              class="btn btn-success"
                              style={{ marginRight: 10 }}
                            >
                              <AssignmentTurnedInIcon />
                              Agreement Payment Preview
                            </button>{" "}
                          </Link>
                          <Link to={`/installments-schedule/${val._id}`}>
                            {" "}
                            <button
                              type="button"
                              class="btn btn-success"
                              style={{ marginRight: 10 }}
                            >
                              <ScheduleIcon />
                              Installment Schedule
                            </button>{" "}
                          </Link>
                          <Link to={`/update-booking/${val._id}`}>
                            {" "}
                            <button
                              type="button"
                              class="btn btn-primary"
                              style={{ marginRight: 10 }}
                            >
                              <EditIcon />
                              Edit
                            </button>{" "}
                          </Link>
                          <button
                            type="button"
                            class="btn btn-danger"
                            style={{ marginRight: 10 }}
                            onClick={() => deleteBooking(val._id)}
                          >
                            <DeleteIcon />
                            Delete
                          </button>
                          {/* <button type="button" class="btn btn-danger" onClick={()=>deleteBooking(val._id)}>Delete</button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </main>
          </div>
        </>
      );
    }
  }
}
