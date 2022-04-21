import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./frontend/App";
import Catering from "./frontend/catering";
import ContactUs from "./frontend/contact";
import Decoration from "./frontend/decoration";
import Event from "./frontend/event";
import Login from "./frontend/login";
import NewUser from "./frontend/newuser";
import Others from "./frontend/others";
import Review from "./frontend/review";
import Settings from "./frontend/settings";
import Cart from "./frontend/cart.jsx";
import Logout from "./frontend/logout";

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
      <Route path="settings" element={<Settings />} />
      <Route path="cart" element={<Cart />} />
      <Route path="logout" element={<Logout />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
