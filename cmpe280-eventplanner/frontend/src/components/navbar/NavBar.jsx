import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBeforeLogin(props) {
  const defaultMenuGroup = () => {
    return (
      <>
        <Link className="navBarLink" to="/home">
          Home
        </Link>{" "}
        <Link className="navBarLink" to="/contact">
          Contact Us
        </Link>{" "}
        <Link className="navBarLink" to="/review">
          Reviews
        </Link>{" "}
        <Link className="navBarLink" to="login">
          Login
        </Link>{" "}
        <Link className="navBarLink" to="/newuser">
          New User
        </Link>{" "}
      </>
    );
  };

  const loggedInMenuGroup = () => {
    return (
      <>
        <Link className="navBarLink" to="/event">
          Event
        </Link>{" "}
        <Link className="navBarLink" to="/accounthistory">
          Account History
        </Link>
        <Link className="navBarLink" to="/logout">
          Logout
        </Link>
      </>
    );
  };

  const renderMenuGroup = () => {
    return props.loggedIn ? loggedInMenuGroup() : defaultMenuGroup();
  };

  return (
    <div className="nav">
      <div className="title"> Blissful Event Planet </div>
      <br />
      <nav className="tabs">{renderMenuGroup()}</nav>
      <hr></hr>
    </div>
  );
}
