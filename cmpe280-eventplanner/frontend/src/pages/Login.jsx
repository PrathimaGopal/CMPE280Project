import React, { useRef, useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import url from "../urlconfig";

export default function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    let loginResponse;
    try {
      setLoading(true);
      loginResponse = await axios({
        url: `${url}/login`,
        method: "get",
        params: {
          user_name: emailRef.current.value,
          password: passwordRef.current.value,
        },
        // credentials: 'include',
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }

    if (loginResponse && !loginResponse.error) {
      console.log("loginResponse - ", loginResponse);
      await localStorage.setItem("token", loginResponse.token);
      await localStorage.setItem("user_name", loginResponse.userName);
      props.setLoggedIn(true);
      props.setUser(loginResponse?.data?.userId);
      navigate(`/event`);
    } else {
      let ems = loginResponse?.errorMessage
        ? loginResponse?.errorMessage
        : "User is Unauthorized";
      setErrorMessage(ems);
    }
  };

  return (
    <div className="app">
      <div className="text-center m-5-auto">
        <h2 className="signUpWithUs">Sign in to us</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Username or Email Address</label>
            <br />
            <input type="text" name="email" required ref={emailRef} />
          </p>
          <p>
            <label>Password</label>
            <Link to="/forget-password" className="appLink">
              <label className="right-label">Forget password?</label>
            </Link>
            <br />
            <input type="password" name="password" required ref={passwordRef} />
          </p>
          <p>
            <button id="sub_btn">Login</button>
          </p>
          {errorMessage ? <div id="errorMessage">{errorMessage}</div> : null}
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
