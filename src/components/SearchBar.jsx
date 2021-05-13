// implement AddMovie component here
/* ### 1 - Crie um componente chamado `<SearchBar />`

Esse componente renderizará uma barra com filtros acima da listagem de cartões. Quais cartões serão mostrados no componente `<MovieList />` dependerá dos filtros escolhidos. `<SearchBar />` deve receber como props:

  - `searchText`, uma string
  - `onSearchTextChange`, uma callback
  - `bookmarkedOnly`, um boolean
  - `onBookmarkedChange`, uma callback
  - `selectedGenre`, uma string
  - `onSelectedGenreChange`, uma callback

**O que será verificado:**

  - Será validado se o componente `<SearchBar />`, recebendo as devidas props, renderiza com sucesso */

// import React from "react";
// // import PropTypes from 'prop-types'

import React from 'react';

class SearchBar extends React.Component {
  // constructor() {
  //   super()
  //   this.state = { searchText: searchText,
  //     onSearchTextChanged: onSearchTextChanged,
  //   }
  // }

  // const props = {
  //   searchText='string',
  //   onSearchTextChange= callback,
  //   bookmarkedOnly=boolean,
  //   onBookmarkedChange=callback,
  //   selectedGenre='string',
  //   onSelectedGenreChange=callback,
  // }

  // console.log(this.props.altura)
  // const saida = this.props.altura == '1'? 'um' : 'nao é um'

  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="inputtext" data-testid="text-input-label">
            Inclui o texto
            <input
              id="inputtext"
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="checkbox"
              data-testid="checkbox-input"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <label htmlFor="select" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="select"
              data-testid="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option data-testid="select-option" value="" selected>
                Todos
              </option>
              <option data-testid="select-option" value="action">
                Ação
              </option>
              <option data-testid="select-option" value="comedy">
                Comédia
              </option>
              <option data-testid="select-option" value="thriller">
                Suspense
              </option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
