import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">Inclui o texto:</label><br/>
        <input type="text" value={ this.props.searchText } onChange={ this.props.onSearchTextChange } data-testid="text-input"></input><br/>
        <label data-testid="checkbox-input-label">Mostrar somente favoritos</label><br/>
        <input type="checkbox" checked={ this.props.bookmarkedOnly } onChange={ this.props.onBookmarkedChange } data-testid="checkbox-input"></input>
      </form>
    )
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func
};

export default SearchBar;
