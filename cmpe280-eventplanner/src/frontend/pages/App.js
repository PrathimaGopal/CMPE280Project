import "./styles.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBeforeLogin from "../components/navbar/NavBar";
import ContactUs from "./contact";
import Login from "./login";
import NewUser from "./newuser";
import Review from "./review";
import Cart from "./cart.jsx";
import Logout from "./logout";
import AccountHistory from "./AccountHistory";
import HomeContent from "./Home";
import Events from "../components/event/Events";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <NavBeforeLogin loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="home" element={<HomeContent />} />
        <Route path="event" element={<Events />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="review" element={<Review />} />
        <Route path="login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="newUser" element={<NewUser />} />
        <Route path="cart" element={<Cart />} />
        <Route path="accounthistory" element={<AccountHistory />} />
        <Route path="logout" element={<Logout setLoggedIn={setLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
