import React, { Component } from "react";
import Banner from "./Banner";
import Swal from "sweetalert2";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      feedback: "",
    };
  }
  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = (e) => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    function validateInputs(name, email, subject, message) {
      let returnText;
      var re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (name.length < 3) {
        returnText = "Your name should be at least 3 characters long";
        Swal.fire({
          title: returnText,
          text: "",
          type: "error",
        });
        return false;
      } else if (!re.test(email)) {
        returnText = "Please enter a valid email";
        Swal.fire({
          title: returnText,
          text: "",
          type: "error",
        });
        return false;
      } else if (subject.length < 3) {
        returnText = "Your subject should be at least 3 characters long";
        Swal.fire({
          title: returnText,
          text: "",
          type: "error",
        });
        return false;
      } else if (message.length < 3) {
        returnText = "Your message should be at least 3 characters long";
        Swal.fire({
          title: returnText,
          text: "",
          type: "error",
        });
        return false;
      } else {
        returnText = "Message Sent Successfully";
        Swal.fire({
          title: returnText,
          text: "",
          type: "success",
        });
        return true;
      }
    }

    e.preventDefault();
    this.setState({
      feedback:
        "Name: " +
        this.state.name +
        ", Email: " +
        this.state.email +
        ", Subject: " +
        this.state.subject +
        ", Message: " +
        this.state.message,
    });

    if (validateInputs(name, email, subject, message)) {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    }
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
            <div className="container">
              <div id="alert" className="text-center"></div>
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
