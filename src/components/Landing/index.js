import React from "react";
import "./style.css";

export default function Landing() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-5 fw-bold">Decent Healthcare for Tech Freelancers</h1>
      <button
        type="button"
        className="btn btn-outline-danger mb-3 sign-in fw-bold"
      >
        Sign Up
      </button>
      <p className="fw-light">
        Already have an account?
        <span>
           <a href="http://">Sign In</a>
        </span>
      </p>
      <button type="button" className=" fw-bold btn btn-outline-danger mt-5 telegram mb-4">
        JOIN OUR TELEGRAM
      </button>
      <div className="d-flex flex-row justify-content-center links fw-light" >
        <a href="http://">ABOUT US</a> <span>|</span> <a href="http://">NEWS</a> <span>|</span> 
        <a href="http://">JOBS</a> <span>|</span> <a href="http://">CONTACT US</a>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <a href="http://">twitter</a>
        <a href="http://">facebook</a>
      </div>
    </div>
  );
}
