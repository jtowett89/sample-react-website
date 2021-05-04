import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer">
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
