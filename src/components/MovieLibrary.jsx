import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.OnClickFunction = this.OnClickFunction.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  OnClickFunction(addMovie) {
    const { movies } = this.state;
    this.setState({ movies: movies.concat(addMovie) });
  }

  movieArrayFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let searchResult = movies;

    if (bookmarkedOnly === true) {
      searchResult = movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      searchResult = movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText.length > 0) {
      searchResult = movies.filter((movie) => movie.title.toUpperCase()
        .includes(searchText.toUpperCase())
        || movie.subtitle.toUpperCase().includes(searchText.toUpperCase())
        || movie.storyline.toUpperCase().includes(searchText.toUpperCase()));
    }
    return searchResult;
  }

  render() {
    const { handleChange, OnClickFunction } = this;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ handleChange }

        />
        <MovieList movies={ this.movieArrayFilter() } />
        <AddMovie onClick={ OnClickFunction } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
