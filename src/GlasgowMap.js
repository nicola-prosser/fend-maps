import React, { Component } from "react";
import "./GlasgowMap.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import markerIcon from "./icons/marker.png";
import markerActive from "./icons/markeractive.png";

// managed to make the markers work with the help of this comment https://github.com/fullstackreact/google-maps-react/issues/51#issuecomment-410825880
const Markers = props =>
  props.locations.map((location, index) => (
    <Marker
      {...props}
      {...location}
      key={location.id}
      title={location.name}
      icon={
        props.activeMarker.name === location.name ? markerActive : markerIcon
      }
      onClick={props.onMarkerClick}
    />
  ));

export class GlasgowMap extends Component {
  static defaultMap = {
    center: { lat: 55.86116, lng: -4.253887 },
    zoom: 13
  };

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  handleMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  render() {
    return (
      <Map
        role="application"
        aria-label="Map showing Glasgow City Centre"
        tabIndex="-1"
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 55.86116,
          lng: -4.253887
        }}
      >
        <Markers
          activeMarker={this.state.activeMarker}
          onMarkerClick={this.handleMarkerClick}
          locations={this.props.locations}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h2>{this.state.selectedPlace.name}</h2>
            <p>{this.state.selectedPlace.address}</p>

            <div>
              {this.state.selectedPlace.image && (
                <img
                  src={this.state.selectedPlace.image.src}
                  alt={this.state.selectedPlace.image.alt}
                  className="info-image"
                />
              )}
            </div>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA129edK8SHKOZZTNlznzqYF8zuNfSY6Pg"
})(GlasgowMap);
