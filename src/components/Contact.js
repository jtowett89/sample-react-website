import React, { Component } from "react";
import Banner from "./Banner";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = () => {};
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <Banner
          text={this.props.text}
          tagline={this.props.tagline}
          bgUrl={this.props.bgUrl}
          showTagline={this.props.showTagline}
          bannerHeight={this.props.bannerHeight}
        />
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">Leave Us A Message</h2>
            </div>
            <form
              id="contactForm"
              className="col-md-8 offset-md-2"
              onSubmit={this.handleSubmit}
            >
              <input
                className="form-control"
                id="name"
                placeholder="Name"
                onChange={this.handleChange}
              />
              <input
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <input
                className="form-control"
                id="subject"
                placeholder="Subject"
                onChange={this.handleChange}
              />
              <textarea
                className="form-control"
                id="message"
                placeholder="Message"
                onChange={this.handleChange}
              />
              <button className="col-md-6 offset-md-3" type="submit">
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
