import React from "react";
import "./event.css";
import moment from "moment";
import "antd/dist/antd.min.css";
import {
  Select,
  Radio,
  DatePicker,
  TimePicker,
  Input,
  InputNumber,
} from "antd";

export default function EventInput(props) {
  const { TextArea } = Input;
  const dateFormat = "MM/DD/YYYY";
  const timeFormat = "HH:mm";
  const eventSpaceOptions = [
    { label: "Indoor", value: "indoor" },
    { label: "Outdoor", value: "outdoor" },
  ];

  return (
    <div className="formContainer">
      <label>Event Type:</label>
      <div id="event">
        <Select
          style={{ width: 180 }}
          value={props.formData.eventType}
          onChange={(value) =>
            props.setFormData({
              ...props.formData,
              eventType: value,
            })
          }
        >
          <Select.Option value="None">None</Select.Option>
          <Select.Option value="Baby Shower">Baby Shower</Select.Option>
          <Select.Option value="Birthday">Birthday</Select.Option>
          <Select.Option value="House Warming">House Warming</Select.Option>
          <Select.Option value="Wedding">Wedding</Select.Option>
          <Select.Option value="Party with a theme">
            Party with a theme
          </Select.Option>
        </Select>
      </div>
      <br />
      <label>Event Space:</label>
      <div id="radiobutton">
        <Radio.Group
          options={eventSpaceOptions}
          value={props.formData.eventSpace}
          optionType="button"
          buttonStyle="solid"
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              eventSpace: event.target.value,
            })
          }
        />
      </div>
      <br />
      <label>Guest Count:</label>
      <div id="capacity">
        <InputNumber
          required
          min={1}
          max={1000}
          defaultValue={1}
          value={props.formData.guestCount}
          onChange={(value) =>
            props.setFormData({
              ...props.formData,
              guestCount: value,
            })
          }
        />
      </div>
      <br />
      <label>Event Date: </label>
      <div>
        <DatePicker
          required
          format={dateFormat}
          value={
            props.formData.eventDate === ""
              ? ""
              : moment(props.formData.eventDate, dateFormat)
          }
          onChange={(date, dateString) =>
            props.setFormData({
              ...props.formData,
              eventDate: dateString,
            })
          }
        />
      </div>
      <div id="eventTime">
        <br />
        <label>Event Time:</label>
        <br />
        <TimePicker
          required
          minuteStep={15}
          format={timeFormat}
          value={
            props.formData.eventTime === ""
              ? ""
              : moment(props.formData.eventTime, timeFormat)
          }
          onChange={(time, timeString) =>
            props.setFormData({
              ...props.formData,
              eventTime: timeString,
            })
          }
        />
      </div>
      <br />
      <label>City:</label>
      <div id="city">
        <Select
          style={{ width: 180 }}
          value={props.formData.city}
          onChange={(value) =>
            props.setFormData({
              ...props.formData,
              city: value,
            })
          }
        >
          <Select.Option value="None">None</Select.Option>
          <Select.Option value="Cupertino">Cupertino</Select.Option>
          <Select.Option value="Livermore">Livermore</Select.Option>
          <Select.Option value="Fremont">Fremont</Select.Option>
          <Select.Option value="Palo Alto">Palo Alto</Select.Option>
          <Select.Option value="Pleasanton">Pleasonton</Select.Option>
          <Select.Option value="San Francisco">San Francisco</Select.Option>
          <Select.Option value="San Mateo">San Mateo</Select.Option>
          <Select.Option value="San Jose">San Jose</Select.Option>
          <Select.Option value="Santa Clara">Santa Clara</Select.Option>
          <Select.Option value="Sunnyvale">Sunnyvale</Select.Option>
        </Select>
      </div>
      <br />
      <label>Venue: </label>
      <div id="address">
        <TextArea
          rows={2}
          value={props.formData.address}
          required
          onChange={(event) =>
            props.setFormData({
              ...props.formData,
              address: event.target.value,
            })
          }
        />
      </div>
    </div>
  );
}
