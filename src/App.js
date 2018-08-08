import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import "./App.css";
import GlasgowMap from "./GlasgowMap.js";
import Sidebar from "./Sidebar.js";
import ArtLocations from "./ArtLocations.js";

class App extends Component {
  state = {
    activeMarker: {},
    artLocations: ArtLocations,
    activeLocation: {}
  };
  updateActiveMarker = clickedMarker => {
    this.setState({
      activeMarker: clickedMarker
    });
  };

  filterArtLocations = searchTerm => {
    this.setState({
      artLocations: ArtLocations.filter(location =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) // filter by `searchTerm`
    });
  };

  render() {
    return (
      <div className="App">
        <Sidebar
          locations={this.state.artLocations}
          onSelectMarker={this.updateActiveMarker}
          activeMarker={this.state.activeMarker}
          onSearch={this.filterArtLocations}
        />
        <GlasgowMap
          role="application"
          tabIndex={-1}
          activeLocation={this.state.activeLocation}
          locations={this.state.artLocations}
          onSelectMarker={this.updateActiveMarker}
          activeMarker={this.state.activeMarker}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA129edK8SHKOZZTNlznzqYF8zuNfSY6Pg"
})(App);
