import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./GlasgowMap.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

//'https://maps.googleapis.com/maps/api/js?key=AIzaSyA129edK8SHKOZZTNlznzqYF8zuNfSY6Pg&callback=initMap'

export class GlasgowMap extends Component {
  static defaultMap = {
    center: { lat: 55.86116, lng: -4.253887 },
    zoom: 13
    //styles: styles
  };

  render() {
    return (
      <Map
        role="application"
        tabIndex="-1"
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 55.86116,
          lng: -4.253887
        }}
      >
        {this.props.artLocations.map(marker => (
          <Marker
            key={marker.id}
            title={marker.name}
            name={marker.name}
            position={marker.location}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA129edK8SHKOZZTNlznzqYF8zuNfSY6Pg"
})(GlasgowMap);
