import React, { useState } from "react";
import "./styles.css";
import NavBeforeLogin from "../components/navbarComponent/navBeforeLogin";
import { Link, useNavigate } from "react-router-dom";

export default function NewUser() {
  const [userName, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [zipcode, setZipcode] = useState("")
  const navigate = useNavigate();

  // Handle Submit for the Form
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    const data = {
      userName,
      email,
      password,
      verifyPassword,
      address,
      city,
      zipcode
    }
    console.log(data)
    // Storing Data in Local Storage 
    const register = JSON.stringify(data);
    localStorage.setItem("Registration", register)
    navigate ("/login")
  }
  return (
    <div>
      <NavBeforeLogin />
      <div className="text-center m-5-auto">
        <h2 className="signUpWithUs">Sign Up with us</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Username</label><br />
            <input type="text" name="first_name" onChange={(e) => setUsername(e.target.value)} required />
          </p>
          <p>
            <label>Email address</label><br />
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
          </p>
          <p>
            <label>Password</label><br />
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
          </p>
          <p>
            <label>Verify Password</label><br />
            <input type="password" name="verifypassword" onChange={(e) => setVerifyPassword(e.target.value)} required />
          </p>
          <p>
            <label>Street Address</label><br />
            <input type="text" name="address" onChange={(e) => setAddress(e.target.value)} required />
          </p>
          <p>
            <label>City</label><br />
            <input type="text" name="city" onChange={(e) => setCity(e.target.value)} required />
          </p>
          <p>
            <label>Zipcode</label><br />
            <input type="text" name="zipcode" onChange={(e) => setZipcode(e.target.value)} required />
          </p>
          <p>
            <input type="checkbox" name="checkbox" id="checkbox" required />
            <span>I agree all statements in<a className="appLink" href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
          </p>
          <p>
            <button id="sub_btn" type="submit">Register</button>

          </p>
        </form>
        <footer>
          <p><Link to="/" className="appLink">Back to Homepage</Link>.</p>
        </footer>
      </div>
    </div >
  );
}


