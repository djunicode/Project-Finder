import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="srch">
        <div>
          <button className="search-button">
            <i class="fas fa-search" />
          </button>
        </div>
        <div>
          <input
            style={{ fontFamily: "Open Sans,Italic" }}
            type="text"
            placeholder="Search"
            className="srchinp"
            className="search-input"
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
