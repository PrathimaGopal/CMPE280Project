import React from "react";
import "./styles.css";
import NavAfterLogin from "./components/navAfterLogin";
import ThemeDropdown from "./components/eventDropdown/themedropdown";


export default function Event() {
  
  return (
    <div className="app">
      <NavAfterLogin />
      <ThemeDropdown />
    </div>
  );
}
