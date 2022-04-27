import React from 'react';
import './event.css';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function EventInputForm(props) {
  return (
      <div className="eventoptions">
        <div id="event">
          <p>Select the event:</p>
          <select defaultValue={props.event1} onChange={props.event1Change}>
            <option defaultValue={"none"} value="None">
              None
            </option>
            <option value="Baby Shower">Baby Shower</option>
            <option value="Birthday">Birthday</option>
            <option value="House Warming">House Warming</option>
            <option value="Wedding">Wedding</option>
            <option value="Party with a theme">Party with a theme</option>
          </select>
        </div>
        <div id="radiobutton">
          <p>Select the type of Event:</p>
          <input
            type="radio"
            value="indoor"
            id="indoor"
            name="locn"
            onChange={props.handleLocationChange}
          />
          <label for="indoor">Indoor</label>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="radio"
            value="outdoor"
            id="outdoor"
            name="locn"
            onChange={props.handleLocationChange}
          />
          <label for="outdoor">Outdoor</label> <br />
        </div>
        <div id="address">
          <br />
          <label>
            Address of venue: <br />
            <input
              type="text"
              className="addressbar"
              value={props.address}
              onChange={props.onAddressChange}
              required
            />
          </label>
        </div>
        <div id="city">
          <p>Select the locality of you event:</p>
          <select defaultValue={props.city} onChange={props.handleCityChange}>
            <option defaultValue={"none"} value="None">
              None
            </option>
            <option value="Alamo Square">Alamo Square</option>
            <option value="Balboa Hollow">Balboa Hollow</option>
            <option value="The Castro">The Castro</option>
            <option value="Diamond Heights">Diamond Heights</option>
            <option value="Fisherman Wharf">Fisherman's Wharf</option>
            <option value="Lower Pacific Heights">Lower Pacific Heights</option>
            <option value="Presidio Heights">Presidio Heights</option>
            <option value="Union Square">Union Square</option>
            <option value="Vista del Mar">Vista del Mar</option>
          </select>
        </div>
        <div id="capacity">
          <br />
          <label>
            Number of participants: <br />
            <input
              type="number"
              className="addressbar"
              value={props.capacity}
              onChange={props.onCapacityChange}
              required
            />
          </label>
        </div>
        <div id="budget">
          <br />
          <label>
            Budget in dollars: <br />
            <input
              type="number"
              className="budget"
              value={props.budget}
              onChange={props.onBudgetChange}
              required
            />
          </label>{" "}
          <br /> <br />
        </div>
        <div className="result-calendar">
          <label>Select Date of your event: </label>
          <Calendar
            className="date"
            onChange={props.onDateChange}
            value={props.calDate}
            required
          />
        </div>
        <br />
          <button type="submit" class="eventSubmit" onClick={props.displayCateringComponent}>
            Go to Catering Page
          </button>
        <br /> <br /> <br />
      </div>
  );
}
