import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import moment from "moment";
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
import { apiURL } from "../APIs/config";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

export default function ShowInstallments() {
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

  const [bookingData, setBookingData] = useState([]);
  const [installments, setInstallments] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const display = () => {
    Axios.get(`${apiURL}/readbookings/${id}`).then((res) => {
      setBookingData(res.data);
      setLoading(false);
    });
    Axios.get(`${apiURL}/installments/${bookingData.registrationNumber}`).then(
      (res) => {
        setInstallments(res.data);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    display();
  }, [id, bookingData.registrationNumber, installments]);

  const deleteInstallment = (id) => {
    Axios.delete(`${apiURL}/delete-installment/${id}`, () => display());
  };

  const regnum = bookingData.registrationNumber;
  if (loading) {
    return <Loading />;
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
                {bookingData.clientName}'s Installments
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
            <Container maxWidth="lg" className={classes.container}>
              <div style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}>
                <Link to={`/add-installment/${id}/${regnum}`}>
                  {" "}
                  <button
                    type="button"
                    class="btn btn-success"
                    style={{ marginRight: 10 }}
                  >
                    Add Installment
                  </button>{" "}
                </Link>
                {installments.map((val, index) => {
                  return (
                    <Card
                      style={{
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 20,
                        width: 700,
                      }}
                    >
                      <Card.Header>Sr: {val._id}</Card.Header>
                      <Card.Header>Installment No. {index + 1}</Card.Header>
                      <Card.Body>
                        <Card.Title>Applican Name: {val.clientName}</Card.Title>
                        <Card.Text>
                          Date: {moment(val.currDate).format("L")} <br />
                          Total Plot Price: {val.totalPlotCost} <br />
                          Current Amount: {val.currAmount} <br />
                          Previous Amount: {val.prevAmount} <br />
                          Total Recieve Amount: {val.totalRecAmount} <br />
                          Remaining Balance: {val.remainingBalance} <br />
                          Due Date: {moment(val.dueData).format("L")} <br />
                        </Card.Text>
                        <Link to={`/installment-preview/${val._id}`}>
                          {" "}
                          <Button variant="primary" style={{ marginRight: 20 }}>
                            Preview
                          </Button>
                        </Link>
                        <Button
                          variant="danger"
                          onClick={() => deleteInstallment(val._id)}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </Container>
          </main>
        </div>
      </>
    );
  }
}
