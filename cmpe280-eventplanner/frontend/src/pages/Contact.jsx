import React from "react";
import "./styles.css";




export default function ContactUs() {
  // return <div className="app">Contact Us Page</div>;
 return (
  <div>
  <div className="text-center m-5-auto">
    <h1 className="signUpWithUs">Please Contact Us </h1>
    {/* <h2 className="signUpWithUs">Contact Us Here</h2> */}

    <form>
      <p>
        <label>Email : contact@blissfuleventplanet.com </label>
      </p>
      <p>
        <label>Contact No. : +19876543210 </label>
      </p>
      <p>
        <label>Address : 340 Bradford St, San Francisco, 94110 </label>
      </p>
      </form>
  </div>
</div>
 );
}
