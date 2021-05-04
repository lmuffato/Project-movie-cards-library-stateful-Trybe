/* eslint-disable jsx-a11y/label-has-associated-control */
// implement AddMovie component here
// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

const todosGeneros = [
  { genero: 'Todos', valor: '' },
  { genero: 'Ação', valor: 'action' },
  { genero: 'Comédia', valor: 'comedy' },
  { genero: 'Suspense', valor: 'thriller' },
];

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">Inclui o texto</label>
        <br />
        <input
          id="searchText"
          data-testid="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
        <br />
        <br />

        <label htmlFor="book" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        <input
          data-testid="checkbox-input"
          id="book"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        <br />
        <br />

        <label htmlFor="genero" data-testid="select-input-label">Filtrar por gênero</label>
        <br />
        <select
          data-testid="select-input"
          name="genero"
          id="genero"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          {todosGeneros.map(({ genero, valor }) => (
            <option data-testid="select-option" key={ genero } value={ valor }>{genero}</option>
          ))}
        </select>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
