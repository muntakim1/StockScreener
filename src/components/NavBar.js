import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark text-white  box-shadow fixed-top ">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <span style={{ color: "coral", fontFamily: "cursive" }}>Stock</span>{" "}
        Screener{" "}
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-white" to="/">
          Home
        </Link>
        <Link className="p-2 text-white" to="/about">
          About
        </Link>
        <Link className="p-2 text-white" to="/pricing">
          Pricing
        </Link>
        <Link className="p-2 text-white" to="/contact">
          Contact
        </Link>
        <Link className="p-2 text-white" to="/demo">
          Demo
        </Link>
        <Link className="get-started-btn" to="/">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
