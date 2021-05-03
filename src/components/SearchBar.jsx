import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="input" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              onChange={ onSearchTextChange }
              value={ searchText }
              data-testid="text-input"
              id="input"
            />
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
