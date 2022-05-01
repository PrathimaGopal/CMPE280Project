import React, { useState } from "react";
import "./event.css";
import Catering from "../catering/Catering";
import EventInput from "./EventInput";
import Decoration from "../decoration/Decoration";
import Addons from "../addons/Addons";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import { FastForwardFilled, FastBackwardFilled } from "@ant-design/icons";

export default function Events() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    eventType: "",
    eventSpace: "",
    address: "",
    city: "",
    capacity: "",
    eventDate: "",
    eventTime: "",
    catering: "",
    decoration: "",
    photography: "",
    video: "",
    music: "",
  });

  const FormTitles = [
    "Event Details",
    "Catering",
    "Decoration",
    "Addons",
    "Cart",
  ];
  const NavTitles = ["Events", "Catering", "Decoration", "Addons", "Submit"];

  const PageDisplay = () => {
    if (page === 0) {
      return <EventInput formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Catering formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Decoration formData={formData} setFormData={setFormData} />;
    } else {
      return <Addons formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "25%"
                : page === 1
                ? "50%"
                : page === 2
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="form-Container">
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <Button
            type="primary"
            shape="round"
            style={{ width: "140px" }}
            icon={<FastBackwardFilled />}
            size="large"
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            {NavTitles[page - 1]}
          </Button>
          <span style={{ width: "5px" }} />
          <Button
            type="primary"
            shape="round"
            style={{ width: "140px" }}
            icon={<FastForwardFilled />}
            size="large"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {NavTitles[page + 1]}
          </Button>
        </div>
      </div>
    </div>
  );
}
