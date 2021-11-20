import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Table } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import Loading from "../Components/Loader";
import { apiURL } from "../APIs/config";
import PrintIcon from "@material-ui/icons/Print";

export default function InstallmentSchedule() {
  const { id } = useParams();
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const numbFormtter = new Intl.NumberFormat("en-IN");

  useEffect(() => {
    fetch(`${apiURL}/readbookings/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
        setLoading(false);
      });
  }, [id]);

  const balance = booking.totalPlotCost - booking.downPayment;
  const defaultIntallment = Math.round(balance / 30);
  const [installment, setInstallment] = useState(0);
  const bookingDate = moment(booking.date).format("L");
  const event = new Date(bookingDate);
  event.setDate(10);
  const firstIntDate = moment(event).add(1, "months").calendar();
  const installmentSchedule = [];

  installmentSchedule[0] = { date: firstIntDate, installment: installment };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  for (let i = 1; i < 30; i++) {
    const date = moment(firstIntDate).add(i, "months").calendar();
    let sDate = date.toString();

    if (sDate === "Tomorrow at 12:00 AM") {
      sDate = Date.now();
      sDate = moment(sDate).add(1, "days").format("L");
    }
    if (sDate === "Today at 12:00 AM") {
      sDate = moment(Date.now()).format("L");
    }

    installmentSchedule[i] = { date: sDate, installment: installment };
  }

  console.log(installmentSchedule);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <div style={{ margin: 50 }}>
          Add Per Month Installment &nbsp;
          <input
            type="number"
            placeholder="Add Installment"
            onChange={(e) => {
              setInstallment(e.target.value);
            }}
          />
        </div>
        <div
          ref={componentRef}
          style={{ marginLeft: 30, marginRight: 30, marginTop: 30 }}
        >
          <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
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
                  NEW TOWN
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
          </div>
          <h1 style={{ marginLeft: 200, fontWeight: "bold" }}>
            Installment Schedule Plan
          </h1>
          <h3>
            This is Your 30 months Easy Installments Plan for{" "}
            <strong>Plot No. {booking.plotNo}</strong> at{" "}
            <strong>Form No. {booking._id}</strong>
          </h3>
          <h3>
            The Amount You Have to Pay on Registry Time is:{" "}
            <strong>
              {" "}
              {numbFormtter.format(balance - installment * 30)} Rs.
            </strong>{" "}
          </h3>

          <Table striped bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Installment</th>
              </tr>
            </thead>
            {installmentSchedule.map((val, index, key) => {
              return (
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{val.date}</td>

                    <td>{numbFormtter.format(val.installment)} Rs.</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
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
