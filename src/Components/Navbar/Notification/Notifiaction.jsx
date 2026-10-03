import React from "react";
import Style from "./Notification.css";


function Notification() {
  return (
    <div className={Style.notification}>
      <h2>Notifications</h2>
      <p>You have new notifications.</p>
    </div>
  );
}

export default Notification;