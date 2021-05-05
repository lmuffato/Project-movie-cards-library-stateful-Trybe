import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { value } = target;
    this.setState({
      bookmarkedOnly: value,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  addMovie(movie) {
    this.setState((state) => ({
      movies: [...state.movies, movie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { onBookmarkedChange,
      onSearchTextChange,
      onSelectedGenreChange,
      addMovie } = this;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ onSearchTextChange }
          onBookmarkedChange={ onBookmarkedChange }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <AddMovie onClick={ addMovie } />
        <MovieList movies={ movies } />

      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
