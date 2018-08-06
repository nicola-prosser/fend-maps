import React, { Component } from "react";
import "./App.css";
import GlasgowMap from "./GlasgowMap.js";
import Sidebar from "./Sidebar.js";

const artLocations = [
  {
    id: 1,
    name: "Centre for Contemporary Arts",
    image: {
      src:
        "https://www.archdaily.com/898009/glasgow-school-of-art-to-be-rebuilt-according-to-schools-director",
      alt: "Art school"
    },
    location: {
      lat: 55.865733,
      lng: -4.265164
    }
  },
  {
    id: 2,
    name: "Glasgow School of Art",
    image: {
      src:
        "https://www.archdaily.com/898009/glasgow-school-of-art-to-be-rebuilt-according-to-schools-director",
      alt: "Art school"
    },
    location: {
      lat: 55.866147,
      lng: -4.263693
    }
  },
  {
    id: 3,
    name: "Modern Institute",
    image: {
      src:
        "https://www.archdaily.com/898009/glasgow-school-of-art-to-be-rebuilt-according-to-schools-director",
      alt: "Art school"
    },
    location: {
      lat: 55.855877,
      lng: -4.245411
    }
  },
  {
    id: 4,
    name: "Gallery of Modern Art",
    image: {
      src:
        "https://www.archdaily.com/898009/glasgow-school-of-art-to-be-rebuilt-according-to-schools-director",
      alt: "Art school"
    },
    location: {
      lat: 55.860131,
      lng: -4.252181
    }
  },
  {
    id: 5,
    name: "Lighthouse",
    image: {
      src:
        "https://www.archdaily.com/898009/glasgow-school-of-art-to-be-rebuilt-according-to-schools-director",
      alt: "Art school"
    },
    location: {
      lat: 55.859592,
      lng: -4.255532
    }
  },
  {
    id: 6,
    name: "The Old Hairdressers",
    image: {
      src:
        "https://www.archdaily.com/898009/glasgow-school-of-art-to-be-rebuilt-according-to-schools-director",
      alt: "Art school"
    },
    lat: 55.861009,
    lng: -4.258023
  },
  {
    id: 7,
    name: "Good Press",
    image: {
      src:
        "https://www.archdaily.com/898009/glasgow-school-of-art-to-be-rebuilt-according-to-schools-director",
      alt: "Art school"
    },
    lat: 55.854691,
    lng: -4.246533
  },
  {
    id: 8,
    name: "The Glasgow Art Club",
    image: {
      src:
        "https://www.archdaily.com/898009/glasgow-school-of-art-to-be-rebuilt-according-to-schools-director",
      alt: "Art school"
    },
    lat: 55.864453,
    lng: -4.262676
  },
  {
    id: 9,
    name: "Trongate 103",
    image: {
      src:
        "https://www.archdaily.com/898009/glasgow-school-of-art-to-be-rebuilt-according-to-schools-director",
      alt: "Art school"
    },
    lat: 55.856826,
    lng: -4.246819
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar artLocations={artLocations} />
        <GlasgowMap artLocations={artLocations} />
      </div>
    );
  }
}

export default App;
