import React from "react";
import { IonIcon } from "@ionic/react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import {
  cartOutline,
  chatbubblesOutline,
  cashOutline,
  eyeOutline,
} from "ionicons/icons";

const Dashboard = () => {
  return (
    <div className="dash">
      <Navbar />
      <div
        className="main"
        style={{
          position: "absolute",
          width: "calc(100% - 300px)",
          left: "300px",
          minHeight: "100vh",
          background: "var(--white)",
          transition: "0.5s",
        }}
      >
        <Topbar />
        <div className="cardBox" style={{ marginTop: "5%" }}>
          <div className="card">
            <div>
              <div className="numbers">1,504</div>
              <div className="cardName">Daily Views</div>
            </div>

            <div className="iconBx">
              <IonIcon icon={eyeOutline} />
            </div>
          </div>

          <div className="card">
            <div>
              <div className="numbers">80</div>
              <div className="cardName">Sales</div>
            </div>

            <div className="iconBx">
              <IonIcon icon={cartOutline} />
            </div>
          </div>

          <div className="card">
            <div>
              <div className="numbers">284</div>
              <div className="cardName">Comments</div>
            </div>

            <div className="iconBx">
              <IonIcon icon={chatbubblesOutline} />
            </div>
          </div>

          <div className="card">
            <div>
              <div className="numbers">$7,842</div>
              <div className="cardName">Earning</div>
            </div>

            <div className="iconBx">
              <IonIcon icon={cashOutline} />
            </div>
          </div>
        </div>

        <div className="details">
          <div className="orders">
            <div className="cardHeader">
              <h2>Orders</h2>
            </div>

            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Status</td>
                </tr>
              </thead>

              <tbody>{/* ... Rows of table data ... */}</tbody>
            </table>
          </div>
          <div className="customers">
            <div className="cardHeader">
              <h2>Customers</h2>
            </div>

            <table>
              <tbody>
                <tr>
                  <td width="60px">
                    <div className="image">
                      <img src={""} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      {}
                      <br /> <span>{}</span>
                    </h4>
                  </td>
                </tr>
                {/*  rows with different data as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
