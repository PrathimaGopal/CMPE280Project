import React, { useState, useEffect } from "react";
import Select from "react-select";
import data from "./data.json";
import './event.css';

export default function ThemeDropdown() {
  const [eventName, setEventName] = useState(null);
  const [theme, setTheme] = useState(null);
  const [themeList, setThemeList] = useState([]);
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("None");
  const [capacity, setCapacity] = useState('0');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    console.log(address);
    console.log(city);
  };

  const handleEventNameChange = (obj) => {
    setEventName(obj);
    setThemeList(obj.themes);
    setTheme(null);
  };

  const handleThemeChange = (obj) => {
    setTheme(obj);
  };

  useEffect(() => {
    if (eventName && theme) {
      console.log(eventName);
      console.log(theme);
    }
  }, [eventName, theme]);

  return (
    <div className="eventoptions">
        <br/>
      <div style={{ width: 300 }}>
        Select your Event:
        <Select
          placeholder="Select Event"
          value={eventName}
          options={data}
          onChange={handleEventNameChange}
          getOptionLabel={(x) => x.event}
          getOptionValue={(x) => x.event_code}
        />
        <br />
        Select your Theme:
        <Select
          placeholder="Select Theme"
          value={theme}
          options={themeList}
          onChange={handleThemeChange}
          getOptionLabel={(x) => x.name}
          getOptionValue={(x) => x.code}
        />
      </div>
      <div id="radiobutton">
        <p>Select the type of Event:</p>
        <input
          type="radio"
          value="indoor"
          id="indoor"
          onChange={handleLocationChange}
        />
        <label for="indoor">Indoor</label> <br />
        <input
          type="radio"
          value="outdoor"
          id="outdoor"
          onChange={handleLocationChange}
        />
        <label for="outdoor">Outdoor</label> <br />
      </div>
      <div id="address">
        <br />
        <label>
          Address of venue: <br/>
          <input
            type="text"
            className="addressbar"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
      </div>
      <div id="city">
        <p>Select the locality of you event:</p>
        <select defaultValue={city} onChange={handleCityChange}>
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
          Number of participants: <br/>
          <input
            type="number"
            className="addressbar"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </label>
      </div>
      <div id="submit">

      </div>
    </div>
  );
}
