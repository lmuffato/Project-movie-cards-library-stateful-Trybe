// implement AddMovie component here !!!estado!!!
import React, { Component } from 'react';
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
            bookmarkedOnly ? movies : movies.filter((movie) => movie.bookmarked)
            selectedGenre ? movies : movies.filter((movie) => movie.bookmarked)

          }
        />
      </div>
    );
  }
}

export default MovieLibrary;
