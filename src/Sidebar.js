import React, { Component } from "react";
import "./Sidebar.css";
import menuIcon from "./icons/menu.svg";

class Sidebar extends Component {
  state = {
    open: false
  };

  render() {
    return (
      //this opens and closes the sidebar for responsiveness - available on phones/tablets.
      //manu always open on desktop. hambuger menu will be invisble on desktop
      <nav
        className={`SidebarContainer ${
          this.state.open === true ? "" : "hidden"
        }`}
      >
        <img
          src={menuIcon}
          role="menu"
          alt="hambuger menu icon, opens sidebar"
          className="menu-icon"
          onClick={() => {
            this.setState({
              open: !this.state.open
            });
          }}
        />
        <div className="menu">
          <header>
            <h1 className="menu-title">
              Glasgow <br /> Art Scene
            </h1>

            <input
              type="text"
              aria-label="Filter map markers"
              tabIndex="0"
              placeholder="filter map results"
              onChange={e => this.props.onSearch(e.target.value)}
            />
          </header>
          <div className="listing">
            <h3>Locations</h3>
            <ol>
              {this.props.locations.map(location => (
                <li
                  tabIndex="0"
                  role="button"
                  onClick={() => this.props.onSelectLocation(location)}
                  key={location.id}
                  className={
                    location.id === this.props.activeLocation.id ? "active" : ""
                  }
                >
                  {location.name}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <footer className="credit">
          <p>
            Data provided by <a href="https://foursquare.com/">Foursquare</a> |
            2018
          </p>
        </footer>
      </nav>
    );
  }
}

export default Sidebar;
