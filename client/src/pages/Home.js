import React from "react";
import "../assets/styles/style.css";
const Home = () => {
  return (
    <div className="main-home-container">
      <div className="grid-item introduction">
        <h4>Hi there 👋!</h4> <br />
        <h2>I am Muhammad Taha,</h2> <br />
        <h1>A Full stack developer.</h1>
      </div>
      <div className="grid-item image">image goes here</div>
      <div className="grid-item social-links">
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
      </div>
    </div>
  );
};

export default Home;
