// implement AddMovie component here
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
      onSearchTextChange: '',
      bookmarkedOnly: '',
      onBookmakedChange: '',
      selectedGenre: '',
      onSelectedGenreChange: '',
    };
  }

  render() {
    const { movies } = this.props;
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ AddMovies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmakedChange: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
};

export default MovieLibrary;
