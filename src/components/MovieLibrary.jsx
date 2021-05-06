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
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    const { movies } = this.props;
    this.setState({
      searchText: value,
      movies: movies.filter((movie) => {
        const title = movie.title.toLowerCase();
        const subtitle = movie.subtitle.toLowerCase();
        const storyline = movie.storyline.toLowerCase();
        return title.includes(value.toLowerCase())
        || subtitle.includes(value.toLowerCase())
        || storyline.includes(value.toLowerCase());
      }),
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    const { movies } = this.props;
    this.setState(() => ({
      bookmarkedOnly: checked,
      movies: movies.filter((movie) => (checked ? movie.bookmarked === true : movie)),
    }));
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    const { movies } = this.props;
    this.setState({
      selectedGenre: value,
      movies: movies.filter((movie) => (value === '' ? movie : movie.genre === value)),
    });
  }

  addMovie(movie) {
    this.setState((state) => ({
      movies: [...state.movies, movie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const {
      onBookmarkedChange,
      onSearchTextChange,
      onSelectedGenreChange,
      addMovie,
    } = this;
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
        <MovieList movies={ movies } />
        <AddMovie onClick={ addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
