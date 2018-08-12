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
      ref={instance => {
        // add the Marker instance to an array of references
        props.refs[index] = instance;
      }}
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

  // store all the Marker instances in an array
  markers = [];

  gm_authFailure() {
    window.alert("Google Maps error!");
  }

  componentDidMount() {
    window.gm_authFailure = this.gm_authFailure;
    // Show InfoWinodw for the initial activeLocation
    // Run in next tick of the event loop so that the reference's marker obejct is fully initialised
    const activeIndex = this.props.locations.indexOf(this.props.activeLocation);
    if (activeIndex === -1) return;
    const location = this.props.locations[activeIndex];
    setTimeout(() => {
      const marker = this.markers[activeIndex].marker;
      marker.setMap = () => {};
      // Prevent google-maps-react from detaching the marker from the map when the icon changes
      //https://github.com/fullstackreact/google-maps-react/blob/master/src/components/Marker.js#L42
      this.handleMarkerClick(location, marker);
    }, 0);
  }

  handleMarkerClick = (props, marker) =>
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
          lat: 55.86275,
          lng: -4.2625
        }}
      >
        <Markers
          refs={this.markers}
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
