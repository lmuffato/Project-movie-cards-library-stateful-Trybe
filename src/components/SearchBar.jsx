import React from 'react';
import PropTypes from 'prop-types';
import SearchBarInput from './SearchBarInput';
import SearchBarSelect from './SearchBarSelect';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    const theGenreList = [
      { value: '', text: 'Todos' },
      { value: 'action', text: 'Ação' },
      { value: 'comedy', text: 'Comédia' },
      { value: 'thriller', text: 'Suspense' },
    ];

    return (
      <form
        data-testid="search-bar-form"
        className="form-search-bar"
      >
        <SearchBarInput
          type="text"
          value={ searchText }
          eventHandle={ onSearchTextChange }
          labelText="Inclui o texto"
        />
        <br />
        <SearchBarInput
          type="checkbox"
          value={ bookmarkedOnly }
          eventHandle={ onBookmarkedChange }
          labelText="Mostrar somente favoritos"
        />
        <SearchBarSelect
          selectValue={ selectedGenre }
          selectOnChange={ onSelectedGenreChange }
          genreList={ theGenreList }
          genreTitle="Filtrar por gênero"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

// observe os padrões dos requesitos 2 a 4 e o req 5
// para tentar fazer compounds

export default SearchBar;
