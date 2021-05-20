import React, { Component } from "react";
import Banner from "./Banner";

class Gallery extends Component {
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
          <div className="text-center">
            <h1>There's nothing at the moment. Please check again later</h1>
          </div>
        </div>
      </>
    );
  }
}

export default Gallery;
