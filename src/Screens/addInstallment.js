import '../App.css';
import React, {useState, useEffect} from 'react'
import {Alert} from 'react-bootstrap';
import '../App.css';
import { useHistory, useParams, Link } from 'react-router-dom';
import moment from 'moment';
import clsx from 'clsx';
import Axios from 'axios';
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
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {MainListItems} from '../Headers.js/listItems';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {apiURL} from '../APIs/config';
import NumberFormat from 'react-number-format';

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

const InstallmentData = {
    _id:null,
    registrationNumber:"",
    currDate: null,
    prevDate:null,
    prevSrNo:null,
    plotNo:"",
    plotSize:"",
    type:"",
    clientName:"",
    fhName:"",
    residentialAddress:"",
    contactNumber:null,
    clientCNIC:"",
    totalPlotCost:null,
    prevAmount:null,
    currAmount:null,
    totalRecAmount:null,
    remainingBalance:null,
    dueData: null
}

function Input (props){

    
    return(
      <label>
      {props.label}<br/>
      <input {...props}/>  
      
      
    </label>
    )
  }

export default function AddInstallment(){
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
    useEffect(()=>{
      const userInfo = localStorage.getItem("userInfo")
      if(!userInfo){
          history.push('/login');
      }
  },[history])

    const [bookingData, setBookingData] = useState([]);
    const [prevInstallment, setPrevInstallment] = useState([]);
    const [installmentData, setInstallmentData] = useState(InstallmentData);
    const [loading, setLoading] = useState(true);



    const {id, regnum} = useParams();

    useEffect(()=>{
    const inst = Axios.get(`${apiURL}/installments/${regnum}`);
        
    const book =  Axios.get(`${apiURL}/readbookings/${id}`);

    Axios.all([inst, book]).then(
        Axios.spread((...allData)=>{
           const tempinst =  allData[0];
           const tempbook = allData[1]
           const previnstall = tempinst.data.pop()

           setBookingData(tempbook.data)
           setPrevInstallment(previnstall);
           console.log(bookingData);
           console.log(prevInstallment)
        //    console.log(previnstall.clientName);
        //    console.log(tempbook.data.clientName);

        })
    )

  
    },[id]);
    installmentData.clientName = bookingData.clientName
    installmentData.clientCNIC = bookingData.clientCNIC
    installmentData.fhName = bookingData.fhName
    installmentData.residentialAddress = bookingData.residentialAddress
    installmentData.totalPlotCost = bookingData.totalPlotCost
    installmentData.contactNumber = bookingData.contactNumber
    installmentData.plotNo = bookingData.plotNo
    installmentData.type = bookingData.type
    installmentData.plotSize = bookingData.plotSize
    installmentData.registrationNumber = bookingData.registrationNumber
    installmentData.phase = bookingData.phase
    
    if(prevInstallment){
        


         installmentData.prevDate = prevInstallment.currDate;
          installmentData.prevSrNo = prevInstallment._id;
         console.log(installmentData.prevSrNo)
        installmentData.prevAmount = prevInstallment.totalRecAmount;
        installmentData.remainingBalance = bookingData.totalPlotCost - installmentData.totalRecAmount;
        installmentData._id = installmentData.prevSrNo+1


    }
else{
        installmentData.prevSrNo = bookingData._id
         installmentData.prevDate = bookingData.date
       
        console.log(installmentData.prevDate)
        installmentData.prevAmount = bookingData.downPayment
        installmentData.remainingBalance=bookingData.totalPlotCost-installmentData.totalRecAmount;
        installmentData._id = installmentData.prevSrNo+1
    }

        function makeid(length) {
    var result = "";
    var characters =
      "01234567890123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
   
    const sendToDB = (e)=>{
        e.preventDefault();
        if(installmentData.currDate===null|| installmentData.currAmount===null || installmentData.dueData===null){
         // <Alert variant={'danger'}>Please Fill All Entries</Alert>
          alert('Please Fill all Entries')
        }
        else{
        var formData = new FormData();
        formData.append("_id", installmentData._id);
        formData.append("clientName", installmentData.clientName);
        formData.append("prevDate", installmentData.prevDate);
        formData.append("currDate", installmentData.currDate);
        formData.append("dueData", installmentData.dueData);
        formData.append("prevSrNo", installmentData.prevSrNo);
        formData.append("clientCNIC", installmentData.clientCNIC);
        formData.append("fhName", installmentData.fhName);
        formData.append("residentialAddress", installmentData.residentialAddress);
        formData.append("totalPlotCost", installmentData.totalPlotCost);
        formData.append("contactNumber", installmentData.contactNumber);
        formData.append("prevAmount", installmentData.prevAmount);
        formData.append("currAmount", installmentData.currAmount);
        formData.append("totalRecAmount", installmentData.totalRecAmount);
        formData.append("plotNo", installmentData.plotNo);
        formData.append("type", installmentData.type);
        formData.append("plotSize", installmentData.plotSize);
        formData.append("registrationNumber", installmentData.registrationNumber);
        formData.append("remainingBalance", installmentData.remainingBalance);

        console.log(Array.from(formData));
        Axios.post(`${apiURL}/add-installment`, installmentData)
        .then(alert('Installment has been added'))
        .then(
            history.push(`/installments/${id}`)
          )
          }
    }


   // installmentData.clientName = bookingData.clientName

    return(
        <>
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
          Add Installment
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

    <div style={{display:'flex', flexDirection:'row'}}>


    <Input label={'Previous Sr No:'} name={'prevSrNo'} type={'number'} value={installmentData.prevSrNo} style={{marginRight:60}}/>
    <Input label={'Previous Date:'} name={'date'}  type={'date'} value={moment(new Date(installmentData.prevDate)).format("YYYY-MM-DD")} style={{marginRight:60}}/>
    <Input label={'Plot No:'} name={'plotNo'}  type={'text'} value={installmentData.plotNo}/>
    </div>
    <div style={{display:'flex', flexDirection:'row', marginTop:20}}>
      <Input label={'Phase:'} name={'phase'}  type={'text'} value={installmentData.phase}/>
    </div>
    
     <div style={{display:'flex', flexDirection:'row', marginTop:20}}>
    <Input label={'Name:'} name={'clientName'} type={'text'} value={installmentData.clientName} style={{marginRight:60}}/>
    <Input label={'Father/Husband Name:'} name={'fhName'} type={'text'} value={installmentData.fhName} style={{marginRight:60}}/>
    <Input label={'Contact Number:'} name={'contactNumber'}  type={'number'} value={installmentData.contactNumber} style={{marginRight:60}}/>
    </div>
    <div style={{display:'flex', flexDirection:'column'}}>
    <label>CNIC</label>
    <NumberFormat format="#####-#######-#" type="text"  value={installmentData.clientCNIC} style={{height:40}}/>
    </div>
    <div style={{marginTop:20}}>
    <Input label={'Residential Address:'} name={'residentialAddress'}type={'text'} value={installmentData.residentialAddress}/>
    </div>
    <div style={{display:'flex', flexDirection:'row', marginTop:20}}>
    <Input label={'Total Price:'} name={'totalPlotCost'} type={'number'} value={installmentData.totalPlotCost} style={{marginRight:60}}/>
    <Input label={'Previous Amount:'} name={'previousamount'} type={'number'} value={installmentData.prevAmount} style={{marginRight:60}}/>
    <Input label={'Current Amount:'} type={'number'} value={installmentData.currAmount} onChange={(e)=>setInstallmentData({...installmentData, currAmount: e.target.value, totalRecAmount:parseInt(e.target.value)+parseInt(installmentData.prevAmount)})}/>
    </div>
    <div style={{display:'flex', flexDirection:'row', marginTop:20}}>
    <Input label={'Total Receiving Amount:'}  type={'number'} value={installmentData.totalRecAmount}  style={{marginRight:60}}/>
    <Input label={'Remaining Balance:'}  type={'number'} value={installmentData.remainingBalance}  />
    </div>
    <div style={{display:'flex', flexDirection:'row', marginTop:20}}>
     <Input label={'Current Date:'} name={'date'} type={'date'} onChange={(e)=>setInstallmentData({...installmentData, currDate: e.target.value})}  style={{marginRight:60}}/>
    <Input label={'Due Date:'} name={'duedate'} type={'date'} onChange={(e)=>setInstallmentData({...installmentData, dueData: e.target.value})}/>
    </div>


    <br/>
    <button type="submit" class="btn btn-primary">Add Installment</button>
    </fieldset>

</form>
</main>
</div>
    </>
    

    );
}
