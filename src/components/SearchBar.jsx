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

  render(){
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" for="text-search">Inclui o texto 
            <input data-testid="text-input" type="text" id="text-search" value={ this.props.searchText } onChange={ this.props.onSearchTextChange }/>
          </label>  
          <label data-testid="checkbox-input-label" for="checkbox1">Mostrar somente favoritos
            <input data-testid="checkbox-input" id="checkbox1" type="checkbox" checked={ this.props.bookmarkedOnly } onChange={ this.props.onBookmarkedChange } />
          </label>
          <label for="selected" data-testid="select-input-label">Filtrar por gênero
            <select id="selected" data-testid="select-input" value={ this.props.selectedGenre } onChange={ this.props.onSelectedGenreChange } >
              <option data-testid="select-option" value="" selected >Todos</option>
              <option data-testid="select-option" value="action" >Ação</option>
              <option data-testid="select-option" value="comedy" >Comédia</option>
              <option data-testid="select-option" value="thriller" >Suspense</option>
            </select>
          </label>
                      
        </form>

      </div>
    )
  }
}

export default SearchBar;
