import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;

SearchBar.defaultProps = {
  searchText: 'busca',
  onSearchTextChange: () => {},
  bookmarkedOnly: true,
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
};
