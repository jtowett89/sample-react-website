import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/services/">Services</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} XYZ Company. All rights reserved.
          Developed by{" "}
          <a href="https://justice.zerone.co.ke" target="_blank">
            Justice Towett
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
