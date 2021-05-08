import React from 'react';
import SearchFavorite from './SearchFavorite';
import SearchGenre from './SearchGenre';
import Proptypes from 'prop-types';

// export junto a classe visto no curso da Udemy indicado pelo
// Lucas Pedroso - https://www.udemy.com/course/react-para-iniciantes-free/
export default class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input" data-testid="text-input-label">
          Inclui o texto
          <input
            id="input"
            type="text"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <SearchFavorite
          onBookmarkedChange={ onBookmarkedChange }
          bookmarkedOnly={ bookmarkedOnly }
        />
        <SearchGenre
          onSelectedGenreChange={ onSelectedGenreChange }
          selectedGenre={ selectedGenre }
        />
      </form>
    );
  }
}

SearchBar.proptypes = {
  searchText: Proptypes.string,
  onSearchTextChange: Proptypes.string,
  bookmarkedOnly: Proptypes.string,
  onBookmarkedChange: Proptypes.string,
  selectedGenre: Proptypes.string,
  onSelectedGenreChange: Proptypes.string,
}
