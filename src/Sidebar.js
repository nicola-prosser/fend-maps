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
          aria-label="button"
          alt="hambuger menu icon, opens sidebar"
          className="menu-icon"
          onClick={() => {
            this.setState({
              open: !this.state.open
            });
          }}
        />
        <div className="menu">
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

          <div className="listing">
            <ol>
              {this.props.artLocations.map(location => (
                <li
                  onClick={() => this.props.onSelectMarker(location)}
                  key={location.id}
                  className={
                    location.id === this.props.activeMarker.id ? "active" : ""
                  }
                >
                  {location.name}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
