// 15 - Crie um componente chamado <MovieLibrary />
// Esse componente renderizará a biblioteca de filmes que renderizará a searchBar e o addMovies para filtrar por filmes e adicionar um filme à biblioteca respectivamente.

// <MovieLibrary /> deve receber como props:

// movies, um array
// O que será verificado:

// Será validado se o componente é renderizado com sucesso

import React, { Component } from 'react';

import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      value: 'oi',
      bookmarkedOnly: false,
      selectedGenre: 'ted',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checkbox : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ this.state.value }
          // onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ this.state.bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ this.state.selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={this.props.movies} />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;
