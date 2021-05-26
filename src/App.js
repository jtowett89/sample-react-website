import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./css/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route
            exact
            path="/sample-react-website/"
            component={(props) => {
              return (
                <Home
                  {...props}
                  text={`Welcome to XYZ Company`}
                  tagline={`We are here to serve you!`}
                  bgUrl={`https://images.wallpaperscraft.com/image/night_city_street_car_113387_1280x720.jpg`}
                  bannerHeight={`100vh`}
                  showTagline={true}
                />
              );
            }}
          />
          <Route
            path="/sample-react-website/about/"
            component={(props) => {
              return (
                <About
                  {...props}
                  text={`About Us`}
                  tagline={``}
                  bgUrl={`https://images.wallpaperscraft.com/image/night_city_street_road_158135_1280x720.jpg`}
                  bannerHeight={`50vh`}
                  showTagline={false}
                />
              );
            }}
          />
          <Route
            path="/sample-react-website/services/"
            component={(props) => {
              return (
                <Services
                  {...props}
                  text="Our Services"
                  tagline={``}
                  bgUrl={`https://images.wallpaperscraft.com/image/night_city_road_buildings_186588_1280x720.jpg`}
                  bannerHeight={`50vh`}
                  showTagline={false}
                />
              );
            }}
          />
          <Route
            path="/sample-react-website/gallery/"
            component={(props) => {
              return (
                <Gallery
                  {...props}
                  text="Gallery"
                  tagline={``}
                  bgUrl={`https://images.wallpaperscraft.com/image/night_city_buildings_road_140907_1280x720.jpg`}
                  bannerHeight={`50vh`}
                  showTagline={false}
                />
              );
            }}
          />
          <Route
            path="/sample-react-website/contact/"
            component={(props) => {
              return (
                <Contact
                  {...props}
                  text={`Contact Us`}
                  tagline={``}
                  bgUrl={`https://images.wallpaperscraft.com/image/night_city_skyscrapers_buildings_181631_1280x720.jpg`}
                  bannerHeight={`50vh`}
                  showTagline={false}
                />
              );
            }}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
