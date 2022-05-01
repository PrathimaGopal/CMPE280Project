import React, { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userName,
      password,
    };
    console.log(data);
  };
  const navigate = useNavigate();

  const onClick = () => {
    props.setLoggedIn(true);
    navigate("/event");
  };
  return (
    <div className="app">
      <div className="text-center m-5-auto">
        <h2 className="signUpWithUs">Sign in to us</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Username or Email Address</label>
            <br />
            <input
              type="text"
              name="first_name"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </p>
          <p>
            <label>Password</label>
            <Link to="/forget-password" className="appLink">
              <label className="right-label">Forget password?</label>
            </Link>
            <br />
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </p>
          <p>
            <button id="sub_btn" type="submit" onClick={onClick}>
              Login
            </button>
          </p>
        </form>
        <footer>
          <p>
            First time?{" "}
            <Link className="appLink" to="/newUser">
              Create an account
            </Link>
            .
          </p>
          <p>
            <Link to="/" className="appLink">
              Back to Homepage
            </Link>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
