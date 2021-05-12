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
        <form data-testid='search-bar-form'>
          <label>
            <input type="checkbox"/>check me!
          </label>
        </form>

      </div>
    )
  }
}

export default SearchBar;
