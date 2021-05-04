import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChangeAlgumaCoisa = this.handleChangeAlgumaCoisa.bind(this);
  }

  handleChangeAlgumaCoisa(stateName, value) {
    this.setState({ [stateName]: value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChangeAlgumaCoisa }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChangeAlgumaCoisa }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChangeAlgumaCoisa }
        />
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
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
