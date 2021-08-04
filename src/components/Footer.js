import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  render() {
    return (
      <div className="footer">
        <ul>
          <li>
            <Link onClick={this.scrollToTop} to="/sample-react-website/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={this.scrollToTop} to="/sample-react-website/about/">
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={this.scrollToTop}
              to="/sample-react-website/services/"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              onClick={this.scrollToTop}
              to="/sample-react-website/gallery/"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              onClick={this.scrollToTop}
              to="/sample-react-website/contact/"
            >
              Contact
            </Link>
          </li>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} XYZ Company. All rights reserved.
          Developed by{" "}
          <a
            href="https://justice.zerone.co.ke"
            target="_blank"
            rel="noreferrer"
          >
            Justice Towett
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
