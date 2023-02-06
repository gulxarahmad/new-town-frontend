import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useReactToPrint } from "react-to-print";
import moment from "moment";
import Loading from "../Components/Loader";
import { apiURL } from "../APIs/config";
import PrintIcon from "@material-ui/icons/Print";

// import printJS from 'print-js';
// import Printer, { print } from 'react-pdf-print'

export default function BookingPreview(props) {
  const { id } = useParams();
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);

  const numbFormtter = new Intl.NumberFormat("en-IN");
  // const printBooking = ()=>{
  //     console.log('Working')
  //     printJS({
  //         printable: 'printbooking',
  //         type: 'html',
  //         targetStyles: ['*']
  //     })
  // }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    fetch(`${apiURL}/readbookings/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <div ref={componentRef} style={{ marginLeft: 20, marginTop: 20 }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <img
                src={`https://res.cloudinary.com/new-abadi/image/upload/v1637424190/Logo_uavi3n.png`}
                style={{ width: 100, height: 100 }}
              />
            </div>
            <div
              style={{
                djustifyContent: "center",
                textAlign: "center",
                marginLeft: 20,
                marginRight: 20,
              }}
            >
              <div>
                <p style={{ fontSize: 40, fontWeight: "bold", color: "brown" }}>
                  New Home
                </p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", fontSize: 20 }}> </p>
              </div>
              <div>
                <p>
                  4.5 Km Sue-e-Asal Raiwind Road, Opposite Safari Garden Housing
                </p>
              </div>
              <div>
                <p>Scheme, Lahore. Cell:0322-3303331. Ph: 042-35927305</p>
              </div>
            </div>
            <div>
              <img src={booking.image} style={{ width: 100, height: 100 }} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 300, marginTop: 5 }}>
              <p>Registration No. {booking.registrationNumber}</p>
            </div>
            <div style={{}}>
              <p style={{ fontWeight: "bold", fontSize: 20 }}>Booking Form</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 440 }}>
              <p>Application Form No.: {booking._id}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 200 }}>
              <p>Plot No: {booking.plotNo}</p>
            </div>
            <div style={{ marginLeft: 40, width: 160 }}>
              <p>Street: {booking.street} sq ft.</p>
            </div>
            <div style={{ marginLeft: 40 }}>
              <p>Size of Plot: {booking.plotSize}</p>
            </div>
            <div style={{ marginLeft: 40 }}>
              <p>Type: {booking.type}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 400 }}>
              <p>Name: {booking.clientName}</p>
            </div>
            <div style={{ width: 400 }}>
              <p>Father/Husband Name: {booking.fhName}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 240 }}>
              <p>
                Second Applicant Name:{" "}
                {booking.secondAppName ? booking.secondAppName : "none"}
              </p>
            </div>
            <div style={{ marginLeft: 40 }}>
              <p>
                Second Applicant CNIC:{" "}
                {booking.secondAppCNIC ? booking.secondAppCNIC : "none"}
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 800 }}>
              <p>Residential/Postal Address: {booking.residentialAddress}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 800 }}>
              <p>Permanent Address: {booking.permanentAddress}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 400 }}>
              <p>Contact Number: 0{booking.contactNumber}</p>
            </div>
            <div style={{ marginLeft: 40 }}>
              <p>Landline: 0{booking.landLine}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 400 }}>
              <p>Email: {booking.email}</p>
            </div>
            <div style={{ marginLeft: 40 }}>
              <p>Occupation: {booking.occupation}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 200 }}>
              <p>Age: {booking.age}</p>
            </div>
            <div style={{ marginLeft: 40, width: 160 }}>
              <p>Nationality: {booking.nationality}</p>
            </div>
            <div style={{ marginLeft: 80 }}>
              <p>CNIC: {booking.clientCNIC}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 200 }}>
              <p>Name of Nominee: {booking.nomineeName}</p>
            </div>
            <div style={{ marginLeft: 40, width: 240 }}>
              <p>Relation with Applicant: {booking.nomineeRelation}</p>
            </div>
            <div style={{ marginLeft: 40 }}>
              <p>CNIC: {booking.nomineeCNIC}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 800 }}>
              <p>Nominee Address: {booking.nomineeAddress}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 220 }}>
              <p>
                Total Cost of Plot: {numbFormtter.format(booking.totalPlotCost)}
                Rs.
              </p>
            </div>
            <div style={{ width: 200 }}>
              <p>Down Payment: {numbFormtter.format(booking.downPayment)}Rs.</p>
            </div>
            <div>
              <p>I enclosed here with a sum of rupees &nbsp;</p>
            </div>
            <div style={{ width: 100 }}>
              <p>{numbFormtter.format(booking.downPayment)}Rs.</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 240 }}>
              <p> By Bank Draft/Pay Order: {booking.bankOrDraft}</p>
            </div>
            <div style={{ marginLeft: 40 }}>
              <p>Dated: {moment(booking.date).format("L")}</p>
            </div>
            <div style={{ marginLeft: 40 }}>
              <p>Drawn On: {moment(booking.drawnOn).format("L")}</p>
            </div>
          </div>
          <p>On account of booking of the above plot</p>
          <h3>Declaration</h3>
          <p>
            (1) I, hereby declare that I have read and understood the Terms and
            Conditions of booking a plot in the project and accept the same
          </p>
          <p>
            (2) I, further agree to pay regularly installments and dues and
            abide by all existing rules and regulations and those which may be
            prescribed by the company from time to time
          </p>
          <p>
            (3) I enclosed here with a sum of rupees {booking.downPayment} by By{" "}
            {booking.bankOrDraft} dated: {moment(booking.date).format("L")}{" "}
            drawn on: {moment(booking.drawnOn).format("L")} on account of
            booking of the above plot
          </p>{" "}
          <br />
          <div style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
            {" "}
            <br /> <br />
            <div style={{ width: 200 }}>
              <p>Signature of Applicant</p>
            </div>
            <div style={{ marginLeft: 40, width: 160 }}>
              <p>Witness of Applicant</p>
            </div>
            <div style={{ marginLeft: 60 }}>
              <p>Authorized Signature</p>
            </div>
          </div>
        </div>

        <button
          style={{ width: 200, height: 100 }}
          class="btn btn-success"
          onClick={handlePrint}
        >
          <PrintIcon />
          Print
        </button>
      </>
    );
  }
}
