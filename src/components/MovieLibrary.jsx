import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor({ movies }) {
    super(movies);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  changeText = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  changeBookmark = (event) => {
    this.setState({
      bookmarkedOnly: event.target.value,
    });
  }

  changeGender = (event) => {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeBookmark }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeGender }
        />
        <MovieList movies={ movies } />
        <AddMovie onCLick="callback" />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieLibrary;
