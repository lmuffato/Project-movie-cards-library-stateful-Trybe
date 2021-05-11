import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange } = this.props;
    const { searchText } = this.props;

    const {  bookmarkedOnly, onBookmarkedChange } = this.props;
    const {  selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          <input type="text" data-testid="text-input" id="searchText" value={ searchText } onChange={ onSearchTextChange } />
        </label>
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          <input type="checkbox" data-testid="checkbox-input" id="bookmarkedOnly" value={ bookmarkedOnly } onChange={ onBookmarkedChange }/>
        </label>
        <label htmlFor="selectedGenre" data-testid="select-input-label">
          <select data-testid="select-input" id="selectedGenre" value={ selectedGenre } onChange={ onSelectedGenreChange }>
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
};
SearchBar.propTypes ={
  searchText: PropTypes.string
  onSearchTextChange: PropTypes.func
  bookmarkedOnly: PropTypes.bool
  onBookmarkedChange: PropTypes.func
  selectedGenre: PropTypes.string
  onSelectedGenreChange: PropTypes.func

}
export default SearchBar;
