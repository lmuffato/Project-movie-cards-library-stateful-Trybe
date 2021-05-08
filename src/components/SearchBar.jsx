import React from 'react';
import PropTypes from 'prop-types';

// SearchBar relalizada com ajuda deste vídeo https://trybecourse.slack.com/archives/C01A9A2N93R/p1611099712344200?thread_ts=1610062707.482400&cid=C01A9A2N93R
// htmlFor = htmlFor property reflects the value of the for content property. That means that this script-accessible property is used to set and read the value of the content property for , which is the ID of the label's associated control element. Ajuda de Rafael Medeiros
class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    const { searchText, selectedGenre, bookmarkedOnly } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            onChange={ onSearchTextChange }
            value={ searchText }
            data-testid="text-input"
            name="searchText"
          />
        </label>

        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            name="bookmarkedOnly"
          />
        </label>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            name="bookmarkedOnly"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
  searchText: PropTypes.string,
  selectedGenre: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
}.isRequired;
