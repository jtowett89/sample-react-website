import React, { Component } from "react";
import Banner from "./Banner";

class Home extends Component {
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
      </>
    );
  }
}

export default Home;
