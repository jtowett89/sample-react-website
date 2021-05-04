import React, { Component } from "react";
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div
          className="banner"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(" +
              this.props.bgUrl +
              ")",
            backgroundSize: "cover",
            height: this.props.bannerHeight,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="banner_text">
            <h1>{this.props.text}</h1>
            <br />
            {this.props.showTagline && <h3>{this.props.tagline}</h3>}
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
