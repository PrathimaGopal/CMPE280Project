import React, { useRef, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Review(props) {
  const commentRef = useRef();
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(null);
    const submitedComment = commentRef.current.value;
    const commentPayload = {
      review: submitedComment
    };
    console.log("payload is",commentPayload);
    let msg = "Thanks for your Review";
    setSuccessMessage(msg);
  };

 //const navigate = useNavigate();

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
              ref={commentRef}
            />
          </p>
          <p>
            <button id="sub_btn">
              Post Review
            </button>
          </p>
          <div id="successMessage">{successMessage}</div>
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
