// 1 - Crie um componente chamado <SearchBar />
// Esse componente renderizará uma barra com filtros acima da listagem de cartões. Quais cartões serão mostrados no componente <MovieList /> dependerá dos filtros escolhidos.

// <SearchBar /> deve receber como props:

// searchText, uma string
// onSearchTextChange, uma callback
// bookmarkedOnly, um boolean
// onBookmarkedChange, uma callback
// selectedGenre, uma string
// onSelectedGenreChange, uma callback
// O que será verificado:

// Será validado se o componente <SearchBar />, recebendo as devidas props, renderiza com sucesso
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <div>
        olá
        <br />
        <input
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
        <br />
        <input
          type="checkbox"
          value={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        <br />
        <input
          type="text"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        />
        <br />
      </div>
    );
  }
}

export default SearchBar;
