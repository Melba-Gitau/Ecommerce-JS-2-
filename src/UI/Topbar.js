import React from "react";
import { IonIcon } from "@ionic/react";
import { searchOutline, menuOutline } from "ionicons/icons";
import fashion from "../Images/fashion.jpg";

const Topbar = () => {
  return (
    <div className="main">
      <div className="topbar">
        <div className="toggle">
          <IonIcon icon={menuOutline} />
        </div>

        <div className="search">
          <label>
            <input
              type="text"
              placeholder="Search here"
              style={{ textAlign: "center" }}
            />
            <IonIcon icon={searchOutline} style={{ padding: "3%" }} />
          </label>
        </div>

        <div className="user">
          <img src={fashion} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Topbar;
