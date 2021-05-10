// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleCheck = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleFavorites = (event) => {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  handleGenre = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          movies={ movies }
          onSearchTextChange={ this.handleCheck }
          onBookmarkedChange={ this.handleFavorites }
          onSelectedGenreChange={ this.handleGenre }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;
