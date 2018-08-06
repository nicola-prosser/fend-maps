import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    //empty ready to be updated by user
    query: "",
    //empty array set to return filtered locations
    searchResult: []
  };

  render() {
    return <ol className="locations-list">artLocations.map</ol>;
  }
}

export default Search;
