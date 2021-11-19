
    import AddBooking from '../Screens/addBooking';
    import ShowBookings from '../Screens/ShowBookings'; 
    import Header from '../Headers.js/Header';
    import Home from '../Screens/Home';

    
    import {Switch, Route, Link} from 'react-router-dom';
    import BookingPreview from '../Screens/BookingPreview';
    import ShowAgreement from '../Screens/ShowAgreement';
    import { Offline, Online } from 'react-detect-offline';
    import AlertMessage from '../Components/ErrorMessage';
    import {Alert} from 'react-bootstrap';
    import InstallmentSchedule from '../Screens/InstallmentSchedule';
    import ShowInstallments from '../Screens/ShowInstallments';
    import AddInstallment from '../Screens/addInstallment';
    import InstallmentPreview from '../Screens/installmentPreview';
    import UpdateBooking from '../Screens/updateBooking';
    import SearchBooking from '../Screens/SearchBooking';
    import ChangePassword from '../Screens/ChangePassword';
export default function Routes(){

    return(
        <>
        <div>
          
          <Offline>
            <Alert variant={'danger'}>You are offline</Alert>
            </Offline>
          
        </div>
        <Switch>
          <Route exact path ='/add-booking'> 
            <AddBooking/>
          </Route>
          <Route exact path ='/'> 
            <Home/>
          </Route>
          <Route exact path ='/all-bookings'> 
            <ShowBookings/>
          </Route>
          <Route exact path ='/booking-preview/:id'> 
            <BookingPreview/>
          </Route>
          <Route exact path ='/agreement-preview/:id'> 
            <ShowAgreement/>
          </Route>
          <Route exact path ='/installments-schedule/:id'> 
            <InstallmentSchedule/>
          </Route>
          <Route exact path ='/installments/:id'> 
            <ShowInstallments/>
          </Route>
          <Route exact path ='/add-installment/:id/:regnum'> 
            <AddInstallment/>
          </Route>
          <Route exact path ='/installment-preview/:id'> 
            <InstallmentPreview/>
          </Route>
          <Route exact path ='/update-booking/:id'> 
            <UpdateBooking/>
          </Route>
          <Route exact path ='/search-booking/'> 
            <SearchBooking/>
          </Route>
          <Route exact path ='/change-password/'> 
            <ChangePassword/>
          </Route>
        </Switch>
        </>
    );

}