import logo from './logo.svg';
import './App.css';
import AddBooking from './Screens/addBooking';
import ShowBookings from './Screens/ShowBookings'; 
import Header from './Headers.js/Header';
import Home from './Screens/Home';
import LoginPage from './Screens/LoginPage';

import {Switch, Route, Link} from 'react-router-dom';
import BookingPreview from './Screens/BookingPreview';
import ShowAgreement from './Screens/ShowAgreement';
import { Offline, Online } from 'react-detect-offline';
import AlertMessage from './Components/ErrorMessage';
import {Alert} from 'react-bootstrap';
import InstallmentSchedule from './Screens/InstallmentSchedule';
import ShowInstallments from './Screens/ShowInstallments';
import AddInstallment from './Screens/addInstallment';
import InstallmentPreview from './Screens/installmentPreview';
import Routes from './Routes/routes'
import { useEffect } from 'react';


function App() {

  useEffect(()=>{
    const userInfo = localStorage.getItem("userInfo")
      if(!userInfo){
          
      }
  })
  
  
  return (
    <>
        <div>
          
          <Offline>
            <Alert variant={'danger'}>You are offline</Alert>
          </Offline>
          
        </div>
        <Routes/>
        <Switch>
          <Route exact path ='/login'> 
            <LoginPage/>
          </Route>
        </Switch>
        

    </>
    
  );
}

export default App;
