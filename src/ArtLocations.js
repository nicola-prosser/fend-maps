import artclub from "./images/artclub.jpg";
import cca from "./images/cca.jpg";
import goma from "./images/goma.jpg";
import goodpress from "./images/goodpress.jpg";
import gsa from "./images/gsa.jpg";
import hairdressers from "./images/hairdressers.jpg";
import lighthouse from "./images/lighthouse.jpg";
import modern from "./images/modern.jpg";
import trongate from "./images/trongate.jpg";

const ArtLocations = [
  {
    id: 1,
    name: "Centre for Contemporary Arts (CCA)",
    title: "Centre for Contemporary Arts (CCA)",
    image: {
      src: cca,
      alt:
        "The Main enterance for the CCA -showing the reception and Welcome Home, the CCA shop"
    },
    position: {
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
    title: "Glasgow School of Art",
    image: {
      src: gsa,

      alt: "The Glasgow School of Art Reid Building and the Mackintosh Building"
    },
    position: {
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
    title: "Modern Institute",
    image: {
      src: modern,
      alt:
        "An interior shot of one of the gallery spaces within Modern Institute, the walls are covered in colourful artwork"
    },
    position: {
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
    title: "Gallery of Modern Art (GOMA)",
    image: {
      src: goma,
      alt: "The Gallery of Modern Art (GOMA) Exterior in Royal Exhange Square"
    },
    position: {
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
    title: "Lighthouse",
    image: {
      src: lighthouse,
      alt: "An exterior shot of the Lighthouse frontage"
    },
    position: {
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
    title: "The Old Hairdressers",
    image: {
      src: hairdressers,
      alt: "The bar area of the Old Hairdressers"
    },
    position: {
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
    title: "Good Press",
    image: {
      src: goodpress,
      alt: "An exterior image of the Good Press shop"
    },
    position: {
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
    title: "The Glasgow Art Club",
    image: {
      src: artclub,
      alt: "The main hall of the Glasgow Art Club"
    },
    position: {
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
    title: "Trongate 103",
    address: "103 Trongate, Glasgow G1 5HD",
    desc:
      "Trongate 103 is an arts resource for Glasgow, housed over six stories of a former Edwardian warehouse.",
    image: {
      src: trongate,
      alt:
        "An interior image showing the Project Ability Studios, part of the Trongate 103 complex"
    },
    position: {
      lat: 55.856826,
      lng: -4.246819
    }
  }
];

export default ArtLocations;
