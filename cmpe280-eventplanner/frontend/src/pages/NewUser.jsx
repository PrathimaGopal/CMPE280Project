import React, { useState, useRef } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import url from "../urlconfig";
import axios from "axios";

export default function NewUser() {
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  const userVerifyPasswordRef = useRef();
  const userStreetRef = useRef();
  const userCityRef = useRef();
  const userZipcodeRef = useRef();
  const navigate = useNavigate();

  // Handle Submit for the Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitedName = userNameRef.current.value;
    const submitedEmail = userEmailRef.current.value;
    const submitedPassword = userPasswordRef.current.value;
    const submitedVerifyPassword = userVerifyPasswordRef.current.value;
    const submitedStreet = userStreetRef.current.value;
    const submitedCity = userCityRef.current.value;
    const submitedZipcode = userZipcodeRef.current.value;

    const postFormData = {
      name: submitedName,
      email: submitedEmail,
      password: submitedPassword,
      address: submitedStreet,
      city: submitedCity,
      zipcode: submitedZipcode,
    };
    const resp = await axios.post(`${url}/createUser`, postFormData);
    navigate("/login");
  };

  return (
    <div>
      <div className="text-center m-5-auto">
        <h2 className="signUpWithUs">Sign Up with us</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Username</label>
            <br />
            <input type="text" name="first_name" required ref={userNameRef} />
          </p>
          <p>
            <label>Email address</label>
            <br />
            <input type="email" name="email" required ref={userEmailRef} />
          </p>
          <p>
            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              required
              ref={userPasswordRef}
            />
          </p>
          <p>
            <label>Verify Password</label>
            <br />
            <input
              type="password"
              name="verifypassword"
              required
              ref={userVerifyPasswordRef}
            />
          </p>
          <p>
            <label>Street Address</label>
            <br />
            <input type="text" name="address" required ref={userStreetRef} />
          </p>
          <p>
            <label>City</label>
            <br />
            <input type="text" name="city" required ref={userCityRef} />
          </p>
          <p>
            <label>Zipcode</label>
            <br />
            <input type="text" name="zipcode" required ref={userZipcodeRef} />
          </p>
          <p>
            <input type="checkbox" name="checkbox" id="checkbox" required />
            <span>
              I agree all statements in
              <a
                className="appLink"
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                terms of service
              </a>
            </span>
            .
          </p>
          <p>
            <button id="sub_btn" type="submit">
              Register
            </button>
          </p>
        </form>
        <footer>
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
