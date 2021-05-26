import React, { Component } from "react";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";
import ServicesData from "./ServicesData";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
          <div className="container">
            <div className="row">
              {ServicesData.map((service) => {
                return <ServiceCard key={service.id} data={service} />;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
