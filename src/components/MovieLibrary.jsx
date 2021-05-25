import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { moviesMly } = this.props;
    this.state = {
      searchText: '',
      movies: moviesMly };
  }

  onClick = (addMovie) => {
    this.setState((previusState) => ({
      movies: [...previusState.movies, addMovie],
    }));
  }

  onSearchTextChange = (event) => {
    console.log(event);
    this.setState({ searchText: event.target.value });
  }

  render() {
    const { movies, searchText } = this.state;
    const filterMovies = movies
      .filter(({ title }) => title.toLowerCase().includes(searchText.toLowerCase()));
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
        />
        <MovieList movies={ filterMovies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
