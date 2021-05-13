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
          {/* <label htmlFor="text-input">
            inclui o texto
            <br />
            <input 
              id="text-input" 
              type="text"
              value={ this.props.searchText }
              onChange={ this.props.onSearchTextChanged }
              />
              check me!
          </label> */}
        </form>

      </div>
    )
  }
}

export default SearchBar;
