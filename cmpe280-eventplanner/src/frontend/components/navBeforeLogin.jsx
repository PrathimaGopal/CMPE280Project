import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

export default function NavBeforeLogin() {
  return (
    <div className="nav">
      <div className="title"> Blissful Event Planet </div>
      <br />
      <br />
      <nav className="tabs">
        <Link to="/home">Home</Link> <Link to="/contact">Contact Us</Link>{" "}
        <Link to="/review">Reviews</Link> <Link to="/login">Login</Link>{" "}
        <Link to="/newuser">New User</Link>{" "}
      </nav>
      <hr></hr>
    </div>
  );
}
