import React from "react";
import NavBar from "../components/navbarComponent/navbar";
import "./styles.css";

export default function Logout() {
  return (
    <div className="content">
      <NavBar />
      <h2> Your session is expired!!</h2>
      <br />
      <a href="/" id="logout">
        <u>Click here to go to Home Page!!</u>
      </a>
    </div>
  );
}
