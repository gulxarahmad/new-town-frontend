import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useReactToPrint } from "react-to-print";
import moment from "moment";

import Loading from "../Components/Loader";
import { apiURL } from "../APIs/config";
import PrintIcon from "@material-ui/icons/Print";
export default function InstallmentPreview() {
  const { id } = useParams();
  const [installment, setInstallment] = useState([]);
  const [loading, setLoading] = useState(true);
  const numbFormtter = new Intl.NumberFormat("en-IN");
  useEffect(() => {
    Axios.get(`${apiURL}/installment-preview/${id}`)
      .then((res) => {
        setInstallment(res.data);
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
      });
    console.log(installment);
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
        <div
          class="row"
          style={{ marginLeft: 20, marginRight: 20, marginTop: 100 }}
          ref={componentRef}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <img
                src={`https://res.cloudinary.com/new-abadi/image/upload/v1637424190/Logo_uavi3n.png`}
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
                  New Town{" "}
                </p>{" "}
              </div>{" "}
              <div>
                <p style={{ fontWeight: "bold", fontSize: 20 }}>
                  {" "}
                  Installment Receipt(Office Copy){" "}
                </p>{" "}
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
            </div>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
            <div style={{ width: 240 }}>
              {" "}
              <strong> Previous Sr No. </strong> {installment.prevSrNo}
            </div>
            <div style={{ width: 240 }}>
              {" "}
              <strong> Previous Date. </strong>{" "}
              {moment(installment.prevDate).format("L")}
            </div>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 240 }}>
              {" "}
              <strong> Current Sr No. </strong> {installment._id}
            </div>
            <div style={{ width: 240 }}>
              {" "}
              <strong> Current Date. </strong>{" "}
              {moment(installment.currDate).format("L")}
            </div>
            <div>
              {" "}
              <strong> Phase: </strong> {installment.phase}
            </div>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 150 }}>
              {" "}
              <strong> Name. </strong> {installment.clientName}
            </div>
            <div style={{ width: 220 }}>
              {" "}
              <strong> S / O, W / O, D / O </strong> {installment.fhName}
            </div>
            <div style={{ width: 220 }}>
              {" "}
              <strong> CNIC: </strong> {installment.clientCNIC}
            </div>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 150 }}>
              {" "}
              <strong> Plot No. </strong> {installment.plotNo}
            </div>
            <div style={{ width: 150 }}>
              {" "}
              <strong> Type. </strong> {installment.type}
            </div>
            <div style={{ width: 150 }}>
              {" "}
              <strong> Category: </strong> {installment.plotSize}
            </div>
            <div>
              {" "}
              <strong> Total Price: </strong>{" "}
              {numbFormtter.format(installment.totalPlotCost)} Rs.
            </div>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 240 }}>
              {" "}
              <strong> Previous Amount. </strong>{" "}
              {numbFormtter.format(installment.prevAmount)} Rs.
            </div>
            <div style={{ width: 240 }}>
              {" "}
              <strong> Current Amount. </strong>{" "}
              {numbFormtter.format(installment.currAmount)} Rs.
            </div>
            <div style={{ width: 220 }}>
              {" "}
              <strong> Total Recieved: </strong>{" "}
              {numbFormtter.format(installment.totalRecAmount)} Rs.
            </div>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 260 }}>
              {" "}
              <strong> Remaining Balance. </strong>{" "}
              {numbFormtter.format(installment.remainingBalance)} Rs.
            </div>
            <div style={{ width: 220 }}>
              {" "}
              <strong> Due Date. </strong>{" "}
              {moment(installment.dueData).format("L")}
            </div>
          </div>{" "}
          <div
            style={{ display: "flex", flexDirection: "column", marginTop: 30 }}
          >
            <div style={{ width: 240 }}>
              {" "}
              <strong> Authorized Sig. </strong>
            </div>
            <div>
              {" "}
              4.5 Km Sue - e - Asal Raiwind Road, Opposite Safari Garden Housing
              Scheme, Lahore.Cell: 0322 - 3303331, Ph: 042 - 35927305{" "}
            </div>{" "}
          </div>{" "}
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: 100 }}
          >
            <div>
              <img
                src={`https://res.cloudinary.com/new-abadi/image/upload/v1637424190/Logo_uavi3n.png`}
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
                  New Town{" "}
                </p>{" "}
              </div>{" "}
              <div>
                <p style={{ fontWeight: "bold", fontSize: 20 }}>
                  {" "}
                  Installment Receipt(Customer Copy){" "}
                </p>{" "}
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
            </div>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
            <div style={{ width: 240 }}>
              {" "}
              <strong> Previous Sr No. </strong> {installment.prevSrNo}
            </div>
            <div style={{ width: 240 }}>
              {" "}
              <strong> Previous Date. </strong>{" "}
              {moment(installment.prevDate).format("L")}
            </div>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 240 }}>
              {" "}
              <strong> Current Sr No. </strong> {installment._id}
            </div>
            <div style={{ width: 240 }}>
              {" "}
              <strong> Current Date. </strong>{" "}
              {moment(installment.currDate).format("L")}
            </div>
            <div>
              {" "}
              <strong> Phase: </strong> {installment.phase}
            </div>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 150 }}>
              {" "}
              <strong> Name. </strong> {installment.clientName}
            </div>
            <div style={{ width: 220 }}>
              {" "}
              <strong> S / O, W / O, D / O </strong> {installment.fhName}
            </div>
            <div style={{ width: 220 }}>
              {" "}
              <strong> CNIC: </strong> {installment.clientCNIC}
            </div>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 150 }}>
              {" "}
              <strong> Plot No. </strong> {installment.plotNo}
            </div>
            <div style={{ width: 150 }}>
              {" "}
              <strong> Type. </strong> {installment.type}
            </div>
            <div style={{ width: 150 }}>
              {" "}
              <strong> Category: </strong> {installment.plotSize}
            </div>
            <div>
              {" "}
              <strong> Total Price: </strong>{" "}
              {numbFormtter.format(installment.totalPlotCost)} Rs.
            </div>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 240 }}>
              {" "}
              <strong> Previous Amount. </strong>{" "}
              {numbFormtter.format(installment.prevAmount)} Rs.
            </div>
            <div style={{ width: 240 }}>
              {" "}
              <strong> Current Amount. </strong>{" "}
              {numbFormtter.format(installment.currAmount)} Rs.
            </div>
            <div style={{ width: 220 }}>
              {" "}
              <strong> Total Recieved: </strong>{" "}
              {numbFormtter.format(installment.totalRecAmount)} Rs.
            </div>
          </div>{" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: 260 }}>
              {" "}
              <strong> Remaining Balance. </strong>{" "}
              {numbFormtter.format(installment.remainingBalance)} Rs.
            </div>
            <div style={{ width: 220 }}>
              {" "}
              <strong> Due Date. </strong>{" "}
              {moment(installment.dueData).format("L")}
            </div>
          </div>{" "}
          <div
            style={{ display: "flex", flexDirection: "column", marginTop: 30 }}
          >
            <div style={{ width: 240 }}>
              {" "}
              <strong> Authorized Sig. </strong>
            </div>
            <div>
              {" "}
              4.5 Km Sue - e - Asal Raiwind Road, Opposite Safari Garden Housing
              Scheme, Lahore.Cell: 0322 - 3303331, Ph: 042 - 35927305{" "}
            </div>{" "}
          </div>
        </div>
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
