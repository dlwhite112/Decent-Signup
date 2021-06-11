import React from "react";
import "./style.css";
import facebook from "../../assets/Facebook_black.png";
import twitter from "../../assets/Twitter_black.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Landing() {
  return (
    <Router>
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
            <Link to="/sign-in">Sign In</Link>
          </span>
        </p>
        <button
          type="button"
          className="fw-bold btn btn-outline-danger mt-5 telegram mb-5"
        >
          JOIN OUR TELEGRAM
        </button>
        <div className="d-flex flex-row justify-content-center links fw-light">
          <a href="http://">ABOUT US</a> <span>|</span>{" "}
          <a href="http://">NEWS</a> <span>|</span>
          <a href="http://">JOBS</a> <span>|</span>{" "}
          <a href="http://">CONTACT US</a>
        </div>
        <div className="d-flex flex-row justify-content-center m-3">
          <a href="https://twitter.com/decent">
            <img className="social-link" src={twitter} alt="twitter-link" />
          </a>
          <a href="https://www.facebook.com/DecentHealth/">
            <img className="social-link" src={facebook} alt="facebook-link" />
          </a>
        </div>
      </div>
    </Router>
  );
}
