import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      genre: '',
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.toggleBookmark = this.toggleBookmark.bind(this);
    this.handleGenderInput = this.handleGenderInput.bind(this);
  }

  handleSearchInput(e) {
    const { value } = e.target;
    this.setState({ searchText: value });
  }

  handleGenderInput(e) {
    const { value } = e.target;
    this.setState({ genre: value });
  }

  toggleBookmark() {
    const { bookmarkedOnly } = this.state;

    if (bookmarkedOnly) {
      this.setState({ bookmarkedOnly: false });
      return;
    }

    this.setState({ bookmarkedOnly: true });
  }

  render() {
    const { movies } = this.props;
    const { searchText, genre, bookmarkedOnly } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchInput }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.toggleBookmark }
          selectedGenre={ genre }
          onSelectedGenreChange={ this.handleGenderInput }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ () => console.log() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
