import { useState, useEffect } from "react";
import Axios from "axios";
import Loading from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";
import { useHistory } from "react-router-dom";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { apiURL } from "../APIs/config";

export default function ChangePassword() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState(false);

  const history = useHistory();

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link
          color="inherit"
          href="https://main--agitated-mahavira-b37e00.netlify.app/"
        >
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      setEmail(userInfo.email);
      setPassword(userInfo.password);
      setId(userInfo.id);
    }
  }, [history]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      alert("Please Fill All Entries");
    } else {
      if (confirmPassword === password) {
        Axios.put(
          `${apiURL}/change-password/${id}`,
          {
            password: newPassword,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then(alert("Password Has been Updated!, You need to signIn Again!!"))
          .then(() => {
            localStorage.removeItem("userInfo");
            history.push("/login");
          });
      } else {
        alert("Your Previous Password is Incorrect!!");
      }
    }
  };
  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img
            src={`https://res.cloudinary.com/new-abadi/image/upload/v1637424190/Logo_uavi3n.png`}
            style={{ width: 100, height: 100 }}
          />
          <Typography component="h1" variant="h5">
            Update Your Password
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Add Previous Password"
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Add New Password"
              type="password"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitHandler}
            >
              Update Password
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
