import React, { useEffect } from "react";
import "./styles.css";

export default function Logout(props) {
  useEffect(() => props.setLoggedIn(false));

  return (
    <div className="content">
      <h2> Your session is expired!!</h2>
      <br />
      <a href="/" id="logout">
        <u>Click here to go to Home Page!!</u>
      </a>
    </div>
  );
}
