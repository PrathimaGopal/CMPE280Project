import "./styles.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBeforeLogin from "../components/navbar/NavBar";
import ContactUs from "./Contact";
import Login from "./Login";
import NewUser from "./NewUser";
import Review from "./Review";
import Logout from "./Logout";
import AccountHistory from "../components/accounthistory/AccountHistory";
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
        <Route path="accounthistory" element={<AccountHistory />} />
        <Route path="logout" element={<Logout setLoggedIn={setLoggedIn} />} />
      </Routes>
    </div>    
  );
}

export default App;
