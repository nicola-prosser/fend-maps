import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import "./App.css";
import GlasgowMap from "./GlasgowMap.js";
import Sidebar from "./Sidebar.js";

const artLocations = [
  {
    id: 1,
    name: "Centre for Contemporary Arts (CCA)",
    image: {
      src:
        "https://static1.squarespace.com/static/51af9b9be4b07ac195fca7ca/t/52402d88e4b0019d4f5ebea9/1517932789568/CCA+Foyer.jpg",
      alt:
        "The Main enterance for the CCA -showing the reception and Welcome Home, the CCA shop"
    },
    location: {
      lat: 55.865733,
      lng: -4.265164
    },
    address: "350 Sauchiehall St, Glasgow G2 3JDY",
    desc:
      "The Centre for Contemporary Arts is an arts centre in Glasgow, Scotland. The year-round programme includes exhibitions, film, music, literature, spoken word, festivals, Gaelic and performance."
  },
  {
    id: 2,
    name: "Glasgow School of Art",
    image: {
      src: "https://farm3.staticflickr.com/2817/12927752795_fa548640cd_b.jpg",

      alt: "The Glasgow School of Art Reid Building and the Mackintosh Building"
    },
    location: {
      lat: 55.866147,
      lng: -4.263693
    },
    address: "67 Renfrew St, Glasgow G3 6RQ",
    desc:
      "The Glasgow School of Art is Scotland's only public self-governing art school offering university-level programmes and research in architecture, fine art and design."
  },
  {
    id: 3,
    name: "Modern Institute",
    image: {
      src: "https://www.themoderninstitute.com/img/5605683554e73-large.jpg",
      alt:
        "An interior shot of one of the gallery spaces within Modern Institute, the walls are covered in colourful artwork"
    },
    location: {
      lat: 55.855877,
      lng: -4.245411
    },
    address: "14-20 Osborne St, Glasgow G1 5QN",
    desc:
      "White-walled gallery space illuminated by sky lights and exhibiting a varied line-up of art."
  },
  {
    id: 4,
    name: "Gallery of Modern Art (GOMA)",
    image: {
      src:
        "https://www.whatsonnetwork.co.uk/uploads/800x600/34ccdc7fb25fbe8660935f17378bfcf5.jpg",
      alt: "The Gallery of Modern Art (GOMA) Exterior in Royal Exhange Square"
    },
    location: {
      lat: 55.860131,
      lng: -4.252181
    },
    address: " Royal Exchange Square, Glasgow G1 3AH",
    desc:
      "The Gallery of Modern Art is the main gallery of contemporary art in Glasgow, Scotland. GoMA offers a programme of temporary exhibitions and workshops."
  },
  {
    id: 5,
    name: "Lighthouse",
    image: {
      src:
        "https://www.scotsmagazine.com/wp-content/uploads/sites/7/2015/02/lighthouseMichaelWurstbauer.jpg",
      alt: "An exterior shot of the Lighthouse frontage"
    },
    location: {
      lat: 55.859592,
      lng: -4.255532
    },
    address: "11 Mitchell Ln, Glasgow G1 3NU",
    desc:
      "The Lighthouse in Glasgow is Scotland's Centre for Design and Architecture."
  },
  {
    id: 6,
    name: "The Old Hairdressers",
    image: {
      src: "https://media.timeout.com/images/101770303/630/472/image.jpg",
      alt: "The bar area of the Old Hairdressers"
    },
    location: {
      lat: 55.861009,
      lng: -4.258023
    },
    address: "Renfield Ln, Glasgow G2 5AR",
    desc:
      "The Old Hairdressers is a bar, gallery and gig space in the city centre."
  },
  {
    id: 7,
    name: "Good Press",
    image: {
      src:
        "http://glasgowinternational.org/wp-content/uploads/2017/12/GOOD_PRESS_2017.jpg",
      alt: "An exterior image of the Good Press shop"
    },
    location: {
      lat: 55.854691,
      lng: -4.246533
    },
    address: "5 St Margaret's Pl, Glasgow G1 5JY",
    desc:
      "Good Press is a bookshop and art space based in Glasgow, Scotland specialising in self - and independently produced publications and projects."
  },
  {
    id: 8,
    name: "The Glasgow Art Club",
    image: {
      src:
        "https://ichef.bbci.co.uk/news/1024/media/images/79163000/jpg/_79163620_muralfive.jpg",
      alt: "The main hall of the Glasgow Art Club"
    },
    location: {
      lat: 55.864453,
      lng: -4.262676
    },
    address: "185 Bath St, Glasgow G2 4HU",
    desc:
      "Glasgow Art Club is a club for practising and retired artists and lay members with an interest in the arts, that has become over the generations a meeting place for artists, business leaders and academics."
  },
  {
    id: 9,
    name: "Trongate 103",
    address: "103 Trongate, Glasgow G1 5HD",
    desc:
      "Trongate 103 is an arts resource for Glasgow, housed over six stories of a former Edwardian warehouse.",
    image: {
      src:
        "http://elder.phantom.whitespectre.net/images/projects/K-Hunter_T103-1009-0082.jpg",
      alt:
        "An interior image showing the Project Ability Studios, part of the Trongate 103 complex"
    },
    location: {
      lat: 55.856826,
      lng: -4.246819
    }
  }
];

class App extends Component {
  state = {
    activeMarker: {},
    artLocations
  };
  updateActiveMarker = clickedMarker => {
    this.setState({
      activeMarker: clickedMarker
    });
  };

  filterArtLocations = searchTerm => {
    this.setState({
      artLocations: artLocations.filter(location =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) // filter by `searchTerm`
    });
  };

  render() {
    return (
      <div className="App">
        <Sidebar
          artLocations={this.state.artLocations}
          onSelectMarker={this.updateActiveMarker}
          activeMarker={this.state.activeMarker}
          onSearch={this.filterArtLocations}
          google={this.props.google}
        />
        <GlasgowMap
          artLocations={this.state.artLocations}
          onSelectMarker={this.updateActiveMarker}
          activeMarker={this.state.activeMarker}
          google={this.props.google}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA129edK8SHKOZZTNlznzqYF8zuNfSY6Pg"
})(App);
