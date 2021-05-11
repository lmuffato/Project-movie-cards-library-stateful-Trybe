// implement AddMovie component here
import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
        </label>
        <input
          type="text"
          name="text-input"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
          data-testid="text-input"
        />
      </form>
    );
  }
}

export default SearchBar;
