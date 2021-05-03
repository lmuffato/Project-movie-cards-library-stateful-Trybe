// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">

          <div>
            <label
              data-testid="text-input-label"
            >
              Inclui o texto
              </label>
              <input
                type="text"
                onChange={ onSearchTextChange }
                value={ searchText }
                data-testid="text-input"
              />
          </div>

        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
};

export default SearchBar;
