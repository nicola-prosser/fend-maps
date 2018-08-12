import React, { Component } from "react";

import "./App.css";
import GlasgowMap from "./GlasgowMap.js";
import Sidebar from "./Sidebar.js";

class App extends Component {
  state = {
    artLocations: [],
    activeLocation: {},
    searchTerm: ""
  };
  setActiveLocation = activeLocation => {
    this.setState({
      activeLocation: activeLocation
    });
  };

  getFilteredArtLocations = () => {
    return this.state.artLocations.filter(location =>
      location.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    ); // filter by `searchTerm'
  };

  setSearchTerm = searchTerm => {
    this.setState({
      searchTerm
    });
  };

  onInfoWindowClose = () => {
    this.setState({
      activeLocation: {}
    });
  };

  componentDidMount() {
    const apiurl =
      "https://api.foursquare.com/v2/venues/search?ll=55.8,-4.3&intent=browse&query=art&radius=20000&client_id=%2035DLQNHZ1021OEEMGEA4R3PF5MKJP2T3MKJOGC5DJA0XYPTN&client_secret=%20JPTIPWUYVLWOCNB2IIVSRTM0QOIQXLDELZH1XJGYASCVRHQ5&v=20180809";

    fetch(apiurl)
      .then(response => response.json())
      .then(data => data.response.venues)
      .then(venues =>
        venues.map(venue => ({
          id: venue.id,
          name: venue.name,
          position: venue.location,
          address: venue.location.address,
          neighborhood: venue.location.neighborhood,
          postalCode: venue.location.postalCode
        }))
      )
      .then(venues =>
        this.setState({
          artLocations: venues
        })
      )
      .catch(function(error) {
        window.alert("Sorry, Foursquare can't load right now");
      });
  }

  render() {
    console.log(this.state.activeLocation);
    return (
      <div className="App">
        <Sidebar
          locations={this.getFilteredArtLocations()}
          onSelectLocation={this.setActiveLocation}
          activeLocation={this.state.activeLocation}
          onSearch={this.setSearchTerm}
        />
        <GlasgowMap
          onInfoWindowClose={this.onInfoWindowClose}
          role="application"
          tabIndex={-1}
          activeLocation={this.state.activeLocation}
          locations={this.state.artLocations}
          onSelectMarker={this.updateActiveMarker}
        />
      </div>
    );
  }
}

export default App;
