import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    var x = document.getElementById("navbarNav").classList.remove("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <>
        <nav
          style={{ height: "15vh", width: "100vw" }}
          className="fixed-top navbar navbar-expand-lg "
        >
          <div className="container">
            <Link className="navbar-brand" to="/sample-react-website/">
              XYZ
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-list"></i> MENU
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="my_ul navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    onClick={this.handleClick}
                    to="/sample-react-website/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    onClick={this.handleClick}
                    to="/sample-react-website/about/"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    onClick={this.handleClick}
                    to="/sample-react-website/services/"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    onClick={this.handleClick}
                    to="/sample-react-website/gallery/"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    onClick={this.handleClick}
                    to="/sample-react-website/contact/"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div style={{ width: "100%", height: "10vh" }}></div>
      </>
    );
  }
}

export default Nav;
