import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./frontend/pages/App";
import Catering from "./frontend/pages/catering";
import ContactUs from "./frontend/pages/contact";
import Decoration from "./frontend/pages/decoration";
import Event from "./frontend/pages/event";
import Login from "./frontend/pages/login";
import NewUser from "./frontend/pages/newuser";
import Others from "./frontend/pages/others";
import Review from "./frontend/pages/review";
import Settings from "./frontend/pages/accounthistory";
import Cart from "./frontend/pages/cart.jsx";
import Logout from "./frontend/pages/logout";
import AccountHistory from "./frontend/pages/accounthistory";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="event" element={<Event />} />
      <Route path="catering" element={<Catering />} />
      <Route path="decoration" element={<Decoration />} />
      <Route path="others" element={<Others />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="review" element={<Review />} />
      <Route path="login" element={<Login />} />
      <Route path="newUser" element={<NewUser />} />
      <Route path="cart" element={<Cart />} />
      <Route path="accounthistory" element={<AccountHistory />} />
      <Route path="logout" element={<Logout />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
