import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./event.css";
import Catering from "../catering/Catering";
import EventInput from "./EventInput";
import Decoration from "../decoration/Decoration";
import Addons from "../addons/Addons";
import "antd/dist/antd.min.css";
import { Drawer, Input, Button, Typography, Result, Space } from "antd";
import url from "../../urlconfig";
import axios from "axios";

import { FastForwardFilled, FastBackwardFilled } from "@ant-design/icons";

export default function Events() {
  const [page, setPage] = useState(0);

  console.log(page);

  const resetData = () => {
    return {
      eventType: "",
      eventSpace: "",
      address: "",
      city: "",
      guestCount: "",
      eventDate: "",
      eventTime: "",
      cuisine: "",
      decoration: "",
      photography: "No",
      videography: "No",
      music: "No",
    };
  };

  const [formData, setFormData] = useState(resetData());

  const FormTitles = ["Event Details", "Catering", "Decoration", "Addons"];
  const NavTitles = ["Events", "Catering", "Decoration", "Addons", "Payment"];

  const { Text } = Typography;
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const [cardNumber, setCardNumber] = useState();
  const [cardHolderName, setCardHolderName] = useState();
  const [cardExpiry, setCardExpiry] = useState();
  const [cardCVV, setCardCVV] = useState();


  const hideContents = () => {
    setContentVisible(false);
  };

  const showResults = () => {
    hideContents();
    setResultVisible(true);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  useEffect(() => {
    if (formData.photography || formData.videography || formData.music) {
      //
    }
  }, [formData.photography, formData.videography, formData.music]);

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <EventInput
          visible={contentVisible}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 1) {
      return (
        <Catering
          visible={contentVisible}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 2) {
      return (
        <Decoration
          visible={contentVisible}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 3) {
      return (
        <Addons
          visible={contentVisible}
          formData={formData}
          setFormData={setFormData}
        />
      );
    }
  };

  const createBooking = () => {
    axios({
      url: `${url}/createBooking`,
      method: "post",
      data: {
        user_id: 2,
        event_type: formData.eventType,
        event_space: formData.eventSpace,
        guest_count: formData.guestCount,
        event_date: formData.eventDate,
        event_time: formData.eventTime,
        city: formData.city,
        address: formData.address,
        cuisine: "Thai Menu",
        decoration: "Beach Wedding",
        photography: formData.photography,
        videography: formData.videography,
        music: formData.music,
        total_cost: 1000,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Data : ", res.data);
          onClose();
          showResults();
        }
      })
      .catch((err) => {
        console.log("Getting Accounts error:", err);
      });
  };

  const goBackToEvent = () => {
    setFormData(resetData());
    setResultVisible(false);
    setPage(0);
  };

  const showButton = () => {
    // console.log(cardNumber, cardCVV);
    return cardNumber && cardHolderName && cardExpiry && cardCVV
      ? ""
      : "disabled";
  };

  const mainContent = () => {
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
              hidden={page === 0 ? true : false}
              type="primary"
              shape="round"
              style={{ width: "140px" }}
              icon={<FastBackwardFilled />}
              size="large"
              onClick={() => {
                if (page > 0) {
                  setPage((currPage) => currPage - 1);
                }
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
                  showDrawer();
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {NavTitles[page + 1]}
            </Button>
          </div>
        </div>
        <Drawer
          title="Payment Form"
          headerStyle={{ fontColor: "green" }}
          placement="right"
          onClose={onClose}
          visible={drawerVisible}
        >
          <Space direction="vertical">
            <Space direction="horizontal">
              <Text style={{ marginRight: "5px" }}>Event Type:</Text>
              <Text>{formData.eventType}</Text>
            </Space>
            <Space direction="horizontal">
              <Text style={{ marginRight: "5px" }}>Event Date:</Text>
              <Text>{formData.eventDate}</Text>
            </Space>
            <Space direction="horizontal">
              <Text style={{ marginRight: "5px" }}>Event Time:</Text>
              <Text>{formData.eventTime}</Text>
            </Space>
            <Space direction="horizontal">
              <Text style={{ marginRight: "5px" }}>Guest Count:</Text>
              <Text>{formData.guestCount}</Text>
            </Space>
            <Space direction="horizontal">
              <Text style={{ marginRight: "5px" }}>Cuisine:</Text>
              <Text>{formData.cuisine}</Text>
            </Space>
            <Space direction="horizontal">
              <Text style={{ marginRight: "5px" }}>Decoration:</Text>
              <Text>{formData.decoration}</Text>
            </Space>
            <Space direction="horizontal">
              <Text style={{ marginRight: "5px" }}>Photography:</Text>
              <Text>{formData.photography}</Text>
            </Space>
            <Space direction="horizontal">
              <Text style={{ marginRight: "5px" }}>Videography:</Text>
              <Text>{formData.videography}</Text>
            </Space>
            <Space direction="horizontal">
              <Text style={{ marginRight: "5px" }}>Music:</Text>
              <Text>{formData.music}</Text>
            </Space>
            <Space direction="horizontal">
              <Text style={{ marginRight: "5px" }}>Total Cost:</Text>
              <Text>1000</Text>
            </Space>
          </Space>
          <br />
          <div style={{ marginTop: "15px", alignContent: "center" }}>
            <Text strong type="success">
              Payment Details
            </Text>
          </div>
          <br />
          <Input
            style={{ width: "75%", marginRight: "10px" }}
            placeholder="Credit Card"
            onChange={(value) => setCardNumber(value)}
          />
          <br />
          <Input
            style={{ width: "75%", marginTop: "15px" }}
            placeholder="Card Holder Name"
            onChange={(value) => setCardHolderName(value)}
          />
          <br />
          <Input
            style={{ width: "35%", marginRight: "20px", marginTop: "15px" }}
            placeholder="MM/YY"
            onChange={(value) => setCardExpiry(value)}
          />
          <Input
            style={{ width: "35%", marginTop: "15px" }}
            placeholder="CVV"
            onChange={(value) => setCardCVV(value)}
          />
          <br />
          <Button
            disabled={showButton()}
            type="primary"
            shape="round"
            style={{ width: "75%", marginTop: "20px" }}
            onClick={createBooking}
          >
            Complete Payment
          </Button>
        </Drawer>
      </div>
    );
  };

  const resultContent = () => {
    return (
      <Result
        status="success"
        title="Request booked successfully"
        subTitle="Your booking is confirmed. Blissful Event Planet team will reach out to you."
        extra={[
          <Button type="primary" key="console" onClick={goBackToEvent}>
            Book another Event
          </Button>,
          <Button key="home">
            <Link to="/home">Go back to Home</Link>
          </Button>,
        ]}
      />
    );
  };

  const displayContent = () => {
    return resultVisible ? resultContent() : mainContent();
  };

  return <div>{displayContent()}</div>;
}
