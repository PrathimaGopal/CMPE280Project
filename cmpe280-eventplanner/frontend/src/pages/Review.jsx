//import React from "react";
//import "./styles.css";

//export default function Review() {
  //return <div className="app">Review</div>;
//}

import React, { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

export default function Review(props) {
  const [review, setReview] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      review,
      
    };
    console.log(data);
  };
  const navigate = useNavigate();

  const onClick = () => {
    props.setAdd(true);
    navigate("/event");

  };
  return (
    <div className="app">
      <div className="text-center m-5-auto">
        <h2 className="review">Write Your Review</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Your Comment</label>
            <br />
            <input id="textboxid"
              type="text"
              name="comment"
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </p>
          <p>
            <button id="sub_btn" type="submit" onClick={onClick}>
              Add
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
