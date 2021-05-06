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
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        olá
        <br />
        <form data-testid="search-bar-form">
          <label htmlFor="input1" data-testid="text-input-label">
            Inclui o texto:
            <br />
            <input
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <br />
          <input
            type="checkbox"
            value={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          <br />
          {/* <select>

          </select> */}
          {/* <input
            type="text"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          /> */}
        </form>
      </div>
    );
  }
}

export default SearchBar;
