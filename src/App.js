import React, { Component } from "react";

import "./App.css";
import GlasgowMap from "./GlasgowMap.js";
import Sidebar from "./Sidebar.js";
import ArtLocations from "./ArtLocations.js";

class App extends Component {
  state = {
    activeMarker: {},
    artLocations: [],
    activeLocation: {},
    searchTerm: ""
  };
  updateActiveMarker = clickedMarker => {
    this.setState({
      activeMarker: clickedMarker
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
          image: {
            src:
              "https://static1.squarespace.com/static/51af9b9be4b07ac195fca7ca/t/52402d88e4b0019d4f5ebea9/1517932789568/CCA+Foyer.jpg",
            alt:
              "The Main enterance for the CCA -showing the reception and Welcome Home, the CCA shop"
          },
          position: venue.location,
          address: venue.location.address,
          desc:
            "The Centre for Contemporary Arts has a year-round programme includes exhibitions, film, music, literature, spoken word, festivals, Gaelic and performance."
        }))
      )
      .then(venues =>
        this.setState({
          artLocations: venues
        })
      );
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          locations={this.getFilteredArtLocations()}
          onSelectMarker={this.updateActiveMarker}
          activeMarker={this.state.activeMarker}
          onSearch={this.setSearchTerm}
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

export default App;
