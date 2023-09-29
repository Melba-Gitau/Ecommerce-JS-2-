import React from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  basketSharp,
  homeOutline,
  peopleOutline,
  cartOutline,
  personOutline,
  folderOpenOutline,
  folderOutline,
  clipboardOutline,
  lockClosedOutline,
  logOutOutline,
} from "ionicons/icons";

const Navbar = () => {
  return (
    <div className="nav" style={{ position: "fixed" }}>
      <ul>
        <li>
          <Link to="/">
            <span className="icon">
              <IonIcon icon={basketSharp} />
            </span>
            <span
              className="title"
              style={{ fontFamily: "Imperial", fontSize: "40px" }}
            >
              Ecom-Web
            </span>
          </Link>
        </li>

        <li>
          <Link to="/dashboard">
            <span className="icon">
              <IonIcon icon={homeOutline} />
            </span>
            <span className="title">Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/categories">
            <span className="icon">
              <IonIcon icon={folderOpenOutline} />
            </span>
            <span className="title">Categories</span>
          </Link>
        </li>
        <li>
          <Link to="/subcategories">
            <span className="icon">
              <IonIcon icon={folderOutline} />
            </span>
            <span className="title">Sub-Categories</span>
          </Link>
        </li>
        <li>
          <Link to="/products">
            <span className="icon">
              <IonIcon icon={cartOutline} />
            </span>
            <span className="title">Products</span>
          </Link>
        </li>
        <li>
          <Link to="/customers">
            <span className="icon">
              <IonIcon icon={peopleOutline} />
            </span>
            <span className="title">Customers</span>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <span className="icon">
              <IonIcon icon={personOutline} />
            </span>
            <span className="title">Users</span>
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <span className="icon">
              <IonIcon icon={clipboardOutline} />
            </span>
            <span className="title">Orders</span>
          </Link>
        </li>
        <li>
          <Link to="/password">
            <span className="icon">
              <IonIcon icon={lockClosedOutline} />
            </span>
            <span className="title">Password</span>
          </Link>
        </li>
        <li>
          <Link to="/designs/shop">
            <span className="icon">
              <IonIcon icon={logOutOutline} />
            </span>
            <span className="title">Sign Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
