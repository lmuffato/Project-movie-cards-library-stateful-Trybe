import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={
            (event) => this.setState({ searchText: event.target.value })
          }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={
            (event) => this.setState({ bookmarkedOnly: event.target.value })
          }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={
            (event) => this.setState({ selectedGenre: event.target.value })
          }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.object,
}.isRequired;

export default MovieLibrary;
