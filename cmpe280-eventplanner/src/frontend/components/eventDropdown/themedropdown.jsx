import React, { useState } from "react";
import './event.css';
import Catering from "../../pages/catering";
import EventInputForm from "./eventInputForm";

export default function ThemeDropdown() {
  const [event1, setEvent] = useState(null);
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("None");
  const [capacity, setCapacity] = useState('0');
  const [budget, setBudget] = useState("0");
  const [calDate, setCalDate] = useState(new Date());
  let cateringBooleanFlag = false; 

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };

  function onDateChange(calDate) {
    // change results based on calendar date click
    setCalDate(calDate);
  }

  const event1Change = (e) => {
    setEvent(e.target.value);
    console.log(event1);
  };

  const onAddressChange = (e) => {
    setAddress(e.target.value);
    console.log(address);
  }
  const onBudgetChange = (e) => {
    setBudget(e.target.value);
    console.log(budget);
  }

  const onCapacityChange = (e) => {
    setCapacity(e.target.value);
    console.log(capacity);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    console.log(address);
    console.log(city);
  };

  const displayCateringComponent = () => {
    cateringBooleanFlag = true;
  };

  const renderInputForm = cateringBooleanFlag? '': (<eventInput event1Change={event1Change} handleLocationChange={handleLocationChange} onAddressChange={onAddressChange} 
                                                    displayCateringComponent={displayCateringComponent} handleCityChange={handleCityChange} onCapacityChange={onCapacityChange} onBudgetChange={onBudgetChange} onDateChange={onDateChange}/>);

  const renderCateringComponent = !cateringBooleanFlag? '' : (<Catering />);

  return (
    <div>
      <EventInputForm />
      {renderInputForm}
      {renderCateringComponent}
      <Catering
        event1={event1}
        location={location}
        address={address}
        city={city}
        capacity={capacity}
        budget={budget}
        calDate={calDate}
      />
    </div>
  );
}
