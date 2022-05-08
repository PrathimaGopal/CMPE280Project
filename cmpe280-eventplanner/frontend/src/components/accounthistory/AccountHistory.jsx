import React, {useState, useEffect} from "react";
import "antd/dist/antd.min.css";
import "./accounthistory.css";
import { Table } from "antd";
import axios from "axios";
import url from "../../urlconfig";


const columns = [
  { title: "Booking ID", dataIndex: "booking_id", key: "booking_id" },
  { title: "User ID", dataIndex: "user_id", key: "user_id" },
  { title: "Event Type", dataIndex: "event_type", key: "event_type" },
  { title: "Guest Count", dataIndex: "guest_count", key: "guest_count" },
  { title: "Event Date", dataIndex: "event_date", key: "event_date" },
  { title: "Event Time", dataIndex: "event_time", key: "event_time" },
  { title: "City", dataIndex: "city", key: "city" },
  { title: "Address", dataIndex: "address", key: "address" },
  { title: "Theme", dataIndex: "address", key: "theme" },
  { title: "Cuisine", dataIndex: "cuisine", key: "cuisine" },
  { title: "Decoration", dataIndex: "decoration", key: "decoration" },
  { title: "Photography", dataIndex: "photography", key: "photography" },
  { title: "Videography", dataIndex: "videography", key: "videography" },
  { title: "Music", dataIndex: "music", key: "music" },
  { title: "Total Cost", dataIndex: "total_cost", key: "total_cost" },
  

  
];

const rows = [
  {
    booking_id: 15,
    user_id: 2,
    event_type: "Birthday",
    event_space: "outdoor",
    guest_count: 3,
    event_date: "05/03/2022",
    event_time: "00:45",
    city: "San Francisco",
    address: "sadfsdfa",
    cuisine: "Thai Menu",
    decoration: "Beach Wedding",
    photography: "No",
    videography: "No",
    music: "Yes",
    total_cost: 1000,
  },
  {
    booking_id: 16,
    user_id: 2,
    event_type: "House Warming",
    event_space: "indoor",
    guest_count: 2,
    event_date: "05/09/2022",
    event_time: "06:45",
    city: "San Francisco",
    address: "asdfsadff",
    cuisine: "Thai Menu",
    decoration: "Beach Wedding",
    photography: "No",
    videography: "No",
    music: "Yes",
    total_cost: 1000,
  },
  {
    booking_id: 17,
    user_id: 2,
    event_type: "Wedding",
    event_space: "outdoor",
    guest_count: 100,
    event_date: "05/10/2022",
    event_time: "07:45",
    city: "Pleasanton",
    address: "asdfakf;alsdkf",
    cuisine: "Thai Menu",
    decoration: "Beach Wedding",
    photography: "No",
    videography: "Yes",
    music: "No",
    total_cost: 1000,
  },
  {
    booking_id: 18,
    user_id: 2,
    event_type: "House Warming",
    event_space: "indoor",
    guest_count: 3,
    event_date: "05/03/2022",
    event_time: "05:45",
    city: "Palo Alto",
    address: "asdfasdfaf",
    cuisine: "Thai Menu",
    decoration: "Beach Wedding",
    photography: "Yes",
    videography: "Yes",
    music: "No",
    total_cost: 1000,
  },
  {
    booking_id: 19,
    user_id: 2,
    event_type: "Baby Shower",
    event_space: "indoor",
    guest_count: 0,
    event_date: "05/03/2022",
    event_time: "05:45",
    city: "Pleasanton",
    address: "sadfsd",
    cuisine: "Thai Menu",
    decoration: "Beach Wedding",
    photography: "No",
    videography: "No",
    music: "Yes",
    total_cost: 1000,
  },
  {
    booking_id: 20,
    user_id: 2,
    event_type: "Birthday",
    event_space: "indoor",
    guest_count: 4,
    event_date: "05/11/2022",
    event_time: "06:45",
    city: "San Francisco",
    address: "asdafasdf",
    cuisine: "Thai Menu",
    decoration: "Beach Wedding",
    photography: "No",
    videography: "No",
    music: "Yes",
    total_cost: 1000,
  },
];


export default function AccountHistory() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios({
      url: `${url}/booking`,
      method: "get",
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

