import "../App.css";
import { useHistory, useParams, Link } from "react-router-dom";
import moment from "moment";
import React, { useState, useEffect } from "react";
import clsx from "clsx";

import Axios from "axios";
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
import NumberFormat from "react-number-format";

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

function Input(props) {
  return (
    <label>
      {props.label}
      <br />
      <input {...props} />
    </label>
  );
}

function UpdateBooking() {
  const { id } = useParams();
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
  const [bookingData, setBookingData] = useState([]);
  const [fields, setFields] = useState([]);
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      history.push("/login");
    }
  }, [history]);

  useEffect(() => {
    Axios.get(`${apiURL}/readbookings/${id}`).then((res) => {
      setBookingData(res.data);
    });
  }, [id]);

  const onFieldChange = (event) => {
    const key = event.target.name;
    const value = key === "status" ? event.target.checked : event.target.value;
    setBookingData({ ...bookingData, [key]: value });
    setFields({ ...fields, [key]: value });
  };

  const sendToDB = (event) => {
    event.preventDefault();
    console.log(bookingData);

    if (
      bookingData.plotNo === null ||
      bookingData.street === "" ||
      bookingData.plotSize === "" ||
      bookingData.type === "" ||
      bookingData.clientName === "" ||
      bookingData.fhName === "" ||
      bookingData.residentialAddress === "" ||
      bookingData.permanentAddress === "" ||
      bookingData.contactNumber === null ||
      bookingData.landLine === null ||
      bookingData.email === "" ||
      bookingData.occupation === "" ||
      bookingData.age === null ||
      bookingData.nationality === "" ||
      bookingData.clientCNIC === null ||
      bookingData.nomineeName === "" ||
      bookingData.nomineeRelation === "" ||
      bookingData.nomineeCNIC === null ||
      bookingData.nomineeAddress === "" ||
      bookingData.totalPlotCost === null ||
      bookingData.downPayment === null ||
      bookingData.bankOrDraft === "" ||
      bookingData.date === null ||
      bookingData.drawnOn === null ||
      bookingData.image === "" ||
      bookingData.remarks === ""
    ) {
      alert("Please Fill Entries");
    } else {
      Axios.put(`${apiURL}/update-booking/${id}`, JSON.stringify(fields), {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(alert("Booking has been Updated"))
        .then(history.push(`/booking-preview/${id}`));

      console.log(fields);
    }
  };

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
              Update Booking Form
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
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
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
          <form onSubmit={sendToDB}>
            <fieldset>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Input
                  label={"Plot No:"}
                  name={"plotNo"}
                  onChange={onFieldChange}
                  type={"text"}
                  placeholder={"Plot No"}
                  value={bookingData.plotNo}
                  style={{ marginRight: 60 }}
                />
                <Input
                  label={"Street:"}
                  name={"street"}
                  onChange={onFieldChange}
                  type={"text"}
                  placeholder={"Street"}
                  value={bookingData.street}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <select
                  style={{ width: 200, marginTop: 20, marginRight: 40 }}
                  class="form-select"
                  aria-label="Default select example"
                  onChange={onFieldChange}
                  name={"plotSize"}
                  value={bookingData.plotSize}
                >
                  <option selected>Plot Size</option>
                  <option value="2.5 Marla">2.5 Marla</option>
                  <option value="2.75 Marla">2.75 Marla</option>
                  <option value="3 Marla">3 Marla</option>
                  <option value="4 Marla">4 Marla</option>
                  <option value="5 Marla">5 Marla</option>
                  <option value="6 Marla">6 Marla</option>
                  <option value="7 Marla">7 Marla</option>
                  <option value="8 Marla">8 Marla</option>
                  <option value="9 Marla">9 Marla</option>
                  <option value="10 Marla">10 Marla</option>
                </select>

                {/* <Input label={'Plot Type:'} name={'type'} onChange={changeHandler} type={'text'} placeholder={'Plot Type'}/> */}
                <select
                  style={{ width: 200, marginTop: 20, marginRight: 40 }}
                  class="form-select"
                  aria-label="Default select example"
                  onChange={onFieldChange}
                  name={"type"}
                  value={bookingData.type}
                >
                  <option selected>Plot Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
              >
                <Input
                  label={"Name:"}
                  name={"clientName"}
                  onChange={onFieldChange}
                  type={"text"}
                  value={bookingData.clientName}
                  style={{ marginRight: 60 }}
                />
                <Input
                  label={"Father/Husband Name:"}
                  name={"fhName"}
                  onChange={onFieldChange}
                  type={"text"}
                  value={bookingData.fhName}
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input
                  label={"Residential Address:"}
                  name={"residentialAddress"}
                  onChange={onFieldChange}
                  type={"text"}
                  value={bookingData.residentialAddress}
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input
                  label={"Permanent Address:"}
                  name={"permanentAddress"}
                  onChange={onFieldChange}
                  type={"text"}
                  value={bookingData.permanentAddress}
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
              >
                <Input
                  label={"Contact Number:"}
                  name={"contactNumber"}
                  onChange={onFieldChange}
                  type={"number"}
                  maxLength={"11"}
                  value={bookingData.contactNumber}
                  style={{ marginRight: 60 }}
                />
                <Input
                  label={"Landline:"}
                  name={"landLine"}
                  onChange={onFieldChange}
                  type={"number"}
                  value={bookingData.landLine}
                  style={{ marginRight: 60 }}
                />
                <Input
                  label={"Email:"}
                  name={"email"}
                  onChange={onFieldChange}
                  type={"text"}
                  value={bookingData.email}
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
              >
                <Input
                  label={"Occupation:"}
                  name={"occupation"}
                  onChange={onFieldChange}
                  type={"text"}
                  value={bookingData.occupation}
                  style={{ marginRight: 60 }}
                />
                <Input
                  label={"Age:"}
                  name={"age"}
                  onChange={onFieldChange}
                  type={"number"}
                  value={bookingData.age}
                  style={{ marginRight: 60 }}
                />
                <Input
                  label={"Nationality:"}
                  name={"nationality"}
                  onChange={onFieldChange}
                  type={"text"}
                  value={bookingData.nationality}
                  style={{ marginRight: 60 }}
                />
                {/* <Input label={'CNIC:'} name={'clientCNIC'} onChange={onFieldChange} type={'number'}  value={bookingData.clientCNIC}/> */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label>CNIC</label>
                  <NumberFormat
                    format="#####-#######-#"
                    type="text"
                    value={bookingData.clientCNIC}
                    onChange={(e) => {
                      setBookingData({
                        ...bookingData,
                        clientCNIC: e.target.value,
                      });
                      setFields({ ...fields, clientCNIC: e.target.value });
                    }}
                    style={{ height: 40 }}
                  />
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
              >
                <Input
                  label={"Nominee Name:"}
                  name={"nomineeName"}
                  onChange={onFieldChange}
                  type={"text"}
                  value={bookingData.nomineeName}
                  style={{ marginRight: 60 }}
                />
                <Input
                  label={"Nominee Relation:"}
                  name={"nomineeRelation"}
                  onChange={onFieldChange}
                  type={"text"}
                  value={bookingData.nomineeRelation}
                  style={{ marginRight: 60 }}
                />
                {/* <Input label={'Nominee CNIC:'} name={'nomineeCNIC'} onChange={onFieldChange} type={'number'}  value={bookingData.nomineeCNIC}/> */}
                <div>
                  <label>CNIC</label>
                  <NumberFormat
                    format="#####-#######-#"
                    type="text"
                    value={bookingData.nomineeCNIC}
                    onChange={(e) => {
                      setBookingData({
                        ...bookingData,
                        nomineeCNIC: e.target.value,
                      });
                      setFields({ ...fields, nomineeCNIC: e.target.value });
                    }}
                    style={{ height: 40 }}
                  />
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <Input
                  label={"Nominee Address:"}
                  name={"nomineeAddress"}
                  onChange={onFieldChange}
                  type={"text"}
                  value={bookingData.nomineeAddress}
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
              >
                <Input
                  label={"Total Plot Cost:"}
                  name={"totalPlotCost"}
                  onChange={onFieldChange}
                  type={"number"}
                  value={bookingData.totalPlotCost}
                  style={{ marginRight: 60 }}
                />
                <Input
                  label={"Down Payment:"}
                  name={"downPayment"}
                  onChange={onFieldChange}
                  type={"number"}
                  value={bookingData.downPayment}
                  style={{ marginRight: 60 }}
                />

                {/* <Input label={'Bank Draft / Cash:'} name={'bankOrDraft'} onChange={changeHandler} type={'text'}/> */}
                <select
                  style={{ width: 200, marginTop: 20 }}
                  class="form-select"
                  aria-label="Default select example"
                  onChange={onFieldChange}
                  name={"bankOrDraft"}
                  value={bookingData.bankOrDraft}
                >
                  <option selected>Payment Method</option>
                  <option value="Bank Draft">Bank Draft</option>
                  <option value="Pay Order">Pay Order</option>
                  <option value="Cash">Cash</option>
                </select>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
              >
                <Input
                  label={"Date:"}
                  name={"date"}
                  onChange={onFieldChange}
                  type={"date"}
                  value={moment(new Date(bookingData.date)).format(
                    "YYYY-MM-DD"
                  )}
                  style={{ marginRight: 60 }}
                />
                <Input
                  label={"DrawnOn:"}
                  name={"drawnOn"}
                  onChange={onFieldChange}
                  type={"date"}
                  value={moment(new Date(bookingData.drawnOn)).format(
                    "YYYY-MM-DD"
                  )}
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <label>Remarks:</label>
                <textarea
                  placeholder="Remarks..."
                  style={{ width: 500, height: 300 }}
                  onChange={onFieldChange}
                  name={"remarks"}
                  value={bookingData.remarks}
                />
                <br />
                <br />
              </div>
              <button type="submit" class="btn btn-primary">
                Update Booking
              </button>
            </fieldset>
          </form>
        </main>
      </div>
    </>
  );
}

export default UpdateBooking;
