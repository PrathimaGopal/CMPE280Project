import React from "react";
import "./styles.css";
import ImageCarousel from "../components/imagecarousel";

export default function ContactUs() {
  return (
    <>
      <div className="content">
        <h2>
          <u>Welcome to the One Stop Event Shop!!!</u>
        </h2>
        <p>
          The most successful event planner of New York is now in
          <b> San Francisco Bay Area</b>. We assure to provide the best for your
          event!!! <br />
          Login and browse our various offerings like decor, food, photography,
          etc.
        </p>
      </div>
      <div className="carousel">
        <ImageCarousel />
      </div>
    </>
  );
}
