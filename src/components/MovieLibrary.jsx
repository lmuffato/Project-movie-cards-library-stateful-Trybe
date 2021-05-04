// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handelChangeInput = (event) => {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
  }

  handelChangeChecked = (event) => {
    const { checked } = event.target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  handelChangeSelect = (event) => {
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
    });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handelChangeInput }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handelChangeChecked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handelChangeSelect }
        />
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
