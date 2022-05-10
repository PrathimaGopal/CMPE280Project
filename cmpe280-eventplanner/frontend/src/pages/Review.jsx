import React, { useRef, useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import url from "../urlconfig";
import axios from "axios";
import { Table } from "antd";

const columns = [
  { title: "Commented By", dataIndex: "commented_by", key: "commented_by" },
  { title: "Comment", dataIndex: "comment", key: "comment" },
  { title: "Rating", dataIndex: "rating", key: "rating" },
];

export default function Review(props) {
  const commentRef = useRef();
  const commentedbyRef = useRef();

  const [successMessage, setSuccessMessage] = useState(null);
  const [cmntdata, setCmntdata] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(null);
    const submitedComment = commentRef.current.value;
    const submitterName = commentedbyRef.current.value;
    

    const commentPayload = {
      comment: submitedComment,
      rating: "5",
      commented_by: submitterName,
    };
    console.log("payload is", commentPayload);
    const resp = axios.post(`${url}/postReview`, commentPayload);
    console.log(resp);
    let msg = "Thanks for your Review";
    setSuccessMessage(msg);
  };

  useEffect(() => {
    axios({
      url: `${url}/reviewdata`,
      method: "get",
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Review Data is : ", res.data);
          setCmntdata(res.data);
        }
      })
      .catch((err) => {
        console.log("Getting Booking Details Error:", err);
      });
  }, []);

  return (
    <div className="app">
      <div className="text-center m-5-auto">
        <h2 className="review">Write Your Review</h2>
        <br></br>
        <div class="split left">
          <div class="centered">
            <form onSubmit={handleSubmit}>
              <p>
                <label>Enter your Name:</label>
                <input
                  id="nameboxid"
                  type="text"
                  name="name"
                  ref={commentedbyRef}
                />
              </p>
              <p>
                <label>Your Comment</label>
                <br />
                <input
                  id="textboxid"
                  type="textarea"
                  name="comment"
                  ref={commentRef}
                />
              </p>
              <p>
              <label>Your Rating :</label>
                <div class="dropdown">
                  <h1 class="dropbtn"><b>Select</b></h1>
                  <div class="dropdown-content">
                    <p>okay </p>
                    <p>good</p>
                    <p>average</p>
                    <p>excellant</p>
                    <p>awesome</p>

                  </div>
                </div>
                
              </p>
              <p>
                <button id="sub_btn">Post Review</button>
              </p>
              <div id="successMessage">{successMessage}</div>
            </form>
            <footer>
              <p>
                <Link to="/" className="appLink">
                  Back to Homepage
                </Link>
              </p>
            </footer>
          </div>
        </div>
        <div class="split right">
          <div class="centered">
            <div style={{ height: 400, width: "100%" }}>
              <div className="header"> Customer Reviews</div>
              <Table
                pagination={{ pageSize: 5 }}
                size="large"
                columns={columns}
                dataSource={cmntdata}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
