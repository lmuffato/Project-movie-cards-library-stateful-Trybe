// implement AddMovie component here !!!estado!!!
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import movies from '../data';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
  }

  onSearchTextChange() {

  }

  onBookmarkedChange() {
    bookmarkedOnly ? movies : movies.filter((movie) => movie.bookmarked);
  }

  onSelectedGenreChange() {

  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList
          movies={



          }
        />
      </div>
    );
  }
}

export default MovieLibrary;
