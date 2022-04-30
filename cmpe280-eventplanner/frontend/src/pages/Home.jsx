import React from "react";
import "./styles.css";
import ImageCarousel from "../components/imagecarousel";
import images from "../components/images/image";

export default function ContactUs() {
  return (
    <>
      <div className="content">
        <b>
          <u>Welcome to the One Stop Event Shop!!!</u>
        </b>
        <p>
          The most successful event planner of New York is now in
          <b> San Francisco Bay Area</b>. We assure to provide the best for your
          event!!!
        </p>
        <p>
          Login and browse our various offerings like decor, food, photography,
          etc.
        </p>
      </div>
      <div className="carousel">
        <ImageCarousel images={images} />
      </div>
    </>
  );
}
