import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange({ target: { value } }) {
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target: { checked } }) {
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({
      selectedGenre: value,
    });
  }

  addMovie({ title, subtitle, storyline, rating, imagePath, genre }) {
    const newMovie = {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    };
    this.setState((oldState) => {
      oldState.movies.push(newMovie);
      return { movies: oldState.movies };
    });
  }

  filteredMovies() {
    
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const propsSearchBar = {
      searchText,
      onSearchTextChange: this.onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange: this.onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange: this.onSelectedGenreChange,
    };

    return (
      <div>
        <SearchBar { ...propsSearchBar } />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
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
