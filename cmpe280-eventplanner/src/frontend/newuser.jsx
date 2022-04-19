import React from "react";
import "./styles.css";
import NavBeforeLogin from "./components/navBeforeLogin";

export default function NewUser() {
  return (
    <div className="app">
      <NavBeforeLogin />
      New user
    </div>
  );
}
