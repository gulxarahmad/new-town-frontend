
import '../App.css';
import React, {useState, useEffect} from 'react'
import clsx from 'clsx';

import Axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
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
import Loading from '../Components/Loader';
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

const BookingData={
    plotNo:null,
    street:"",
    plotSize:"",
    type:"",
    phase:"",
    clientName:"",
    fhName:"",
    residentialAddress:"",
    permanentAddress:"",
    contactNumber:null,
    landLine:null,
    email:"",
    occupation:"",
    age:null,
    nationality:"",
    clientCNIC:null,
    nomineeName:"",
    nomineeRelation:"",
    nomineeCNIC:null,
    nomineeAddress:"",
    secondAppName:"",
    secondAppCNIC:"",
    totalPlotCost:null,
    downPayment:null,
    balanceAmount:null,
    bankOrDraft:"",
    date: null,
    drawnOn:null,
    image:"",
    registrationNumber:"",
    remarks:"Remaining Amount As Per Schedule"
}


function Input (props){

    
  return(
    <label>
    {props.label}<br/>
    <input {...props}/>  
    
    
  </label>
  )
}

function AddBooking() {
  const classes = useStyles();
  const [loading, setLoading]=useState(false);
  const [disable, setDisable]=useState(false)
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
    const[bookingData, setBookingData]=useState(BookingData);


    function makeid(length) {
    var result = "";
    var characters =
      "01234567890123456789123123123234456456";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
   

    const changeHandler = (event)=>{
        setBookingData({...bookingData, [event.target.name]:event.target.value});
    }

    const sendToDB = async(event) =>{

        event.preventDefault();
        console.log(bookingData);

      if(   bookingData.plotNo===null||
    bookingData.street===""||
    bookingData.plotSize===""||
    bookingData.type===""||
    bookingData.phase===""||
    bookingData.clientName===""||
    bookingData.fhName===""||
    bookingData.residentialAddress===""||
    bookingData.permanentAddress===""||
    bookingData.contactNumber===null||
    bookingData.landLine===null||
    bookingData.email===""||
    bookingData.occupation===""||
    bookingData.age===null||
    bookingData.nationality===""||
    bookingData.clientCNIC===null||
    bookingData.nomineeName===""||
    bookingData.nomineeRelation===""||
    bookingData.nomineeCNIC===null||
    bookingData.nomineeAddress===""||
    bookingData.totalPlotCost===null||
    bookingData.downPayment===null||
    bookingData.bankOrDraft===""||
    bookingData.date=== null||
    bookingData.drawnOn===null||
    bookingData.image==="" ||
    bookingData.remarks===""



){
  alert('Please Fill Entries')

      }
      else{
                setLoading(true)
                setDisable(true)
                var formData = new FormData();
                const rand = 1 + (Math.random()*(10000-1));
                const formId = makeid(10)

        formData.append("registrationNumber","NA"+parseInt(bookingData.clientCNIC)+parseInt(rand)); 
        formData.append("_id", formId);        
        formData.append("plotNo",bookingData.plotNo);
        formData.append("street",bookingData.street);
        formData.append("plotSize",bookingData.plotSize);
        formData.append("type",bookingData.type);
        formData.append("phase",bookingData.phase);
        formData.append("clientName",bookingData.clientName);
        formData.append("fhName",bookingData.fhName);
        formData.append("residentialAddress",bookingData.residentialAddress);
        formData.append("permanentAddress",bookingData.permanentAddress);
        formData.append("contactNumber",bookingData.contactNumber);
        formData.append("landLine",bookingData.landLine);
        formData.append("email",bookingData.email);
        formData.append("occupation",bookingData.occupation);
        formData.append("age",bookingData.age);
        formData.append("nationality",bookingData.nationality);
        formData.append("clientCNIC",bookingData.clientCNIC);
        formData.append("nomineeName",bookingData.nomineeName);
        formData.append("nomineeRelation",bookingData.nomineeRelation);
        formData.append("nomineeCNIC",bookingData.nomineeCNIC);
        formData.append("nomineeAddress",bookingData.nomineeAddress);
        formData.append("secondAppName",bookingData.secondAppName);
        formData.append("secondAppCNIC",bookingData.secondAppCNIC);
        formData.append("totalPlotCost",bookingData.totalPlotCost);
        formData.append("downPayment",bookingData.downPayment);
        formData.append("balanceAmount",bookingData.totalPlotCost - bookingData.downPayment);
        formData.append("bankOrDraft",bookingData.bankOrDraft);
        formData.append("date",bookingData.date);
        formData.append("drawnOn",bookingData.drawnOn);
        formData.append("image",bookingData.image);
        formData.append("remarks",bookingData.remarks);

        console.log(Array.from(formData));

       const {data} = await Axios.post(`${apiURL}/uploads`, formData,{
            headers:{
                enctype: "multipart/form-data",
            },
            
        })   
        if(data==='successful'){
          alert(`Booking has been added`)
          setLoading(false)
          history.push(`/booking-preview/${formId}`)
        }
        else{
          alert('Some this Wrong')
        }
        
      }
      


    }
   
  return (
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
          Booking Form
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
      <Container maxWidth="lg" className={classes.container}>
      <form onSubmit={sendToDB} style={{marginTop:100, marginLeft:-20}}>
    <fieldset>  
    <div style={{display:'flex', flexDirection:'row'}}>
    <Input label={'Plot No:'} name={'plotNo'} onChange={changeHandler} type={'text'} placeholder={'Plot No'} style={{marginRight:60}}/>
    <Input label={'Street (sq ft):'} name={'street'} onChange={changeHandler} type={'text'} placeholder={'Street'}/>
    </div>
    <div style={{display:'flex', flexDirection:'row'}}>
    <select  style={{width:200, marginTop:20, marginRight:40}} class="form-select" aria-label="Default select example" onChange={(e)=>setBookingData({...bookingData, plotSize: e.target.value})} name="bankOrDraft">
     <option selected>Plot Size</option>
        <option value="1 Marla">1 Marla</option>
        <option value="2 Marla">2 Marla</option>
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

    <select style={{width:200, marginTop:20, marginRight:40}} class="form-select" aria-label="Default select example" onChange={(e)=>setBookingData({...bookingData, type: e.target.value})}>
     <option selected>Plot Type</option>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
   </select>
   <select style={{width:200, marginTop:20}} class="form-select" aria-label="Default select example" onChange={(e)=>setBookingData({...bookingData, phase: e.target.value})}>
     <option selected>Phase</option>
        <option value="NA-NP">NA-NP</option>
        <option value="NA-JTC">NA-JTC</option>
   </select>
   </div>
    <div style={{display:'flex', flexDirection:'row', marginTop:20}}>
    <Input label={'Name:'} name={'clientName'} onChange={changeHandler} type={'text'} style={{marginRight:60}}/>
    <Input label={'Father/Husband Name:'} name={'fhName'} onChange={changeHandler} type={'text'}/>
    </div>
    <div style={{display:'flex', flexDirection:'row', marginTop:20}}>
    <Input label={'Second Applicant Name:'} name={'secondAppName'} onChange={changeHandler} type={'text'} style={{marginRight:60}}/>


    <div style={{display:'flex', flexDirection:'column'}}>
    <label>Second Applicant CNIC</label>
    <NumberFormat format="#####-#######-#" type="text" onChange={(e)=>setBookingData({...bookingData, secondAppCNIC: e.target.value})} style={{height:40}}/>
    </div>
    </div>
    <div style={{marginTop:20}}>
    <Input label={'Residential Address:'} name={'residentialAddress'} onChange={changeHandler} type={'text'}/>
    </div>
    <div style={{marginTop:20}}>
    <Input label={'Permanent Address:'} name={'permanentAddress'} onChange={changeHandler} type={'text'}/>
    </div>
    <div style={{display:'flex', flexDirection:'row', marginTop:20}}>
    <Input label={'Contact Number:'} name={'contactNumber'} onChange={changeHandler} type={'number'} maxLength={"11"} style={{marginRight:60}}/>
    <Input label={'Landline:'} name={'landLine'} onChange={changeHandler} type={'number'} style={{marginRight:60}}/>
    <Input label={'Email:'} name={'email'} onChange={changeHandler} type={'text'} style={{width:400}}/>
    </div>
    <div style={{display:'flex', flexDirection:'row', marginTop:20}}>
    <Input label={'Occupation:'} name={'occupation'} onChange={changeHandler} type={'text'} style={{marginRight:60}}/>
    <Input label={'Age:'} name={'age'} onChange={changeHandler} type={'number'} style={{marginRight:60}}/>
    <Input label={'Nationality:'} name={'nationality'} onChange={changeHandler} type={'text'} style={{marginRight:60}}/>
    {/* <Input label={'CNIC:'} name={'clientCNIC'} onChange={changeHandler} type={'number'} /> */}
    <div style={{display:'flex', flexDirection:'column'}}>
    <label>Enter CNIC</label>
    <NumberFormat format="#####-#######-#" type="text" onChange={(e)=>setBookingData({...bookingData, clientCNIC: e.target.value})} style={{height:40}}/>
    </div>
    </div>
    <div style={{display:'flex', flexDirection:'row', marginTop:20}}>
    <Input label={'Nominee Name:'} name={'nomineeName'} onChange={changeHandler} type={'text'} style={{marginRight:60}}/>
    <Input label={'Nominee Relation:'} name={'nomineeRelation'} onChange={changeHandler} type={'text'} style={{marginRight:60}}/>

    <div style={{display:'flex', flexDirection:'column'}}>
    <label>Enter CNIC</label>
    <NumberFormat format="#####-#######-#" type="text" onChange={(e)=>setBookingData({...bookingData, nomineeCNIC: e.target.value})} style={{height:40}}/>
    </div>
    </div>
        <div style={{marginTop:20}}>
    <Input label={'Nominee Address:'} name={'nomineeAddress'} onChange={changeHandler} type={'text'}/>
    </div>

    <div style={{display:'flex', flexDirection:'row', marginTop:20}}>
    <Input label={'Total Plot Cost:'} name={'totalPlotCost'} onChange={changeHandler} type={'number'} min={"0"} style={{marginRight:60}}/>
    <Input label={'Down Payment:'} name={'downPayment'} onChange={changeHandler} type={'number'} min={"0"} style={{marginRight:60}}/>
     <select style={{width:200, marginTop:20, marginRight:20}} class="form-select" aria-label="Default select example" onChange={(e)=>setBookingData({...bookingData, bankOrDraft: e.target.value})} name="bankOrDraft">
     <option selected>Payment Method</option>
        <option value="Bank Draft">Bank Draft</option>
        <option value="Pay Order">Pay Order</option>
        <option value="Cash">Cash</option>
   </select>
    </div>
    {/* <Input label={'Bank Draft / Cash:'} name={'bankOrDraft'} onChange={changeHandler} type={'text'}/> */}
   
    <div style={{display:'flex', flexDirection:'row', marginTop:20}}>
    <Input label={'Date:'} name={'date'} onChange={changeHandler} type={'date'} style={{marginRight:60}}/>
    <Input label={'DrawnOn:'} name={'drawnOn'} onChange={changeHandler} type={'date'}/> 
    </div>
    <div style={{marginTop:20}}>
    <label>Remarks:</label>
    <textarea placeholder="Remarks..." style={{width:500, height:300}} value={bookingData.remarks} onChange={(e)=>setBookingData({...bookingData, remarks: e.target.value})}/><br/>
    <input type="file" id="formFile" accept=".jpg, .jpeg, .png" onChange={(e)=>setBookingData({...bookingData, image: e.target.files[0]})}/>
    </div>
    <br/>
    <button type="submit" class="btn btn-primary" disabled={disable}>Submit Form</button>
    {
      loading && <Loading/>
    }
    </fieldset>

</form>
</Container>
  </main>
      </div>
    
    </>
  );
}

export default AddBooking;
