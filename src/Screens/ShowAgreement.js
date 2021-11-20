import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useReactToPrint } from "react-to-print";
import moment from "moment";
import { apiURL } from "../APIs/config";
import PrintIcon from "@material-ui/icons/Print";

import Loading from "../Components/Loader";

export default function ShowAgreement() {
  const { id } = useParams();
  const [agreement, setAgreement] = useState([]);
  const [loading, setLoading] = useState(true);
  const numbFormtter = new Intl.NumberFormat("en-IN");
  useEffect(() => {
    Axios.get(`${apiURL}/readbookings/${id}`)
      .then((res) => {
        setAgreement(res.data);
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <div ref={componentRef} style={{ marginLeft: 20 }}>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
            <div>
              <img
                src={`${apiURL}/image/logo.png`}
                style={{ width: 100, height: 100 }}
              />{" "}
            </div>{" "}
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
                  {" "}
                  NEW TOWN{" "}
                </p>{" "}
              </div>{" "}
              <div>
                <p style={{ fontWeight: "bold", fontSize: 20 }}> </p>{" "}
              </div>{" "}
              <div>
                <p>
                  {" "}
                  4.5 Km Sue - e - Asal Raiwind Road, Opposite Safari Garden
                  Housing{" "}
                </p>{" "}
              </div>{" "}
              <div>
                <p> Scheme, Lahore.Cell: 0322 - 3303331. Ph: 042 - 35927305 </p>{" "}
              </div>{" "}
            </div>{" "}
            <div>
              <img src={agreement.image} style={{ width: 100, height: 100 }} />{" "}
            </div>{" "}
          </div>{" "}
          <h1
            style={{
              fontWeight: "bold",
              marginLeft: 120,
              fontSize: 30,
              color: "brown",
            }}
          >
            {" "}
            Agreement Payment Schedule{" "}
          </h1>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 400 }}>
              <p> Booking Date: {moment(agreement.date).format("L")} </p>{" "}
            </div>{" "}
            <div style={{ marginLeft: 40 }}>
              <p> Sr No: {agreement._id} </p>{" "}
            </div>{" "}
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 400 }}>
              <p> Name: {agreement.clientName} </p>{" "}
            </div>{" "}
            <div style={{ marginLeft: 40 }}>
              <p> S / O, D / O, W / O: {agreement.fhName} </p>{" "}
            </div>{" "}
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 200 }}>
              <p> Plot No: {agreement.plotNo} </p>{" "}
            </div>{" "}
            <div style={{ marginLeft: 40, width: 160 }}>
              <p> Category: {agreement.plotSize} </p>{" "}
            </div>{" "}
            <div style={{ marginLeft: 40 }}>
              <p> Type: {agreement.type} </p>{" "}
            </div>{" "}
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 400 }}>
              <p> Street: {agreement.street} </p>{" "}
            </div>{" "}
            <div style={{ width: 400 }}>
              <p> Phase: {agreement.phase} </p>{" "}
            </div>{" "}
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 400 }}>
              <p>
                {" "}
                Total Payment: {numbFormtter.format(agreement.totalPlotCost)}
                Rs.{" "}
              </p>{" "}
            </div>{" "}
            <div style={{ width: 400 }}>
              <p>
                {" "}
                Down Payment: {numbFormtter.format(agreement.downPayment)}
                Rs.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div style={{ width: 400 }}>
              <p> Remarks: {agreement.remarks} </p>{" "}
            </div>{" "}
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <br /> <br />
            <div>
              <p style={{ color: "red" }}>
                {" "}
                Note: I accept that in case of deal cancel the mentioned amount
                will not be refunded.{" "}
              </p>{" "}
              <br />
              <p style={{ color: "red" }}>
                {" "}
                " (Booking Token) I accept that if I will not be able to fulfill
                my Commencement,
              </p>{" "}
              <br />{" "}
              <p style={{ color: "red" }}>
                {" "}
                company can be cancel my deal and will refund me after reduction
                as per company policy{" "}
              </p>{" "}
              <br />
            </div>{" "}
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
            {" "}
            <br /> <br />
            <div style={{ width: 200 }}>
              <p> Signature of Applicant </p>{" "}
            </div>{" "}
            <div style={{ marginLeft: 40, width: 160 }}>
              <p> Witness of Applicant </p>{" "}
            </div>{" "}
            <div style={{ marginLeft: 60 }}>
              <p> Authorized Signature </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <button
          style={{ width: 200, height: 100 }}
          class="btn btn-success"
          onClick={handlePrint}
        >
          <PrintIcon />
          Print{" "}
        </button>{" "}
      </>
    );
  }
}
