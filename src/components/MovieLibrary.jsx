// 15 - Crie um componente chamado <MovieLibrary />
// Esse componente renderizará a biblioteca de filmes que renderizará a searchBar e o addMovies para filtrar por filmes e adicionar um filme à biblioteca respectivamente.

// <MovieLibrary /> deve receber como props:

// movies, um array
// O que será verificado:

// Será validado se o componente é renderizado com sucesso

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: 'oi',
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
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
