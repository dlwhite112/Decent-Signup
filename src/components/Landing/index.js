import React from "react";
import "./style.css";
import facebook from "../../assets/Facebook_black.png";
import twitter from "../../assets/Twitter_black.png";

export default function Landing() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className="heading">Decent Healthcare for Tech Freelancers</h1>
      <button
        type="button"
        className="btn btn-outline-danger mb-4 fw-bold fs-1"
      >
        Sign Up
      </button>
      <p className="fw-light">
        Already have an account?
        <span>
          <a href="http://">Sign In</a>
        </span>
      </p>
      <button
        type="button"
        className=" fw-bold btn btn-outline-danger mt-5 telegram mb-5"
      >
        JOIN OUR TELEGRAM
      </button>
      <div className="d-flex flex-row justify-content-center links fw-light">
        <a href="http://">ABOUT US</a> <span>|</span> <a href="http://">NEWS</a>{" "}
        <span>|</span>
        <a href="http://">JOBS</a> <span>|</span>{" "}
        <a href="http://">CONTACT US</a>
      </div>
      <div className="d-flex flex-row justify-content-center m-3">
        <a href="http://">
          <img className="social-link" src={twitter} alt="twitter-link" />
        </a>
        <a href="http://">
          <img className="social-link" src={facebook} alt="facebook-link" />
        </a>
      </div>
    </div>
  );
}
