import React from "react";
import "./style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Docimg from "../../assets/doctor-img-2.jpg"

export default function SignIn() {
  return (
    <Router>
        <div className="container">
          <div className="row d-flex flex-column justify-content-start">
            <h1 className="heading">Sign In</h1>
            <div className="row">
                <form className="col-4">
                  <div className="mb-4">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      id="exampleInputPassword1"
                    ></input>
                    <div id="passwordHelp" className="form-text">
                      Can't remember?
                      <span>
                          <Link to="/sign-in">Let's reset it</Link>
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="fw-bold btn btn-outline-danger mt-2 telegram mb-5 btn-sm"
                  >
                    LET ME IN!
                  </button>
                </form>
                <div className="col-1"></div>
                <div className="col-6">
                <img src={Docimg} class="img-fluid" alt="doctor-consultation-img"></img>
                </div>
            </div>
          </div>
        </div>
    </Router>
  );
}
