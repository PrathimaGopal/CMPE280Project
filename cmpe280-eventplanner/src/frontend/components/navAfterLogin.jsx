import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

export default function NavAfterLogin() {
  return (
    <div className="nav">
      <div className="title"> Blissful Event Planet </div>
      <br />
      <br />
      <nav className="tabs">
        <Link to="/event">Event</Link>{" "}
        <Link to="/catering">Catering</Link>{" "}
        <Link to="/decoration">Decoration</Link>{" "}
        <Link to="/others">Others</Link> 
        <Link to="/cart">Cart</Link>{" "}
        <Link to="/settings">Settings</Link>
        <Link to="/logout">Logout</Link>
        <hr></hr>
      </nav>
    </div>
  );
}
