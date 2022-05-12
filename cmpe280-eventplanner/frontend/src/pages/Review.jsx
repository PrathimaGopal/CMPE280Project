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
          setCmntdata(res.data);
        }
      })
      .catch((err) => {
        console.log("Getting Booking Details Error:", err);
      });
  }, [cmntdata]);

  return (
    <div className="app">
      <div className="text-center m-5-auto">
        <div class="split left">
          <div class="centered">
            <div style={{ height: 450, width: "100%" }}>
              <h2 className="review">Write Your Review</h2>
              <form onSubmit={handleSubmit}>
                <label>Enter your Name:</label>
                <input
                  id="nameboxid"
                  type="text"
                  name="name"
                  ref={commentedbyRef}
                />
                <br></br>
                <label>Your Comment:</label>
                <br />
                <textarea
                  id="textboxid"
                  type="text"
                  name="comment"
                  ref={commentRef}
                />
                <p>
                  <button id="sub_btn">Post Review</button>
                </p>
                <div id="successMessage">{successMessage}</div>
                <p>
                  <Link to="/" className="appLink">
                    Back to Homepage
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div class="split right">
          <div class="centered">
            <div style={{ height: 300, width: "120%" }}>
              <di className="header"> Customer Reviews</di>
              <Table
                pagination={{ pageSize: 4 }}
                size="middle"
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
