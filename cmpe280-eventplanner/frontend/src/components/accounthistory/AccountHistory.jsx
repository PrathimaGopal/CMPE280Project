import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import "./accounthistory.css";
import { Table } from "antd";
import axios from "axios";
import url from "../../urlconfig";

const columns = [
  { title: "Booking ID", dataIndex: "booking_id", key: "booking_id" },
  { title: "Event Type", dataIndex: "event_type", key: "event_type" },
  { title: "Guest Count", dataIndex: "guest_count", key: "guest_count" },
  { title: "Event Date", dataIndex: "event_date", key: "event_date" },
  { title: "Event Time", dataIndex: "event_time", key: "event_time" },
  { title: "City", dataIndex: "city", key: "city" },
  { title: "Address", dataIndex: "address", key: "address" },
  { title: "Cuisine", dataIndex: "cuisine", key: "cuisine" },
  { title: "Decoration", dataIndex: "decoration", key: "decoration" },
  { title: "Photography", dataIndex: "photography", key: "photography" },
  { title: "Videography", dataIndex: "videography", key: "videography" },
  { title: "Music", dataIndex: "music", key: "music" },
  { title: "Total Cost", dataIndex: "total_cost", key: "total_cost" },
];

export default function AccountHistory(props) {
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios({
      url: `${url}/booking`,
      method: "get",
      params: {
        user_id: props.user,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          //console.log("Booking Data of Events Booked : ", res.data);
          setBook(res.data);
        }
      })
      .catch((err) => {
        console.log("Getting Booking Details Error:", err);
      });
  }, []);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className="header"> Customer Booking Details</div>
      <Table size="small" columns={columns} dataSource={book} />
    </div>
  );
}
