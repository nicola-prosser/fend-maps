import React, { Component } from "react";
import "./Sidebar.css";
import "./Search.js";
import menuIcon from "./icons/menu.svg";

class Sidebar extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <nav
        className={`SidebarContainer ${
          this.state.open === true ? "" : "hidden"
        }`}
      >
        <img
          src={menuIcon}
          class="menu-icon"
          onClick={() => {
            console.log({ open: this.state.open, notOpen: !this.state.open });
            this.setState({
              open: !this.state.open
            });
          }}
        />
        <div className="menu">
          <h1>
            Glasgow <br /> Art Scene
          </h1>

          <input
            type="text"
            aria-label="Filter map markers"
            placeholder="filter map results"
          />

          <div className="listing">
            <ol>
              {this.props.artLocations.map(location => (
                <li key={location.id}>{location.name}</li>
              ))}
            </ol>
          </div>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
