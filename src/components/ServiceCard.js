import React, { Component } from "react";
class ServiceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-md-4 text-center">
        <div className="service_card">
          <i className={this.props.data.icon}></i>
          <br />
          <h2>{this.props.data.name}</h2>
          <p>{this.props.data.text}</p>
        </div>
      </div>
    );
  }
}

export default ServiceCard;
